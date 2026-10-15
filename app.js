/* ============================================================
   E-JUKU - Versi GitHub Pages (100% Static, Tanpa Backend)
   Database: localStorage
   ============================================================ */

/* ================== LOCAL DATABASE ================== */
const DB = {
  KEY: 'ejuku_db_v1',

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { console.warn('DB corrupt, reset.'); }
    return this.seed();
  },

  save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); }
    catch (e) { toast('Penyimpanan penuh', 'error'); }
  },

  seed() {
    const db = {
      users: [{
        id: 1,
        name: 'Admin E-Juku',
        email: 'admin@ejuku.id',
        password: 'admin123',
        role: 'admin',
        phone: '08000000000',
        address: 'Makassar, Sulawesi Selatan'
      }],
      products: [
        { id: 1, name: 'Ikan Kembung Segar', price: 35000, unit: 'kg', stock: 100, category: 'Ikan Segar', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500', seller: 'Nelayan Makassar', description: 'Ikan kembung segar langsung dari nelayan Makassar.' },
        { id: 2, name: 'Udang Vaname', price: 85000, unit: 'kg', stock: 50, category: 'Udang', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500', seller: 'Tambak Pinrang', description: 'Udang vaname segar kualitas ekspor.' },
        { id: 3, name: 'Cumi-Cumi Segar', price: 65000, unit: 'kg', stock: 40, category: 'Cumi', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=500', seller: 'Nelayan Bulukumba', description: 'Cumi-cumi segar hasil tangkapan pagi.' },
        { id: 4, name: 'Kepiting Bakau', price: 120000, unit: 'kg', stock: 25, category: 'Kepiting', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=500', seller: 'Tambak Barru', description: 'Kepiting bakau hidup, segar.' },
        { id: 5, name: 'Kerang Dara', price: 25000, unit: 'kg', stock: 60, category: 'Kerang', image: 'https://images.unsplash.com/photo-1611171711791-b34fa4e1d3b7?w=500', seller: 'Nelayan Takalar', description: 'Kerang dara segar bersih.' },
        { id: 6, name: 'Lobster Air Laut', price: 350000, unit: 'kg', stock: 10, category: 'Lobster', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=500', seller: 'Nelayan Makassar', description: 'Lobster segar premium.' },
        { id: 7, name: 'Ikan Bandeng', price: 40000, unit: 'kg', stock: 70, category: 'Ikan Segar', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500', seller: 'Tambak Maros', description: 'Ikan bandeng segar tambak.' },
        { id: 8, name: 'Rumput Laut Kering', price: 20000, unit: 'kg', stock: 80, category: 'Olahan', image: 'https://images.unsplash.com/photo-1611171711791-b34fa4e1d3b7?w=500', seller: 'UMKM Jeneponto', description: 'Rumput laut kering siap olah.' }
      ],
      carts: [],
      orders: [],
      orderCounter: 0,
      userCounter: 1
    };
    this.save(db);
    return db;
  },

  reset() {
    localStorage.removeItem(this.KEY);
    localStorage.removeItem('ejuku_session');
    return this.seed();
  }
};

let db = DB.load();

/* ================== APP STATE ================== */
const state = {
  user: JSON.parse(localStorage.getItem('ejuku_session') || 'null'),
  products: [],
  cart: [],
  orders: [],
  category: '',
  search: ''
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* ================== UTILS ================== */
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

function saveSession() {
  if (state.user) localStorage.setItem('ejuku_session', JSON.stringify(state.user));
  else localStorage.removeItem('ejuku_session');
}

/* ================== AUTH ================== */
$('#formLogin').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = $('#loginEmail').value.trim().toLowerCase();
  const password = $('#loginPassword').value;
  const user = db.users.find(u => u.email.toLowerCase() === email && u.password === password);
  if (!user) return toast('Email atau password salah', 'error');
  state.user = user;
  saveSession();
  toast('Selamat datang, ' + user.name + '!', 'success');
  afterLogin();
});

$('#formRegister').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#regName').value.trim();
  const email = $('#regEmail').value.trim().toLowerCase();
  const password = $('#regPassword').value;
  const phone = $('#regPhone').value.trim();
  const address = $('#regAddress').value.trim();

  if (password.length < 6) return toast('Password minimal 6 karakter', 'error');
  if (db.users.find(u => u.email.toLowerCase() === email))
    return toast('Email sudah terdaftar', 'error');

  db.userCounter++;
  const user = {
    id: db.userCounter,
    name, email, password,
    role: 'buyer',
    phone, address
  };
  db.users.push(user);
  DB.save(db);
  state.user = user;
  saveSession();
  toast('Pendaftaran berhasil!', 'success');
  afterLogin();
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
  state.user = null;
  saveSession();
  $('#header').style.display = 'none';
  $('#bottomNav').style.display = 'none';
  showView('auth');
});

/* ================== BOOT ================== */
function afterLogin() {
  db = DB.load(); // refresh
  $('#header').style.display = 'block';
  $('#bottomNav').style.display = 'flex';
  loadProducts();
  loadCart();
  showView('home');
}

/* ================== PRODUCTS ================== */
const CATEGORIES = ['Semua', 'Ikan Segar', 'Udang', 'Cumi', 'Kepiting', 'Kerang', 'Lobster', 'Olahan'];

function loadProducts() {
  let list = [...db.products];
  if (state.search) list = list.filter(p => p.name.toLowerCase().includes(state.search.toLowerCase()));
  if (state.category) list = list.filter(p => p.category === state.category);
  state.products = list;
  renderProducts();
  renderCategories();
}

function renderCategories() {
  $('#categories').innerHTML = CATEGORIES.map(c => {
    const active = (state.category === c) || (!state.category && c === 'Semua');
    return `<button class="cat-chip ${active ? 'active' : ''}" data-cat="${c}">${c}</button>`;
  }).join('');
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

/* ================== CART ================== */
function cartKey() { return 'carts_' + (state.user ? state.user.id : 'guest'); }

function loadCart() {
  const all = db.carts || [];
  state.cart = all.filter(c => c.userId === state.user.id);
  updateCartBadge();
}

function persistCarts() {
  // Merge cart user ke db.carts
  db.carts = (db.carts || []).filter(c => c.userId !== state.user.id);
  db.carts.push(...state.cart);
  DB.save(db);
}

function updateCartBadge() {
  const total = state.cart.reduce((s, i) => s + i.qty, 0);
  $('#cartCount').textContent = total;
}

function addToCart(productId) {
  let item = state.cart.find(c => c.productId === productId);
  if (item) item.qty++;
  else state.cart.push({ id: Date.now(), userId: state.user.id, productId, qty: 1 });
  persistCarts();
  updateCartBadge();
  toast('Ditambahkan ke keranjang', 'success');
}

function renderCart() {
  loadCart();
  const list = $('#cartList');
  const summary = $('#cartSummary');

  if (!state.cart.length) {
    list.innerHTML = '<div class="empty"><div class="emoji">🛒</div><p>Keranjang masih kosong</p></div>';
    summary.innerHTML = '';
    return;
  }

  list.innerHTML = state.cart.map(c => {
    const p = db.products.find(x => x.id === c.productId);
    if (!p) return '';
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/100'">
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <div class="price">${rp(p.price)} / ${p.unit}</div>
          <div class="qty-ctrl">
            <button data-minus="${c.id}">−</button>
            <span>${c.qty}</span>
            <button data-plus="${c.id}">+</button>
          </div>
        </div>
        <button class="btn-del" data-del="${c.id}">🗑️</button>
      </div>`;
  }).join('');

  const subtotal = state.cart.reduce((s, i) => {
    const p = db.products.find(x => x.id === i.productId);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
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

function changeQty(id, delta) {
  const item = state.cart.find(c => c.id === id);
  if (!item) return;
  const newQty = item.qty + delta;
  if (newQty < 1) return removeItem(id);
  item.qty = newQty;
  persistCarts();
  updateCartBadge();
  renderCart();
}

function removeItem(id) {
  state.cart = state.cart.filter(c => c.id !== id);
  persistCarts();
  updateCartBadge();
  renderCart();
  toast('Item dihapus');
}

/* ================== CHECKOUT ================== */
function openCheckout() {
  $('#coAddress').value = state.user?.address || '';
  $('#modalCheckout').classList.add('open');
}

$('#coCancel').addEventListener('click', () => $('#modalCheckout').classList.remove('open'));

$('#coConfirm').addEventListener('click', () => {
  if (!state.cart.length) return toast('Keranjang kosong', 'error');

  const items = state.cart.map(c => {
    const p = db.products.find(x => x.id === c.productId);
    return p ? { productId: p.id, name: p.name, price: p.price, qty: c.qty, image: p.image } : null;
  }).filter(Boolean);

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shippingFee = 10000, serviceFee = 2000;

  db.orderCounter = (db.orderCounter || 0) + 1;
  const order = {
    id: db.orderCounter,
    code: 'EJ' + String(db.orderCounter).padStart(6, '0'),
    userId: state.user.id,
    items,
    subtotal, shippingFee, serviceFee,
    total: subtotal + shippingFee + serviceFee,
    shippingAddress: $('#coAddress').value || state.user.address || '-',
    paymentMethod: $('#coPayment').value,
    note: $('#coNote').value,
    status: 'Menunggu Konfirmasi',
    courier: 'Kurir E-Juku',
    createdAt: new Date().toISOString()
  };
  db.orders.push(order);

  // Kurangi stok
  items.forEach(i => {
    const p = db.products.find(x => x.id === i.productId);
    if (p) p.stock = Math.max(0, p.stock - i.qty);
  });

  // Kosongkan cart user
  state.cart = [];
  persistCarts();
  DB.save(db);
  updateCartBadge();

  $('#modalCheckout').classList.remove('open');
  toast('Pesanan ' + order.code + ' berhasil!', 'success');
  showView('orders');
});

/* ================== ORDERS ================== */
function loadOrders() {
  state.orders = (db.orders || [])
    .filter(o => o.userId === state.user.id)
    .sort((a, b) => b.id - a.id);
}

function renderOrders() {
  loadOrders();
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
      <div class="order-items">${o.items.map(i => `${i.qty}× ${i.name}`).join('<br>')}</div>
      <div class="muted small" style="margin-bottom:8px">📍 ${o.shippingAddress}</div>
      <div class="order-total"><span>Total</span><span>${rp(o.total)}</span></div>
    </div>
  `).join('');
}

/* ================== PROFILE ================== */
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

/* ================== NAV ================== */
$$('.bottom-nav button').forEach(b => {
  b.addEventListener('click', () => showView(b.dataset.view));
});
$('#btnCartTop').addEventListener('click', () => showView('cart'));

/* ================== SEARCH ================== */
let searchTimer;
$('#searchInput').addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.search = e.target.value.trim();
    loadProducts();
  }, 250);
});

/* ================== INIT ================== */
(function init() {
  if (state.user) {
    // Pastikan user masih ada di db
    const found = db.users.find(u => u.id === state.user.id);
    if (found) {
      state.user = found;
      afterLogin();
      return;
    } else {
      state.user = null;
      saveSession();
    }
  }
  showView('auth');
})();
