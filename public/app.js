/* ============ E-JUKU FRONTEND ============ */
const state = {
  token: localStorage.getItem('ejuku_token') || '',
  user: JSON.parse(localStorage.getItem('ejuku_user') || 'null'),
  products: [],
  cart: [],
  orders: [],
  category: '',
  search: ''
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* ============ API HELPER ============ */
async function api(path, opts = {}) {
  const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) };
  if (state.token) headers['Authorization'] = 'Bearer ' + state.token;
  const res = await fetch('/api' + path, { ...opts, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Terjadi kesalahan');
  return data;
}

/* ============ UTILS ============ */
function rp(n) { return 'Rp' + (n || 0).toLocaleString('id-ID'); }

function toast(msg, type = '') {
  const t = $('#toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(t._tid);
  t._tid = setTimeout(() => { t.className = 'toast ' + type; }, 2200);
}

function showView(name) {
  $$('.view').forEach(v => v.classList.remove('active'));
  $('#view-' + name).classList.add('active');
  $$('.bottom-nav button').forEach(b => b.classList.toggle('active', b.dataset.view === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'cart') renderCart();
  if (name === 'orders') renderOrders();
  if (name === 'profile') renderProfile();
}

/* ============ AUTH ============ */
$('#formLogin').addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const data = await api('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: $('#loginEmail').value, password: $('#loginPassword').value })
    });
    state.token = data.token;
    state.user = data.user;
    localStorage.setItem('ejuku_token', data.token);
    localStorage.setItem('ejuku_user', JSON.stringify(data.user));
    toast('Selamat datang, ' + data.user.name + '!', 'success');
    await afterLogin();
  } catch (err) { toast(err.message, 'error'); }
});

$('#formRegister').addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const data = await api('/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name: $('#regName').value,
        email: $('#regEmail').value,
        password: $('#regPassword').value,
        phone: $('#regPhone').value,
        address: $('#regAddress').value
      })
    });
    state.token = data.token;
    state.user = data.user;
    localStorage.setItem('ejuku_token', data.token);
    localStorage.setItem('ejuku_user', JSON.stringify(data.user));
    toast('Pendaftaran berhasil!', 'success');
    await afterLogin();
  } catch (err) { toast(err.message, 'error'); }
});

$$('.tab').forEach(tab => tab.addEventListener('click', () => {
  $$('.tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const isLogin = tab.dataset.tab === 'login';
  $('#formLogin').style.display = isLogin ? 'block' : 'none';
  $('#formRegister').style.display = isLogin ? 'none' : 'block';
}));

$('#btnLogout').addEventListener('click', () => {
  if (!confirm('Yakin ingin keluar?')) return;
  localStorage.removeItem('ejuku_token');
  localStorage.removeItem('ejuku_user');
  state.token = ''; state.user = null;
  $('#header').style.display = 'none';
  $('#bottomNav').style.display = 'none';
  showView('auth');
});

/* ============ BOOT ============ */
async function afterLogin() {
  $('#header').style.display = 'block';
  $('#bottomNav').style.display = 'flex';
  await loadProducts();
  await loadCart();
  showView('home');
}

/* ============ PRODUCTS ============ */
const CATEGORIES = ['Semua', 'Ikan Segar', 'Udang', 'Cumi', 'Kepiting', 'Kerang', 'Lobster', 'Olahan'];

async function loadProducts() {
  try {
    const params = new URLSearchParams();
    if (state.search) params.set('q', state.search);
    if (state.category && state.category !== 'Semua') params.set('category', state.category);
    state.products = await api('/products?' + params.toString());
    renderProducts();
    renderCategories();
  } catch (e) { toast(e.message, 'error'); }
}

function renderCategories() {
  $('#categories').innerHTML = CATEGORIES.map(c =>
    `<button class="cat-chip ${state.category === c || (!state.category && c === 'Semua') ? 'active' : ''}" data-cat="${c}">${c}</button>`
  ).join('');
  $$('.cat-chip').forEach(b => b.addEventListener('click', () => {
    state.category = b.dataset.cat === 'Semua' ? '' : b.dataset.cat;
    loadProducts();
  }));
}

function renderProducts() {
  const grid = $('#productGrid');
  if (!state.products.length) {
    grid.innerHTML = '<div class="empty" style="grid-column:1/-1"><div class="emoji">🐟</div><p>Produk tidak ditemukan</p></div>';
    return;
  }
  grid.innerHTML = state.products.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=E-Juku'">
      <div class="card-body">
        <h4 class="card-name">${p.name}</h4>
        <p class="card-seller">🏪 ${p.seller}</p>
        <p class="card-price">${rp(p.price)} <small>/ ${p.unit}</small></p>
        <button class="btn btn-primary btn-sm" data-add="${p.id}">+ Keranjang</button>
      </div>
    </div>
  `).join('');
  $$('[data-add]').forEach(b => b.addEventListener('click', () => addToCart(+b.dataset.add)));
}

/* ============ CART ============ */
async function loadCart() {
  try {
    state.cart = await api('/cart');
    updateCartBadge();
  } catch (e) { /* silent */ }
}

function updateCartBadge() {
  const total = state.cart.reduce((s, i) => s + i.qty, 0);
  $('#cartCount').textContent = total;
}

async function addToCart(productId) {
  try {
    await api('/cart', { method: 'POST', body: JSON.stringify({ productId, qty: 1 }) });
    toast('Ditambahkan ke keranjang', 'success');
    await loadCart();
    renderProducts();
  } catch (e) { toast(e.message, 'error'); }
}

function renderCart() {
  const list = $('#cartList');
  const summary = $('#cartSummary');
  if (!state.cart.length) {
    list.innerHTML = '<div class="empty"><div class="emoji">🛒</div><p>Keranjang masih kosong</p></div>';
    summary.innerHTML = '';
    return;
  }
  list.innerHTML = state.cart.map(c => `
    <div class="cart-item">
      <img src="${c.product.image}" alt="${c.product.name}" onerror="this.src='https://via.placeholder.com/100'">
      <div class="cart-item-info">
        <h4>${c.product.name}</h4>
        <div class="price">${rp(c.product.price)} / ${c.product.unit}</div>
        <div class="qty-ctrl">
          <button data-minus="${c.id}">−</button>
          <span>${c.qty}</span>
          <button data-plus="${c.id}">+</button>
        </div>
      </div>
      <button class="btn-del" data-del="${c.id}">🗑️</button>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping = 10000, service = 2000;
  summary.innerHTML = `
    <div class="row"><span>Subtotal</span><span>${rp(subtotal)}</span></div>
    <div class="row"><span>Ongkir</span><span>${rp(shipping)}</span></div>
    <div class="row"><span>Biaya Layanan</span><span>${rp(service)}</span></div>
    <div class="row total"><span>Total</span><span>${rp(subtotal + shipping + service)}</span></div>
    <button class="btn btn-primary" id="btnCheckout">Lanjut ke Checkout</button>
  `;

  $$('[data-minus]').forEach(b => b.addEventListener('click', () => changeQty(+b.dataset.minus, -1)));
  $$('[data-plus]').forEach(b => b.addEventListener('click', () => changeQty(+b.dataset.plus, +1)));
  $$('[data-del]').forEach(b => b.addEventListener('click', () => removeItem(+b.dataset.del)));
  $('#btnCheckout').addEventListener('click', openCheckout);
}

async function changeQty(id, delta) {
  const item = state.cart.find(c => c.id === id);
  if (!item) return;
  const newQty = item.qty + delta;
  if (newQty < 1) return removeItem(id);
  try {
    await api('/cart/' + id, { method: 'PATCH', body: JSON.stringify({ qty: newQty }) });
    await loadCart();
    renderCart();
  } catch (e) { toast(e.message, 'error'); }
}

async function removeItem(id) {
  try {
    await api('/cart/' + id, { method: 'DELETE' });
    await loadCart();
    renderCart();
    toast('Item dihapus');
  } catch (e) { toast(e.message, 'error'); }
}

/* ============ CHECKOUT ============ */
function openCheckout() {
  $('#coAddress').value = state.user?.address || '';
  $('#modalCheckout').classList.add('open');
}

$('#coCancel').addEventListener('click', () => $('#modalCheckout').classList.remove('open'));

$('#coConfirm').addEventListener('click', async () => {
  try {
    const order = await api('/orders', {
      method: 'POST',
      body: JSON.stringify({
        shippingAddress: $('#coAddress').value,
        paymentMethod: $('#coPayment').value,
        note: $('#coNote').value
      })
    });
    $('#modalCheckout').classList.remove('open');
    toast('Pesanan ' + order.code + ' berhasil!', 'success');
    await loadCart();
    await loadOrders();
    showView('orders');
  } catch (e) { toast(e.message, 'error'); }
});

/* ============ ORDERS ============ */
async function loadOrders() {
  try {
    state.orders = await api('/orders');
  } catch (e) { state.orders = []; }
}

async function renderOrders() {
  await loadOrders();
  const list = $('#ordersList');
  if (!state.orders.length) {
    list.innerHTML = '<div class="empty"><div class="emoji">📦</div><p>Belum ada pesanan</p></div>';
    return;
  }
  list.innerHTML = state.orders.map(o => `
    <div class="order-card">
      <div class="order-head">
        <div>
          <div class="order-code">${o.code}</div>
          <div class="muted small">${new Date(o.createdAt).toLocaleString('id-ID')}</div>
        </div>
        <div class="order-status">${o.status}</div>
      </div>
      <div class="order-items">
        ${o.items.map(i => `${i.qty}× ${i.name}`).join('<br>')}
      </div>
      <div class="muted small" style="margin-bottom:8px">📍 ${o.shippingAddress}</div>
      <div class="order-total"><span>Total</span><span>${rp(o.total)}</span></div>
    </div>
  `).join('');
}

/* ============ PROFILE ============ */
function renderProfile() {
  const u = state.user;
  if (!u) return;
  $('#profileCard').innerHTML = `
    <h3>${u.name}</h3>
    <div class="role">${u.role === 'admin' ? 'Administrator' : 'Pembeli'}</div>
    <p>📧 ${u.email}</p>
    <p>📱 ${u.phone || '-'}</p>
    <p>📍 ${u.address || '-'}</p>
  `;
}

/* ============ NAV ============ */
$$('.bottom-nav button').forEach(b => {
  b.addEventListener('click', () => showView(b.dataset.view));
});
$('#btnCartTop').addEventListener('click', () => showView('cart'));

/* ============ SEARCH ============ */
let searchTimer;
$('#searchInput').addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.search = e.target.value.trim();
    loadProducts();
  }, 300);
});

/* ============ INIT ============ */
(async function init() {
  if (state.token && state.user) {
    try {
      await api('/auth/me');
      await afterLogin();
    } catch {
      localStorage.clear();
      state.token = ''; state.user = null;
      showView('auth');
    }
  } else {
    showView('auth');
  }
})();