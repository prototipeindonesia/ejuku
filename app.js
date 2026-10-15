/* ==========================================================
   E-JUKU v2 - Shopee-Style Marketplace Hasil Laut
   Static SPA - GitHub Pages ready
   ========================================================== */

/* ============ SVG ICON LIBRARY ============ */
const IC = {
  home:`<svg class="i" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  cart:`<svg class="i" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>`,
  order:`<svg class="i" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 12l2 2 4-4"/></svg>`,
  user:`<svg class="i" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  search:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
  bell:`<svg class="i" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>`,
  back:`<svg class="i" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`,
  chev:`<svg class="i i-sm" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`,
  plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  minus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>`,
  trash:`<svg class="i" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,
  check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  heart:`<svg class="i" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  star:`<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>`,
  pin:`<svg class="i" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock:`<svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  chat:`<svg class="i" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  send:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  truck:`<svg class="i" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  card:`<svg class="i" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  wallet:`<svg class="i" viewBox="0 0 24 24"><path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 000 4h4v-4z"/></svg>`,
  voucher:`<svg class="i" viewBox="0 0 24 24"><path d="M20 12a2 2 0 012-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v4a2 2 0 010 4v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 01-2-2z"/><line x1="13" y1="5" x2="13" y2="19" stroke-dasharray="2 3"/></svg>`,
  logout:`<svg class="i" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  fish:`<svg class="i" viewBox="0 0 24 24"><path d="M6.5 12c1.5-3 5-5 9-5 3 0 5.5 1 6.5 2.5-1 1.5-3.5 2.5-6.5 2.5-4 0-7.5-2-9-5z" transform="translate(0 5)"/><path d="M6.5 17l-3 3M6.5 17l-3-3" transform="translate(0 -5)"/><circle cx="16" cy="10" r=".5" fill="currentColor"/></svg>`,
  store:`<svg class="i" viewBox="0 0 24 24"><path d="M3 9l1.5-5h15L21 9"/><path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9"/><path d="M3 9h18"/><path d="M9 22V12h6v10"/></svg>`,
  shield:`<svg class="i" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
  bolt:`<svg class="i" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  fire:`<svg class="i" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>`,
  gift:`<svg class="i" viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>`,
  menu:`<svg class="i" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close:`<svg class="i" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  camera:`<svg class="i" viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  edit:`<svg class="i" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  settings:`<svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`
};
const svg = (name, cls='') => IC[name] ? IC[name].replace('class="i', `class="i ${cls}`) : '';

/* ============ LOCAL DB ============ */
const DB = {
  KEY:'ejuku_v2',
  load(){ try{ const r=localStorage.getItem(this.KEY); if(r) return JSON.parse(r);}catch(e){} return this.seed(); },
  save(d){ try{ localStorage.setItem(this.KEY, JSON.stringify(d)); }catch(e){ toast('Penyimpanan penuh','error'); } },
  reset(){ localStorage.removeItem(this.KEY); return this.seed(); },
  seed(){
    const now = Date.now();
    const d = {
      users:[{
        id:1, name:'Admin E-Juku', email:'admin@ejuku.id', password:'admin123',
        phone:'081234567890', role:'admin', avatar:null,
        addresses:[
          { id:1, label:'Rumah', name:'Admin E-Juku', phone:'081234567890', address:'Jl. Pantai Losari No. 10, Makassar', lat:-5.1476, lng:119.4327, isDefault:true }
        ],
        paymentMethods:[
          { id:1, type:'ewallet', name:'OVO', detail:'0812****7890' },
          { id:2, type:'bank', name:'BCA', detail:'1234****5678' }
        ],
        createdAt: now
      }],
      products:[
        {id:1,name:'Ikan Kembung Segar',price:35000,unit:'kg',stock:100,category:'Ikan Segar',image:'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600',sellerId:101,description:'Ikan kembung segar langsung dari nelayan Makassar. Ditangkap pagi ini dan langsung dikirim dengan cold box.',rating:4.8,sold:234,reviews:[{u:'Budi S.',r:5,c:'Ikan sangat segar, pengiriman cepat!',t:'2 hari lalu'},{u:'Siti A.',r:5,c:'Mantap, akan order lagi.',t:'5 hari lalu'}]},
        {id:2,name:'Udang Vaname Premium',price:85000,unit:'kg',stock:50,category:'Udang',image:'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600',sellerId:102,description:'Udang vaname segar kualitas ekspor, ukuran 40-50 ekor/kg.',rating:4.9,sold:156,reviews:[{u:'Andi M.',r:5,c:'Udangnya besar-besar dan segar.',t:'1 hari lalu'}]},
        {id:3,name:'Cumi-Cumi Segar',price:65000,unit:'kg',stock:40,category:'Cumi',image:'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=600',sellerId:103,description:'Cumi-cumi segar hasil tangkapan pagi, sudah dibersihkan.',rating:4.7,sold:89,reviews:[]},
        {id:4,name:'Kepiting Bakau Hidup',price:120000,unit:'kg',stock:25,category:'Kepiting',image:'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600',sellerId:104,description:'Kepiting bakau hidup, berat 200-300 gram per ekor.',rating:4.9,sold:67,reviews:[]},
        {id:5,name:'Kerang Dara Bersih',price:25000,unit:'kg',stock:60,category:'Kerang',image:'https://images.unsplash.com/photo-1611171711791-b34fa4e1d3b7?w=600',sellerId:105,description:'Kerang dara segar sudah direndam & dibersihkan.',rating:4.6,sold:112,reviews:[]},
        {id:6,name:'Lobster Air Laut Premium',price:350000,unit:'kg',stock:10,category:'Lobster',image:'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600',sellerId:101,description:'Lobster segar premium, ukuran 200-300 gram.',rating:5.0,sold:34,reviews:[]},
        {id:7,name:'Ikan Bandeng Tambak',price:40000,unit:'kg',stock:70,category:'Ikan Segar',image:'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600',sellerId:106,description:'Ikan bandeng segar dari tambak Maros.',rating:4.5,sold:201,reviews:[]},
        {id:8,name:'Rumput Laut Kering',price:20000,unit:'kg',stock:80,category:'Olahan',image:'https://images.unsplash.com/photo-1611171711791-b34fa4e1d3b7?w=600',sellerId:107,description:'Rumput laut kering siap olah, hasil budidaya Jeneponto.',rating:4.4,sold:78,reviews:[]}
      ],
      sellers:{
        101:{id:101,name:'Nelayan Makassar',avatar:null,rating:4.9,city:'Makassar',lat:-5.1476,lng:119.4327,joined:'2022'},
        102:{id:102,name:'Tambak Pinrang',avatar:null,rating:4.8,city:'Pinrang',lat:-3.7859,lng:119.6513,joined:'2021'},
        103:{id:103,name:'Nelayan Bulukumba',avatar:null,rating:4.7,city:'Bulukumba',lat:-5.5577,lng:120.1964,joined:'2022'},
        104:{id:104,name:'Tambak Barru',avatar:null,rating:4.8,city:'Barru',lat:-4.4117,lng:119.6181,joined:'2020'},
        105:{id:105,name:'Nelayan Takalar',avatar:null,rating:4.6,city:'Takalar',lat:-5.4194,lng:119.4194,joined:'2023'},
        106:{id:106,name:'Tambak Maros',avatar:null,rating:4.5,city:'Maros',lat:-5.0042,lng:119.5739,joined:'2022'},
        107:{id:107,name:'UMKM Jeneponto',avatar:null,rating:4.4,city:'Jeneponto',lat:-5.6844,lng:119.7292,joined:'2023'}
      },
      carts:[], orders:[], notifications:[], chats:[],
      vouchers:[
        {id:1,code:'JUKU10',type:'percent',value:10,maxDisc:20000,minSpend:50000,description:'Diskon 10% maks Rp20.000',expiredAt:now+30*864e5},
        {id:2,code:'GRATISONGKIR',type:'shipping',value:10000,maxDisc:10000,minSpend:75000,description:'Gratis ongkir s/d Rp10.000',expiredAt:now+15*864e5},
        {id:3,code:'SEAFOOD5K',type:'fixed',value:5000,maxDisc:5000,minSpend:30000,description:'Potongan Rp5.000',expiredAt:now+30*864e5}
      ],
      counters:{user:1,order:0,notif:0}
    };
    this.save(d); return d;
  }
};
let db = DB.load();

/* ============ APP STATE ============ */
const S = {
  user: JSON.parse(localStorage.getItem('ejuku_v2_session') || 'null'),
  view: 'home',
  stack: [],
  products: [], category:'', search:'',
  cart: [], // {productId, qty, selected}
  selectedVoucher: null,
  checkout: { address:null, shipping:'reguler', payment:'qris', note:'', voucher:null },
  currentOrder: null,
  trackingTimer: null,
  map: null, mapMarker: null, mapLine: null
};

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const rp = n => 'Rp' + (n||0).toLocaleString('id-ID');
const uid = () => Date.now() + Math.floor(Math.random()*1000);

/* ============ SESSION ============ */
function saveSession(){ S.user ? localStorage.setItem('ejuku_v2_session', JSON.stringify(S.user)) : localStorage.removeItem('ejuku_v2_session'); }

/* ============ TOAST ============ */
function toast(msg, type=''){
  const t = $('#toast');
  t.textContent = msg;
  t.className = 'toast on ' + type;
  clearTimeout(t._t);
  t._t = setTimeout(()=>{ t.className = 'toast ' + type; }, 2400);
}

/* ============ ROUTER ============ */
function go(view, opts={}){
  if(S.view && S.view !== view && !opts.replace) S.stack.push({view:S.view, opts:S._opts || {}});
  S.view = view; S._opts = opts;
  window.scrollTo({top:0,behavior:'instant'});
  render();
}
function back(){
  const prev = S.stack.pop();
  if(prev){ S.view = prev.view; S._opts = prev.opts; render(); }
  else go('home', {replace:true});
}

/* ============ HELPERS ============ */
function getCart(){ return db.carts.filter(c=>c.userId === S.user.id); }
function saveCarts(){ DB.save(db); }
function calcSubtotal(items){
  return items.reduce((s,i)=>{ const p = db.products.find(x=>x.id===i.productId); return s + (p?p.price*i.qty:0); },0);
}
function applyVoucher(subtotal, shipping, v){
  if(!v) return {disc:0, shippingDisc:0};
  if(subtotal < v.minSpend) return {disc:0, shippingDisc:0, invalid:true};
  if(v.type==='percent') return {disc: Math.min(subtotal*v.value/100, v.maxDisc), shippingDisc:0};
  if(v.type==='fixed') return {disc: Math.min(v.value, v.maxDisc), shippingDisc:0};
  if(v.type==='shipping') return {disc:0, shippingDisc: Math.min(shipping, v.maxDisc)};
  return {disc:0, shippingDisc:0};
}

/* ============ NOTIFICATIONS ============ */
function notify(type, title, body, orderId){
  db.counters.notif++;
  db.notifications.push({
    id: db.counters.notif, userId: S.user.id, type, title, body,
    orderId: orderId||null, read: false, createdAt: Date.now()
  });
  DB.save(db);
  renderBadges();
}
function unreadNotif(){ return db.notifications.filter(n=>n.userId===S.user.id && !n.read).length; }
function renderBadges(){
  const n = unreadNotif();
  const cart = getCart().reduce((s,c)=>s+c.qty,0);
  const bnBell = $('#bellCount'); if(bnBell) bnBell.textContent = n;
  const bnBell2 = $('#bellCount2'); if(bnBell2) bnBell2.textContent = n;
  const bnCart = $('#cartCount'); if(bnCart) bnCart.textContent = cart;
  const bnNavCart = $('#navCartCount'); if(bnNavCart){ bnNavCart.textContent = cart; bnNavCart.style.display = cart?'':'none'; }
  const bnNavNotif = $('#navNotifCount'); if(bnNavNotif){ bnNavNotif.textContent = n; bnNavNotif.style.display = n?'':'none'; }
}

/* ============ RENDER ROOT ============ */
function render(){
  const app = $('#app');
  if(!S.user){ app.innerHTML = viewAuth(); bindAuth(); return; }
  const top = viewTopbar();
  const content = viewContent();
  const nav = viewBottomNav();
  app.innerHTML = top + content + nav;
  bindGlobal();
  renderBadges();
  afterRender();
}

/* ============ TOPBAR ============ */
function viewTopbar(){
  const v = S.view;
  if(['home'].includes(v)) {
    return `<header class="topbar brand">
      <img src="logoejuku.png" class="brand-logo" onerror="this.style.display='none'">
      <div style="flex:1">
        <div class="title">E-Juku</div>
        <div class="subtitle">Dari Laut ke Meja</div>
      </div>
      <button class="iconbtn" onclick="go('notifications')">
        ${svg('bell')}
        <span class="badge" id="bellCount">${unreadNotif()}</span>
      </button>
    </header>`;
  }
  const titles = {
    search:'Pencarian', product:'Detail Produk', cart:'Keranjang', checkout:'Checkout',
    payment:'Pembayaran', success:'Pesanan Berhasil', orders:'Pesanan Saya', 'order-detail':'Detail Pesanan',
    tracking:'Lacak Pesanan', notifications:'Notifikasi', profile:'Akun Saya', addresses:'Alamat Pengiriman',
    wishlist:'Wishlist', vouchers:'Voucher Saya', chat:'Chat', 'add-address':'Tambah Alamat'
  };
  return `<header class="topbar">
    <button class="iconbtn" onclick="back()">${svg('back')}</button>
    <div class="title">${titles[v]||'E-Juku'}</div>
    ${v==='notifications'?'<button class="iconbtn" onclick="markAllRead()" title="Tandai dibaca">'+svg('check')+'</button>':''}
  </header>`;
}

/* ============ BOTTOM NAV ============ */
function viewBottomNav(){
  const v = S.view;
  const active = k => v===k ? 'on' : '';
  return `<nav class="bnav">
    <button class="${active('home')}" onclick="go('home',{replace:true})">
      ${svg('home')}<span>Beranda</span>
    </button>
    <button class="${active('wishlist')}" onclick="go('wishlist')">
      ${svg('heart')}<span>Wishlist</span>
    </button>
    <button class="${active('cart')}" onclick="go('cart')">
      ${svg('cart')}<span>Keranjang</span>
      <span class="dot" id="navCartCount" style="display:none">0</span>
    </button>
    <button class="${active('orders')}" onclick="go('orders')">
      ${svg('order')}<span>Pesanan</span>
    </button>
    <button class="${active('profile')}" onclick="go('profile',{replace:true})">
      ${svg('user')}<span>Akun</span>
      <span class="dot" id="navNotifCount" style="display:none">0</span>
    </button>
  </nav>`;
}

/* ============ VIEW CONTENT ROUTER ============ */
function viewContent(){
  const v = S.view;
  switch(v){
    case 'home': return viewHome();
    case 'search': return viewSearch();
    case 'product': return viewProduct(S._opts.productId);
    case 'cart': return viewCart();
    case 'checkout': return viewCheckout();
    case 'payment': return viewPayment(S._opts.orderId);
    case 'success': return viewSuccess(S._opts.orderId);
    case 'orders': return viewOrders();
    case 'order-detail': return viewOrderDetail(S._opts.orderId);
    case 'tracking': return viewTracking(S._opts.orderId);
    case 'notifications': return viewNotifications();
    case 'profile': return viewProfile();
    case 'addresses': return viewAddresses();
    case 'add-address': return viewAddAddress();
    case 'wishlist': return viewWishlist();
    case 'vouchers': return viewVouchers();
    case 'chat': return viewChat(S._opts.sellerId);
    default: return viewHome();
  }
}

/* ==================== AUTH ==================== */
function viewAuth(){
  return `<div class="auth-screen"><div class="auth-box">
    <div class="brand-head">
      <img src="logoejuku.png" onerror="this.style.display='none'">
      <h1>E-Juku</h1>
      <p>Platform Pesan Online Hasil Laut</p>
    </div>
    <div class="seg" id="authSeg">
      <button class="on" data-t="login">Masuk</button>
      <button data-t="register">Daftar</button>
    </div>
    <form id="authForm" autocomplete="on">
      <div id="authExtra" style="display:none">
        <div class="field"><label>Nama Lengkap</label><input name="name" placeholder="Nama Anda"></div>
        <div class="field"><label>No. HP</label><input name="phone" type="tel" placeholder="08xxxxxxxxxx"></div>
      </div>
      <div class="field"><label>Email</label><input name="email" type="email" placeholder="admin@ejuku.id" required></div>
      <div class="field"><label>Password</label><input name="password" type="password" placeholder="admin123" required></div>
      <div id="authExtra2" style="display:none">
        <div class="field"><label>Alamat</label><textarea name="address" rows="2" placeholder="Alamat lengkap"></textarea></div>
      </div>
      <button class="btn btn-primary btn-lg" type="submit" id="authSubmit">Masuk</button>
    </form>
    <p class="center small muted" style="margin-top:16px">Demo: <b>admin@ejuku.id</b> / <b>admin123</b></p>
    <p class="center small muted" style="margin-top:20px">E-Juku v2.0 · Merah Putih</p>
  </div></div>`;
}

function bindAuth(){
  let mode = 'login';
  $('#authSeg').addEventListener('click', e=>{
    const b = e.target.closest('button'); if(!b) return;
    mode = b.dataset.t;
    $$('#authSeg button').forEach(x=>x.classList.toggle('on', x===b));
    $('#authExtra').style.display = mode==='register' ? '' : 'none';
    $('#authExtra2').style.display = mode==='register' ? '' : 'none';
    $('#authSubmit').textContent = mode==='register' ? 'Daftar Sekarang' : 'Masuk';
  });
  $('#authForm').addEventListener('submit', e=>{
    e.preventDefault();
    const fd = new FormData(e.target);
    const email = (fd.get('email')||'').trim().toLowerCase();
    const password = fd.get('password')||'';
    if(mode==='login'){
      const u = db.users.find(x=>x.email.toLowerCase()===email && x.password===password);
      if(!u) return toast('Email atau password salah','error');
      S.user = u; saveSession();
      toast('Selamat datang, '+u.name.split(' ')[0],'success');
      S.stack = []; go('home',{replace:true});
    } else {
      const name = (fd.get('name')||'').trim();
      if(name.length<2) return toast('Nama minimal 2 karakter','error');
      if(password.length<6) return toast('Password minimal 6 karakter','error');
      if(db.users.find(x=>x.email.toLowerCase()===email)) return toast('Email sudah terdaftar','error');
      db.counters.user++;
      const u = {id:db.counters.user, name, email, password, phone:fd.get('phone')||'',
        role:'buyer', avatar:null,
        addresses:fd.get('address')?[{id:uid(),label:'Rumah',name,phone:fd.get('phone')||'',address:fd.get('address'),lat:-5.1476,lng:119.4327,isDefault:true}]:[],
        paymentMethods:[], createdAt:Date.now()};
      db.users.push(u); DB.save(db);
      S.user = u; saveSession();
      notify('welcome','Selamat Datang di E-Juku!','Nikmati kemudahan pesan hasil laut segar langsung dari nelayan.','');
      toast('Pendaftaran berhasil!','success');
      S.stack = []; go('home',{replace:true});
    }
  });
}

/* ==================== HOME ==================== */
function viewHome(){
  const cats = ['Semua','Ikan Segar','Udang','Cumi','Kepiting','Kerang','Lobster','Olahan'];
  let list = [...db.products];
  if(S.category) list = list.filter(p=>p.category===S.category);

  const quick = [
    {ic:'fish',   t:'Ikan',     c:'Ikan Segar'},
    {ic:'bolt',   t:'Udang',    c:'Udang'},
    {ic:'fire',   t:'Cumi',     c:'Cumi'},
    {ic:'shield', t:'Kepiting', c:'Kepiting'},
    {ic:'store',  t:'Kerang',   c:'Kerang'},
    {ic:'gift',   t:'Lobster',  c:'Lobster'},
    {ic:'voucher',t:'Voucher',  c:'voucher'},
    {ic:'order',  t:'Semua',    c:'Semua'}
  ];

  return `<div class="home-header">
    <div class="row">
      <div class="search-box" onclick="go('search')">
        ${svg('search')}
        <input placeholder="Cari ikan, udang, cumi..." readonly>
      </div>
      <button class="iconbtn" onclick="go('notifications')" style="background:rgba(255,255,255,.15);color:#fff">
        ${svg('bell')}
        <span class="badge" id="bellCount2" style="background:#fff;color:#D32F2F;border-color:#D32F2F">${unreadNotif()}</span>
      </button>
    </div>
  </div>

  <div class="view">
    <div class="hero-card">
      <h2>Hasil Laut Segar Setiap Hari</h2>
      <p>Langsung dari nelayan, dikirim ke pintu rumah Anda</p>
      <div class="cta" onclick="go('search')">${svg('fish','i-sm')} Mulai Belanja</div>
    </div>

    <div class="quickmenu">
      ${quick.map(q=>`<button onclick="${q.c==='voucher'?`go('vouchers')`:`setCategory('${q.c}')`}">
        <div class="qm-ico">${svg(q.ic)}</div>
        <span>${q.t}</span>
      </button>`).join('')}
    </div>

    <div class="cat-scroll">
      ${cats.map(c=>`<button class="chip ${S.category===c||(!S.category&&c==='Semua')?'on':''}" onclick="setCategory('${c}')">${c}</button>`).join('')}
    </div>

    <div class="section-head">
      <h3>${S.category||'Produk Segar'}</h3>
      <a onclick="go('search')">Lihat semua</a>
    </div>
    <div class="pgrid">${list.map(p=>productCard(p)).join('')}</div>
    <div style="height:20px"></div>
  </div>`;
}

function setCategory(c){
  S.category = c==='Semua' ? '' : c;
  render();
}

function productCard(p){
  const s = db.sellers[p.sellerId] || {name:'Penjual'};
  const wish = (S.user.wishlist||[]).includes(p.id);
  return `<div class="pcard" onclick="go('product',{productId:${p.id}})">
    <img class="thumb" src="${p.image}" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect fill=%22%23eee%22 width=%22200%22 height=%22200%22/></svg>'">
    <div class="heart ${wish?'on':''}" onclick="event.stopPropagation();toggleWish(${p.id})">${svg('heart','i-sm')}</div>
    <div class="info">
      <p class="name">${p.name}</p>
      <div class="price">${rp(p.price)}<span class="muted small" style="font-weight:500"> /${p.unit}</span></div>
      <div class="meta">
        <span class="star">${svg('star','i-sm')} ${p.rating.toFixed(1)}</span>
        <span>·</span>
        <span>${p.sold} terjual</span>
      </div>
      <div class="meta" style="margin-top:2px">${svg('pin','i-sm')} ${s.city||s.name}</div>
    </div>
  </div>`;
}

function toggleWish(id){
  S.user.wishlist = S.user.wishlist || [];
  const i = S.user.wishlist.indexOf(id);
  if(i>=0){ S.user.wishlist.splice(i,1); toast('Dihapus dari wishlist'); }
  else { S.user.wishlist.push(id); toast('Ditambahkan ke wishlist','success'); }
  // update db
  const du = db.users.find(u=>u.id===S.user.id); if(du) du.wishlist = S.user.wishlist;
  DB.save(db); saveSession(); render();
}

/* ==================== SEARCH ==================== */
function viewSearch(){
  return `<div class="view">
    <div class="search-box" style="background:#fff;border:1.5px solid var(--line);border-radius:12px;padding:10px 14px;display:flex;gap:8px;align-items:center;margin-bottom:14px">
      ${svg('search')}
      <input id="searchInp" placeholder="Cari produk hasil laut..." value="${S.search}" autofocus style="flex:1;border:none;outline:none">
    </div>
    <div class="cat-scroll">
      ${['Semua','Ikan Segar','Udang','Cumi','Kepiting','Kerang','Lobster','Olahan'].map(c=>`<button class="chip ${S.category===c||(!S.category&&c==='Semua')?'on':''}" onclick="setCategory('${c}')">${c}</button>`).join('')}
    </div>
    <div id="searchResults">${searchResults()}</div>
  </div>`;
}

function searchResults(){
  let list = [...db.products];
  if(S.search) list = list.filter(p=>p.name.toLowerCase().includes(S.search.toLowerCase()));
  if(S.category) list = list.filter(p=>p.category===S.category);
  if(!list.length) return `<div class="empty"><div class="il">${svg('search')}</div><h4>Tidak ada hasil</h4><p>Coba kata kunci lain</p></div>`;
  return `<div class="pgrid">${list.map(p=>productCard(p)).join('')}</div>`;
}

/* ==================== PRODUCT DETAIL ==================== */
function viewProduct(id){
  const p = db.products.find(x=>x.id===id);
  if(!p) return `<div class="view"><div class="empty"><h4>Produk tidak ditemukan</h4></div></div>`;
  const s = db.sellers[p.sellerId] || {name:'Penjual'};
  const wish = (S.user.wishlist||[]).includes(p.id);

  return `<div class="view flush" style="padding-bottom:80px">
    <img class="pd-hero" src="${p.image}" onerror="this.style.background='#eee'">
    <div style="padding:12px 14px">
      <div class="pd-info">
        <div class="pd-price">${rp(p.price)}<small>/${p.unit}</small></div>
        <h1>${p.name}</h1>
        <div class="pd-meta">
          <span class="star">${svg('star','i-sm')} ${p.rating.toFixed(1)}</span>
          <span>${p.sold} terjual</span>
          <span>Stok: ${p.stock}</span>
        </div>
      </div>

      <div class="pd-seller">
        <div class="av">${s.name.charAt(0)}</div>
        <div class="nm">
          <strong>${s.name}</strong>
          <span>${svg('pin','i-sm')} ${s.city} · Bergabung ${s.joined||'2022'}</span>
        </div>
        <button class="btn btn-ghost btn-sm" onclick="go('chat',{sellerId:${p.sellerId}})">${svg('chat','i-sm')} Chat</button>
      </div>

      <div class="pd-desc">
        <strong>Deskripsi Produk</strong>
        <p style="margin:8px 0 0">${p.description}</p>
      </div>

      ${p.reviews && p.reviews.length ? `<div class="pd-desc">
        <strong>Ulasan Pembeli (${p.reviews.length})</strong>
        ${p.reviews.map(r=>`<div style="padding:10px 0;border-top:1px solid var(--line);margin-top:10px">
          <div class="rowflex"><strong style="font-size:13px">${r.u}</strong><span class="muted small">· ${r.t}</span></div>
          <div style="color:var(--amber);display:flex;gap:1px;margin:4px 0">${Array(r.r).fill(0).map(()=>svg('star','i-sm')).join('')}</div>
          <p style="margin:0;font-size:13px;color:var(--ink-2)">${r.c}</p>
        </div>`).join('')}
      </div>` : ''}

      <div class="pd-desc">
        <div class="rowflex"><strong>Jumlah</strong><div class="spacer"></div><span class="muted small">Stok: ${p.stock}</span></div>
        <div class="pd-qty">
          <div class="qtybox">
            <button onclick="qtySelect(-1)" id="qBtn-">${svg('minus','i-sm')}</button>
            <div class="v" id="qVal">1</div>
            <button onclick="qtySelect(1)">${svg('plus','i-sm')}</button>
          </div>
          <span class="muted small">Total: <strong id="qTotal" style="color:var(--red)">${rp(p.price)}</strong></span>
        </div>
      </div>
    </div>
  </div>

  <div class="bottom-bar">
    <div class="row">
      <button class="btn btn-outline" onclick="toggleWish(${p.id})">
        ${svg('heart','i-sm')} ${wish?'Tersimpan':'Wishlist'}
      </button>
      <button class="btn btn-ghost" onclick="addToCart(${p.id}, readQty())">+ Keranjang</button>
      <button class="btn btn-primary" onclick="buyNow(${p.id}, readQty())">Beli Sekarang</button>
    </div>
  </div>`;
}

let _qty = 1;
function qtySelect(delta){
  const p = db.products.find(x=>x.id===S._opts.productId);
  if(!p) return;
  _qty = Math.max(1, Math.min(p.stock, _qty + delta));
  const v = $('#qVal'); if(v) v.textContent = _qty;
  const t = $('#qTotal'); if(t) t.textContent = rp(p.price * _qty);
}
function readQty(){ return _qty; }

/* ==================== CART ==================== */
function viewCart(){
  const items = getCart();
  if(!items.length){
    return `<div class="view"><div class="empty">
      <div class="il">${svg('cart')}</div>
      <h4>Keranjang masih kosong</h4>
      <p>Yuk cari hasil laut segar favoritmu</p>
      <button class="btn btn-primary" style="margin-top:16px;max-width:220px;margin-left:auto;margin-right:auto" onclick="go('home',{replace:true})">Mulai Belanja</button>
    </div></div>`;
  }

  // group by seller
  const groups = {};
  items.forEach(it=>{
    const p = db.products.find(x=>x.id===it.productId);
    if(!p) return;
    const sid = p.sellerId;
    (groups[sid] = groups[sid] || {seller: db.sellers[sid]||{name:'Penjual',id:sid}, items: []}).items.push({...it, product:p});
  });

  const allSelected = items.every(i=>i.selected);
  const selectedItems = items.filter(i=>i.selected);
  const subtotal = calcSubtotal(selectedItems);

  return `<div class="view flush" style="padding-bottom:80px">
    <div style="padding:12px 14px">
      <div class="section-card" style="display:flex;align-items:center;gap:10px">
        <div class="cbx ${allSelected?'on':''}" onclick="toggleSelectAll()">${allSelected?svg('check'):''}</div>
        <strong style="flex:1">Pilih Semua (${items.length})</strong>
        <span class="muted small">${selectedItems.length} dipilih</span>
      </div>

      ${Object.values(groups).map(g=>`
        <div class="cart-seller">
          <div class="sh">
            <div class="cbx ${g.items.every(i=>i.selected)?'on':''}" onclick="toggleSeller(${g.seller.id})">${g.items.every(i=>i.selected)?svg('check'):''}</div>
            ${svg('store','i-sm')}
            <strong>${g.seller.name}</strong>
          </div>
          ${g.items.map(it=>`
            <div class="cart-item">
              <div class="cbx ${it.selected?'on':''}" onclick="toggleCart(${it.id})">${it.selected?svg('check'):''}</div>
              <img class="thumb" src="${it.product.image}" onclick="go('product',{productId:${it.product.id}})">
              <div class="ct">
                <div class="nm">${it.product.name}</div>
                <div class="pr">${rp(it.product.price)}</div>
                <div class="actions">
                  <div class="qtybox">
                    <button onclick="cartQty(${it.id},-1)" ${it.qty<=1?'disabled':''}>${svg('minus','i-sm')}</button>
                    <div class="v">${it.qty}</div>
                    <button onclick="cartQty(${it.id},1)">${svg('plus','i-sm')}</button>
                  </div>
                  <button class="del" onclick="cartDel(${it.id})">${svg('trash','i-sm')}</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  </div>

  <div class="bottom-bar">
    <div class="row">
      <div style="flex:1">
        <div class="muted small">Total (${selectedItems.length})</div>
        <div style="font-size:18px;font-weight:800;color:var(--red)">${rp(subtotal)}</div>
      </div>
      <button class="btn btn-primary" style="max-width:180px" onclick="goCheckout()" ${!selectedItems.length?'disabled':''}>Checkout (${selectedItems.length})</button>
    </div>
  </div>`;
}

function toggleSelectAll(){
  const items = getCart();
  const allSel = items.every(i=>i.selected);
  items.forEach(i=>i.selected = !allSel);
  saveCarts(); render();
}
function toggleSeller(sid){
  const items = getCart().filter(c=>{ const p = db.products.find(x=>x.id===c.productId); return p && p.sellerId===sid; });
  const allSel = items.every(i=>i.selected);
  items.forEach(i=>i.selected = !allSel);
  saveCarts(); render();
}
function toggleCart(id){
  const c = db.carts.find(x=>x.id===id && x.userId===S.user.id);
  if(c){ c.selected = !c.selected; saveCarts(); render(); }
}
function cartQty(id, d){
  const c = db.carts.find(x=>x.id===id && x.userId===S.user.id);
  if(!c) return;
  c.qty = Math.max(1, c.qty + d);
  saveCarts(); render();
}
function cartDel(id){
  db.carts = db.carts.filter(x=>!(x.id===id && x.userId===S.user.id));
  saveCarts(); render(); toast('Item dihapus');
}

/* ==================== ADD TO CART ==================== */
function addToCart(pid, qty=1){
  const p = db.products.find(x=>x.id===pid);
  if(!p) return;
  let c = db.carts.find(x=>x.userId===S.user.id && x.productId===pid);
  if(c) c.qty += qty;
  else db.carts.push({id:uid(), userId:S.user.id, productId:pid, qty, selected:true, addedAt:Date.now()});
  saveCarts(); renderBadges(); toast('Ditambahkan ke keranjang','success');
}

function buyNow(pid, qty=1){
  const p = db.products.find(x=>x.id===pid);
  if(!p) return;
  let c = db.carts.find(x=>x.userId===S.user.id && x.productId===pid);
  if(c){ c.qty = qty; c.selected = true; }
  else db.carts.push({id:uid(), userId:S.user.id, productId:pid, qty, selected:true, addedAt:Date.now()});
  // unselect others
  db.carts.filter(x=>x.userId===S.user.id && x.productId!==pid).forEach(x=>x.selected=false);
  saveCarts();
  goCheckout();
}

/* ==================== CHECKOUT ==================== */
function goCheckout(){
  const sel = getCart().filter(c=>c.selected);
  if(!sel.length){ toast('Pilih item dulu','error'); return; }
  if(!S.user.addresses || !S.user.addresses.length){ toast('Tambahkan alamat pengiriman dulu','error'); go('add-address'); return; }
  S.checkout.address = S.user.addresses.find(a=>a.isDefault) || S.user.addresses[0];
  S.checkout.voucher = null;
  go('checkout');
}

function viewCheckout(){
  const sel = getCart().filter(c=>c.selected);
  const subtotal = calcSubtotal(sel);
  const shipping = S.checkout.shipping==='express' ? 25000 : 10000;
  const v = S.checkout.voucher;
  const {disc, shippingDisc} = applyVoucher(subtotal, shipping, v);
  const service = 2000;
  const total = subtotal + shipping + service - disc - shippingDisc;

  const addr = S.checkout.address || (S.user.addresses||[])[0] || {name:'-',phone:'-',address:'Alamat belum diisi'};
  const payMethods = [
    {id:'qris', n:'QRIS',      d:'Scan & bayar instan', ic:'card'},
    {id:'ewallet', n:'E-Wallet',d:'OVO, GoPay, Dana, ShopeePay', ic:'wallet'},
    {id:'va', n:'Transfer Bank',d:'BCA, Mandiri, BNI, BRI', ic:'store'},
    {id:'cod', n:'COD',        d:'Bayar saat barang tiba', ic:'truck'}
  ];

  return `<div class="view flush" style="padding-bottom:100px">
    <div style="padding:12px 14px">

      <div class="section-card" onclick="go('addresses')" style="cursor:pointer">
        <div class="row">
          <div style="color:var(--red)">${svg('pin')}</div>
          <div style="flex:1">
            <div class="label">Alamat Pengiriman</div>
            <div class="value">${addr.name} · ${addr.phone}</div>
            <div class="muted small" style="margin-top:2px">${addr.address}</div>
          </div>
          <div class="chev">${svg('chev')}</div>
        </div>
      </div>

      <div class="section-card">
        <div class="label" style="margin-bottom:10px">Produk Pesanan</div>
        ${sel.map(it=>{
          const p = db.products.find(x=>x.id===it.productId);
          if(!p) return '';
          return `<div class="cart-item" style="padding:8px 0">
            <img class="thumb" style="width:60px;height:60px" src="${p.image}">
            <div class="ct">
              <div class="nm">${p.name}</div>
              <div class="pr">${rp(p.price)}</div>
              <div class="muted small">× ${it.qty} ${p.unit} = <strong>${rp(p.price*it.qty)}</strong></div>
            </div>
          </div>`;
        }).join('')}
      </div>

      <div class="section-card">
        <div class="label" style="margin-bottom:8px">Metode Pengiriman</div>
        <div class="rowflex" style="gap:8px">
          <button class="chip ${S.checkout.shipping==='reguler'?'on':''}" onclick="S.checkout.shipping='reguler';render()">${svg('truck','i-sm')} Reguler (1-3 hari) · ${rp(10000)}</button>
          <button class="chip ${S.checkout.shipping==='express'?'on':''}" onclick="S.checkout.shipping='express';render()">${svg('bolt','i-sm')} Express (Same Day) · ${rp(25000)}</button>
        </div>
      </div>

      <div class="section-card">
        <div class="label" style="margin-bottom:8px">Metode Pembayaran</div>
        ${payMethods.map(m=>`
          <div class="pay-method ${S.checkout.payment===m.id?'on':''}" onclick="S.checkout.payment='${m.id}';render()" style="box-shadow:none;margin-bottom:6px;padding:10px;border-radius:10px">
            <div class="ico">${svg(m.ic)}</div>
            <div class="info"><strong>${m.n}</strong><span>${m.d}</span></div>
            ${S.checkout.payment===m.id?`<div style="color:var(--red)">${svg('check')}</div>`:''}
          </div>
        `).join('')}
      </div>

      <div class="section-card" onclick="go('vouchers',{mode:'checkout'})" style="cursor:pointer">
        <div class="row">
          <div style="color:var(--red)">${svg('voucher')}</div>
          <div style="flex:1">
            <div class="label">Voucher</div>
            <div class="value">${v?`${v.code} diterapkan`:'Pilih voucher'}</div>
          </div>
          <div class="chev">${svg('chev')}</div>
        </div>
      </div>

      <div class="section-card">
        <div class="label" style="margin-bottom:8px">Catatan untuk Penjual</div>
        <input class="field" id="coNote" style="width:100%;padding:11px 14px;border:1.5px solid var(--line);border-radius:10px" placeholder="Contoh: Ikan dibersihkan, dipotong 4 bagian" value="${S.checkout.note}">
      </div>

      <div class="section-card">
        <div class="line"><span>Subtotal produk</span><span class="num">${rp(subtotal)}</span></div>
        <div class="line"><span>Ongkos kirim</span><span class="num">${rp(shipping)}</span></div>
        <div class="line"><span>Biaya layanan</span><span class="num">${rp(service)}</span></div>
        ${disc?`<div class="line" style="color:var(--green)"><span>Diskon voucher</span><span class="num" style="color:var(--green)">-${rp(disc)}</span></div>`:''}
        ${shippingDisc?`<div class="line" style="color:var(--green)"><span>Gratis ongkir</span><span class="num" style="color:var(--green)">-${rp(shippingDisc)}</span></div>`:''}
        <div class="line total"><span>Total Bayar</span><span class="num">${rp(total)}</span></div>
      </div>

    </div>
  </div>

  <div class="bottom-bar">
    <div class="row">
      <div style="flex:1">
        <div class="muted small">Total Bayar</div>
        <div style="font-size:18px;font-weight:800;color:var(--red)">${rp(total)}</div>
      </div>
      <button class="btn btn-primary" style="max-width:200px" onclick="placeOrder()">Buat Pesanan</button>
    </div>
  </div>`;
}

function placeOrder(){
  const noteEl = $('#coNote'); if(noteEl) S.checkout.note = noteEl.value;
  const sel = getCart().filter(c=>c.selected);
  if(!sel.length) return toast('Keranjang kosong','error');
  const subtotal = calcSubtotal(sel);
  const shipping = S.checkout.shipping==='express' ? 25000 : 10000;
  const v = S.checkout.voucher;
  const {disc, shippingDisc} = applyVoucher(subtotal, shipping, v);
  const service = 2000;
  const total = subtotal + shipping + service - disc - shippingDisc;

  const items = sel.map(c=>{
    const p = db.products.find(x=>x.id===c.productId);
    return {productId:p.id, name:p.name, price:p.price, qty:c.qty, unit:p.unit, image:p.image, sellerId:p.sellerId};
  });
  const sellerIds = [...new Set(items.map(i=>i.sellerId))];

  db.counters.order++;
  const order = {
    id: db.counters.order,
    code: 'EJ' + String(db.counters.order).padStart(6,'0'),
    userId: S.user.id,
    items, sellerIds,
    subtotal, shipping, service, discount: disc + shippingDisc, total,
    address: S.checkout.address,
    shippingMethod: S.checkout.shipping,
    paymentMethod: S.checkout.payment,
    note: S.checkout.note,
    voucherCode: v ? v.code : null,
    status: 'pending',
    statusHistory: [{status:'pending', at: Date.now()}],
    courier: null,
    createdAt: Date.now(),
    paidAt: null, deliveredAt: null, completedAt: null
  };
  db.orders.push(order);

  // remove from cart
  db.carts = db.carts.filter(c=>!(c.userId===S.user.id && c.selected));
  DB.save(db);
  S.checkout.note = '';
  S.checkout.voucher = null;

  notify('order', 'Pesanan Dibuat', `Pesanan ${order.code} berhasil dibuat. Menunggu pembayaran.`, order.id);
  go('payment', {orderId: order.id});
}

/* ==================== PAYMENT ==================== */
function viewPayment(orderId){
  const o = db.orders.find(x=>x.id===orderId);
  if(!o) return `<div class="view"><div class="empty"><h4>Pesanan tidak ditemukan</h4></div></div>`;

  const methodNames = {qris:'QRIS', ewallet:'E-Wallet', va:'Virtual Account', cod:'COD (Bayar di Tempat)'};

  return `<div class="view">
    <div class="pay-box">
      <div class="muted small">Total Pembayaran</div>
      <div class="amt">${rp(o.total)}</div>
      <div class="timer">Bayar dalam <b id="payTimer">14:59</b></div>
      ${o.paymentMethod==='qris' ? `<div class="qr">QRIS Code<br><br><small>Scan menggunakan aplikasi bank/e-wallet Anda</small></div>` :
        o.paymentMethod==='va' ? `<div class="qr" style="background:#1565C0">Virtual Account<br><br><b style="font-size:20px;letter-spacing:2px">8277 1234 5678 9012</b><br><small>a.n. E-JUKU</small></div>` :
        o.paymentMethod==='ewallet' ? `<div class="qr" style="background:#F57C00">E-Wallet<br><br><small>Anda akan diarahkan ke aplikasi<br>pembayaran Anda</small></div>` :
        `<div class="qr" style="background:#2E7D32">COD<br><br><small>Siapkan uang tunai saat kurir tiba</small></div>`
      }
      <div class="muted small">Metode: <b>${methodNames[o.paymentMethod]}</b></div>
    </div>

    <div class="section-card">
      <div class="line"><span>Kode Pesanan</span><strong>${o.code}</strong></div>
      <div class="line"><span>Subtotal</span><span>${rp(o.subtotal)}</span></div>
      <div class="line"><span>Ongkir</span><span>${rp(o.shipping)}</span></div>
      <div class="line"><span>Biaya Layanan</span><span>${rp(o.service)}</span></div>
      ${o.discount?`<div class="line" style="color:var(--green)"><span>Diskon</span><span>-${rp(o.discount)}</span></div>`:''}
    </div>

    <button class="btn btn-primary btn-lg" style="margin-bottom:10px" onclick="simulatePayment(${o.id})">
      ${svg('shield','i-sm')} ${o.paymentMethod==='cod'?'Konfirmasi Pesanan':'Simulasi Pembayaran Berhasil'}
    </button>
    <button class="btn btn-outline" onclick="cancelOrder(${o.id})">Batalkan Pesanan</button>
    <p class="center muted small" style="margin-top:16px">Ini demo — tombol di atas mensimulasikan pembayaran yang sukses.</p>
  </div>`;
}

function simulatePayment(orderId){
  const o = db.orders.find(x=>x.id===orderId);
  if(!o) return;
  o.status = 'paid';
  o.paidAt = Date.now();
  o.statusHistory.push({status:'paid', at:Date.now()});
  // assign courier
  o.courier = {
    name: ['Ahmad','Budi','Chandra','Dedi','Eko'][Math.floor(Math.random()*5)] + ' Pratama',
    phone: '0812' + Math.floor(10000000+Math.random()*89999999),
    lat: db.sellers[o.items[0].sellerId].lat,
    lng: db.sellers[o.items[0].sellerId].lng,
    progress: 0
  };
  DB.save(db);
  notify('payment','Pembayaran Berhasil',`Pesanan ${o.code} telah dibayar. Penjual akan segera memproses.`, o.id);
  toast('Pembayaran berhasil!','success');
  go('success', {orderId: orderId});
}

function cancelOrder(id){
  if(!confirm('Batalkan pesanan ini?')) return;
  const o = db.orders.find(x=>x.id===id);
  if(!o) return;
  o.status = 'cancelled';
  o.statusHistory.push({status:'cancelled', at: Date.now()});
  DB.save(db);
  notify('order','Pesanan Dibatalkan',`Pesanan ${o.code} telah dibatalkan.`, o.id);
  toast('Pesanan dibatalkan');
  S.stack = []; go('orders', {replace:true});
}

/* ==================== SUCCESS ==================== */
function viewSuccess(orderId){
  const o = db.orders.find(x=>x.id===orderId);
  return `<div class="view" style="text-align:center;padding-top:40px">
    <div style="width:96px;height:96px;margin:0 auto 20px;border-radius:50%;background:var(--red-soft);display:flex;align-items:center;justify-content:center;color:var(--red)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:52px;height:52px"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <h2 style="margin:0 0 6px;font-size:22px">Pesanan Berhasil Dibuat!</h2>
    <p class="muted" style="margin:0 0 24px">Terima kasih telah berbelanja di E-Juku</p>

    <div class="section-card" style="text-align:left">
      <div class="line"><span class="muted">Kode Pesanan</span><strong>${o.code}</strong></div>
      <div class="line"><span class="muted">Total Bayar</span><span class="num">${rp(o.total)}</span></div>
      <div class="line"><span class="muted">Status</span><span class="badge-pill">${statusLabel(o.status)}</span></div>
    </div>

    <button class="btn btn-primary" style="margin-bottom:10px" onclick="go('tracking',{orderId:${o.id}})">${svg('truck','i-sm')} Lacak Pesanan</button>
    <button class="btn btn-outline" onclick="go('orders',{replace:true})">Lihat Semua Pesanan</button>
  </div>`;
}

function statusLabel(s){
  return {pending:'Menunggu Pembayaran',paid:'Dibayar',processing:'Diproses',shipping:'Dikirim',delivered:'Terkirim',completed:'Selesai',cancelled:'Dibatalkan'}[s] || s;
}
function statusClass(s){ return 'stat '+s; }

/* ==================== ORDERS LIST ==================== */
function viewOrders(){
  const list = db.orders.filter(o=>o.userId===S.user.id).sort((a,b)=>b.id-a.id);
  if(!list.length) return `<div class="view"><div class="empty">
    <div class="il">${svg('order')}</div>
    <h4>Belum ada pesanan</h4><p>Yuk mulai pesan hasil laut segar!</p>
  </div></div>`;

  return `<div class="view">
    ${list.map(o=>`
      <div class="ocard" onclick="go('order-detail',{orderId:${o.id}})">
        <div class="oh">
          <div>
            <div class="code">${o.code}</div>
            <div class="muted small">${new Date(o.createdAt).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})}</div>
          </div>
          <div class="${statusClass(o.status)}">${statusLabel(o.status)}</div>
        </div>
        ${o.items.slice(0,2).map(i=>`
          <div class="prod">
            <img src="${i.image}" onerror="this.style.background='#eee'">
            <div style="flex:1;min-width:0">
              <div class="pn">${i.name}</div>
              <div class="pq">× ${i.qty} ${i.unit} · ${rp(i.price)}</div>
            </div>
          </div>
        `).join('')}
        ${o.items.length>2?`<div class="muted small" style="text-align:center;padding:6px">+${o.items.length-2} produk lainnya</div>`:''}
        <div class="total">
          <span class="muted small">Total Pesanan</span>
          <span class="num">${rp(o.total)}</span>
        </div>
      </div>
    `).join('')}
  </div>`;
}

/* ==================== ORDER DETAIL ==================== */
function viewOrderDetail(id){
  const o = db.orders.find(x=>x.id===id);
  if(!o) return `<div class="view"><div class="empty"><h4>Pesanan tidak ditemukan</h4></div></div>`;

  const steps = [
    {k:'pending',   t:'Pesanan Dibuat',     d:'Menunggu pembayaran'},
    {k:'paid',      t:'Pembayaran Dikonfirmasi', d:'Pembayaran telah diterima'},
    {k:'processing',t:'Sedang Diproses',    d:'Penjual menyiapkan pesanan Anda'},
    {k:'shipping',  t:'Dikirim',            d:'Kurir menuju lokasi Anda'},
    {k:'delivered', t:'Terkirim',           d:'Pesanan sudah diantar'},
    {k:'completed', t:'Selesai',            d:'Terima kasih telah berbelanja'}
  ];
  const idx = steps.findIndex(s=>s.k === o.status);

  const actions = {
    pending: `<button class="btn btn-primary" onclick="go('payment',{orderId:${o.id}})">Lanjutkan Pembayaran</button>
             <button class="btn btn-outline" onclick="cancelOrder(${o.id})">Batalkan</button>`,
    paid: `<button class="btn btn-ghost" onclick="simulateProgress(${o.id})">${svg('bolt','i-sm')} Simulasi: Penjual Memproses</button>`,
    processing: `<button class="btn btn-ghost" onclick="simulateProgress(${o.id})">${svg('truck','i-sm')} Simulasi: Kurir Mengantar</button>`,
    shipping: `<button class="btn btn-primary" onclick="go('tracking',{orderId:${o.id}})">${svg('pin','i-sm')} Lacak Kurir</button>`,
    delivered: `<button class="btn btn-primary" onclick="confirmReceipt(${o.id})">${svg('check','i-sm')} Konfirmasi Diterima</button>`,
    completed: `<button class="btn btn-ghost" onclick="go('orders',{replace:true})">Pesan Lagi</button>`,
    cancelled: `<button class="btn btn-ghost" onclick="go('orders',{replace:true})">Kembali</button>`
  };

  return `<div class="view flush" style="padding-bottom:100px">
    <div style="padding:12px 14px">
      <div class="section-card">
        <div class="rowflex" style="margin-bottom:12px">
          <div>
            <div class="label">Kode Pesanan</div>
            <strong style="font-size:15px">${o.code}</strong>
          </div>
          <div class="spacer"></div>
          <div class="${statusClass(o.status)}">${statusLabel(o.status)}</div>
        </div>
        <div class="timeline">
          ${steps.map((s,i)=>{
            const done = i < idx && o.status !== 'cancelled';
            const active = i === idx && o.status !== 'cancelled';
            const t = (o.statusHistory.find(h=>h.status===s.k)||{}).at;
            return `<div class="step ${done?'done':''} ${active?'active':''}">
              <div class="dot">${done?svg('check'):''}</div>
              <div class="title">${s.t}</div>
              <div class="sub">${s.d}${t?` · ${new Date(t).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})}`:''}</div>
            </div>`;
          }).join('')}
        </div>
      </div>

      <div class="section-card" onclick="go('addresses')">
        <div class="row">
          <div style="color:var(--red)">${svg('pin')}</div>
          <div style="flex:1">
            <div class="label">Alamat Pengiriman</div>
            <div class="value">${o.address.name} · ${o.address.phone}</div>
            <div class="muted small">${o.address.address}</div>
          </div>
        </div>
      </div>

      <div class="section-card">
        <div class="label" style="margin-bottom:10px">Produk</div>
        ${o.items.map(i=>`
          <div class="cart-item" style="padding:8px 0">
            <img class="thumb" style="width:60px;height:60px" src="${i.image}" onerror="this.style.background='#eee'">
            <div class="ct">
              <div class="nm">${i.name}</div>
              <div class="pr">${rp(i.price)}</div>
              <div class="muted small">× ${i.qty} ${i.unit} = <strong>${rp(i.price*i.qty)}</strong></div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="section-card">
        <div class="line"><span>Subtotal</span><span>${rp(o.subtotal)}</span></div>
        <div class="line"><span>Ongkir (${o.shippingMethod})</span><span>${rp(o.shipping)}</span></div>
        <div class="line"><span>Biaya Layanan</span><span>${rp(o.service)}</span></div>
        ${o.discount?`<div class="line" style="color:var(--green)"><span>Diskon</span><span>-${rp(o.discount)}</span></div>`:''}
        <div class="line total"><span>Total</span><span class="num">${rp(o.total)}</span></div>
      </div>

      <div class="section-card">
        <div class="label">Metode Pembayaran</div>
        <div class="value" style="text-transform:capitalize">${o.paymentMethod}</div>
        ${o.note?`<div class="divider"></div><div class="label">Catatan</div><div class="value">${o.note}</div>`:''}
      </div>

      <div style="display:flex;flex-direction:column;gap:8px">
        ${actions[o.status]||''}
      </div>
    </div>
  </div>`;
}

function simulateProgress(id){
  const o = db.orders.find(x=>x.id===id);
  if(!o) return;
  const flow = ['pending','paid','processing','shipping','delivered','completed'];
  const i = flow.indexOf(o.status);
  if(i<flow.length-1){
    o.status = flow[i+1];
    o.statusHistory.push({status:o.status, at: Date.now()});
    if(o.status==='shipping'){
      notify('shipping','Pesanan Dikirim',`Pesanan ${o.code} sedang dalam perjalanan oleh kurir ${o.courier?.name||'-'}.`, o.id);
    } else if(o.status==='delivered'){
      o.deliveredAt = Date.now();
      notify('delivered','Pesanan Terkirim',`Pesanan ${o.code} telah tiba di alamat Anda. Konfirmasi penerimaan.`, o.id);
    } else {
      notify('order','Status Pesanan',`Pesanan ${o.code} kini: ${statusLabel(o.status)}`, o.id);
    }
    DB.save(db);
    toast('Status diperbarui: '+statusLabel(o.status),'success');
    render();
  }
}

function confirmReceipt(id){
  const o = db.orders.find(x=>x.id===id);
  if(!o) return;
  o.status = 'completed';
  o.completedAt = Date.now();
  o.statusHistory.push({status:'completed', at: Date.now()});
  DB.save(db);
  notify('completed','Pesanan Selesai',`Terima kasih! Pesanan ${o.code} telah selesai. Beri ulasan untuk membantu pembeli lain.`, o.id);
  toast('Pesanan selesai. Terima kasih!','success');
  render();
}

/* ==================== TRACKING (MAP) ==================== */
function viewTracking(id){
  const o = db.orders.find(x=>x.id===id);
  if(!o) return `<div class="view"><div class="empty"><h4>Pesanan tidak ditemukan</h4></div></div>`;
  if(!o.courier) return `<div class="view"><div class="empty"><h4>Kurir belum ditugaskan</h4><p>Selesaikan pembayaran terlebih dahulu</p></div></div>`;

  return `<div class="view flush">
    <div style="padding:12px 14px">
      <div id="map"></div>

      <div class="courier-card">
        <div class="av">${o.courier.name.charAt(0)}</div>
        <div class="ct">
          <strong>${o.courier.name}</strong>
          <span>Kurir E-Juku · ${o.courier.phone}</span>
        </div>
        <button class="iconbtn" style="background:var(--red-soft);color:var(--red)" onclick="go('chat',{sellerId:0})">${svg('chat')}</button>
      </div>

      <div class="section-card" style="margin-top:12px">
        <div class="rowflex">
          <div style="color:var(--red)">${svg('truck')}</div>
          <div style="flex:1">
            <strong style="font-size:14px">Status Pengiriman</strong>
            <div class="muted small" style="margin-top:2px">${statusLabel(o.status)} · Estimasi tiba <b id="eta">--:--</b></div>
          </div>
        </div>
        <div class="rank-bar" style="margin-top:10px"><div id="progressBar" style="width:${(o.courier.progress||0)*100}%"></div></div>
      </div>

      <div class="section-card">
        <div class="label">Tujuan</div>
        <div class="value">${o.address.name}</div>
        <div class="muted small">${o.address.address}</div>
      </div>

      ${o.status==='delivered'?`<button class="btn btn-primary" onclick="confirmReceipt(${o.id})">${svg('check','i-sm')} Konfirmasi Diterima</button>`:''}
    </div>
  </div>`;
}

/* ==================== NOTIFICATIONS ==================== */
function viewNotifications(){
  const list = db.notifications.filter(n=>n.userId===S.user.id).sort((a,b)=>b.id-a.id);
  if(!list.length) return `<div class="view"><div class="empty">
    <div class="il">${svg('bell')}</div>
    <h4>Belum ada notifikasi</h4><p>Notifikasi pesanan akan muncul di sini</p>
  </div></div>`;

  return `<div class="view">
    ${list.map(n=>`
      <div class="notif-item ${n.read?'':'unread'}" onclick="openNotif(${n.id})">
        <div class="ico">${svg(n.type==='order'?'order':n.type==='payment'?'card':n.type==='shipping'?'truck':n.type==='delivered'?'check':n.type==='completed'?'check':'bell')}</div>
        <div class="body">
          <strong>${n.title}</strong>
          <p>${n.body}</p>
          <time>${timeAgo(n.createdAt)}</time>
        </div>
      </div>
    `).join('')}
  </div>`;
}

function timeAgo(t){
  const d = Date.now() - t;
  if(d < 60e3) return 'Baru saja';
  if(d < 3600e3) return Math.floor(d/60e3)+' menit lalu';
  if(d < 86400e3) return Math.floor(d/3600e3)+' jam lalu';
  return Math.floor(d/86400e3)+' hari lalu';
}

function openNotif(id){
  const n = db.notifications.find(x=>x.id===id);
  if(!n) return;
  n.read = true; DB.save(db);
  if(n.orderId){
    const o = db.orders.find(x=>x.id===n.orderId);
    if(o){
      if(o.status==='shipping' || o.status==='delivered') go('tracking',{orderId:o.id});
      else go('order-detail',{orderId:o.id});
      return;
    }
  }
  render();
}

function markAllRead(){
  db.notifications.filter(n=>n.userId===S.user.id).forEach(n=>n.read=true);
  DB.save(db); toast('Semua notifikasi ditandai dibaca'); render();
}

/* ==================== PROFILE ==================== */
function viewProfile(){
  const u = S.user;
  const totalOrders = db.orders.filter(o=>o.userId===u.id).length;
  const wishCount = (u.wishlist||[]).length;

  return `<div class="view flush" style="padding-bottom:20px">
    <div style="padding:0 14px">
      <div class="profile-head">
        <div class="av">${u.name.charAt(0).toUpperCase()}</div>
        <h2>${u.name}</h2>
        <p>${svg('pin','i-sm')} ${u.email}</p>
        <div style="display:flex;gap:16px;margin-top:14px">
          <div><div style="font-size:20px;font-weight:800">${totalOrders}</div><div class="small" style="opacity:.85">Pesanan</div></div>
          <div><div style="font-size:20px;font-weight:800">${wishCount}</div><div class="small" style="opacity:.85">Wishlist</div></div>
          <div><div style="font-size:20px;font-weight:800">${(u.addresses||[]).length}</div><div class="small" style="opacity:.85">Alamat</div></div>
        </div>
      </div>

      <div class="menu-list">
        <div class="item" onclick="go('orders')">
          <div class="ic">${svg('order')}</div>
          <div class="tx">Pesanan Saya</div>
          <div class="ch">${svg('chev')}</div>
        </div>
        <div class="item" onclick="go('wishlist')">
          <div class="ic">${svg('heart')}</div>
          <div class="tx">Wishlist</div>
          <div class="ch">${svg('chev')}</div>
        </div>
        <div class="item" onclick="go('addresses')">
          <div class="ic">${svg('pin')}</div>
          <div class="tx">Alamat Pengiriman</div>
          <div class="ch">${svg('chev')}</div>
        </div>
        <div class="item" onclick="go('vouchers')">
          <div class="ic">${svg('voucher')}</div>
          <div class="tx">Voucher Saya</div>
          <div class="ch">${svg('chev')}</div>
        </div>
        <div class="item" onclick="go('notifications')">
          <div class="ic">${svg('bell')}</div>
          <div class="tx">Notifikasi</div>
          <div class="ch">${svg('chev')}</div>
        </div>
      </div>

      <div class="menu-list">
        <div class="item" onclick="aboutApp()">
          <div class="ic">${svg('shield')}</div>
          <div class="tx">Tentang E-Juku</div>
          <div class="ch">${svg('chev')}</div>
        </div>
        <div class="item" onclick="resetDemo()">
          <div class="ic">${svg('settings')}</div>
          <div class="tx">Reset Data Demo</div>
          <div class="ch">${svg('chev')}</div>
        </div>
        <div class="item" onclick="logout()" style="color:var(--red)">
          <div class="ic">${svg('logout')}</div>
          <div class="tx">Keluar</div>
        </div>
      </div>

      <p class="center muted small" style="margin:20px 0">E-Juku v2.0 · Merah Putih 🇮🇩</p>
    </div>
  </div>`;
}

function logout(){
  if(!confirm('Yakin ingin keluar?')) return;
  S.user = null; saveSession();
  S.stack = []; S.view = 'home';
  render();
}

function aboutApp(){
  alert('E-Juku v2.0\n\nPlatform Pesan Online Hasil Laut\nDari Laut ke Meja, Segar, Cepat, Terpercaya.\n\n© 2024 E-Juku');
}

function resetDemo(){
  if(!confirm('Reset semua data demo? Semua pesanan & akun akan hilang.')) return;
  db = DB.reset();
  localStorage.removeItem('ejuku_v2_session');
  S.user = null;
  render();
}

/* ==================== ADDRESSES ==================== */
function viewAddresses(){
  const list = S.user.addresses || [];
  return `<div class="view">
    ${list.length===0?`<div class="empty"><div class="il">${svg('pin')}</div><h4>Belum ada alamat</h4><p>Tambahkan alamat pengiriman</p></div>`:''}
    ${list.map(a=>`
      <div class="section-card" onclick="selectAddress(${a.id})">
        <div class="row">
          <div style="color:var(--red)">${svg('pin')}</div>
          <div style="flex:1">
            <div class="rowflex"><strong>${a.name}</strong> ${a.isDefault?'<span class="badge-pill">Utama</span>':''}</div>
            <div class="muted small">${a.phone}</div>
            <div class="small" style="margin-top:4px;color:var(--ink-2)">${a.address}</div>
          </div>
          <div class="chev">${svg('chev')}</div>
        </div>
      </div>
    `).join('')}
    <button class="btn btn-primary" style="margin-top:14px" onclick="go('add-address')">${svg('plus','i-sm')} Tambah Alamat Baru</button>
  </div>`;
}

function selectAddress(id){
  S.user.addresses.forEach(a=>a.isDefault = (a.id===id));
  const du = db.users.find(u=>u.id===S.user.id); if(du) du.addresses = S.user.addresses;
  DB.save(db); saveSession();
  toast('Alamat utama diperbarui','success');
  render();
}

function viewAddAddress(){
  return `<div class="view">
    <div class="section-card">
      <div class="field"><label>Label Alamat</label>
        <select id="fLabel"><option>Rumah</option><option>Kantor</option><option>Lainnya</option></select></div>
      <div class="field"><label>Nama Penerima</label><input id="fName" value="${S.user.name}"></div>
      <div class="field"><label>No. HP</label><input id="fPhone" value="${S.user.phone||''}" type="tel"></div>
      <div class="field"><label>Alamat Lengkap</label><textarea id="fAddr" rows="3" placeholder="Jalan, nomor, kelurahan, kecamatan, kota"></textarea></div>
      <div class="field"><label>Koordinat (opsional)</label>
        <div class="rowflex" style="gap:8px">
          <input id="fLat" placeholder="Latitude" value="-5.1476" style="flex:1">
          <input id="fLng" placeholder="Longitude" value="119.4327" style="flex:1">
        </div>
      </div>
    </div>
    <button class="btn btn-primary" onclick="saveAddress()">Simpan Alamat</button>
  </div>`;
}

function saveAddress(){
  const name = $('#fName').value.trim();
  const phone = $('#fPhone').value.trim();
  const address = $('#fAddr').value.trim();
  if(!name || !phone || !address) return toast('Lengkapi semua data','error');
  const lat = parseFloat($('#fLat').value) || -5.1476;
  const lng = parseFloat($('#fLng').value) || 119.4327;
  S.user.addresses = S.user.addresses || [];
  S.user.addresses.push({id:uid(), label:$('#fLabel').value, name, phone, address, lat, lng, isDefault: S.user.addresses.length===0});
  const du = db.users.find(u=>u.id===S.user.id); if(du) du.addresses = S.user.addresses;
  DB.save(db); saveSession();
  toast('Alamat ditambahkan','success');
  back();
}

/* ==================== WISHLIST ==================== */
function viewWishlist(){
  const ids = S.user.wishlist || [];
  const list = db.products.filter(p=>ids.includes(p.id));
  if(!list.length) return `<div class="view"><div class="empty">
    <div class="il">${svg('heart')}</div><h4>Wishlist masih kosong</h4><p>Simpan produk favorit Anda</p>
  </div></div>`;
  return `<div class="view"><div class="pgrid">${list.map(p=>productCard(p)).join('')}</div></div>`;
}

/* ==================== VOUCHERS ==================== */
function viewVouchers(){
  const mode = S._opts.mode || 'view';
  const list = db.vouchers;
  return `<div class="view">
    ${list.map(v=>{
      const isOn = S.checkout.voucher && S.checkout.voucher.id===v.id;
      return `<div class="voucher ${isOn?'on':''}" onclick="useVoucher(${v.id}, '${mode}')">
        <div class="lf">
          <div class="big">${v.type==='percent'?v.value+'%':v.type==='shipping'?'GRATIS':'Rp'+v.value/1000+'K'}</div>
          <div class="lbl">${v.type==='shipping'?'ONGKIR':'DISKON'}</div>
        </div>
        <div class="rt">
          <strong>${v.description}</strong>
          <p>Min. belanja ${rp(v.minSpend)} · Berlaku s.d. ${new Date(v.expiredAt).toLocaleDateString('id-ID',{day:'numeric',month:'short'})}</p>
          <code>${v.code}</code>
        </div>
      </div>`;
    }).join('')}
    ${mode==='checkout'?`<button class="btn btn-outline" style="margin-top:10px" onclick="clearVoucher()">Hapus Voucher</button>`:''}
  </div>`;
}

function useVoucher(id, mode){
  const v = db.vouchers.find(x=>x.id===id);
  if(!v) return;
  if(mode==='checkout'){
    S.checkout.voucher = v;
    toast('Voucher '+v.code+' diterapkan','success');
    back();
  } else {
    toast('Voucher: '+v.code,'success');
  }
}
function clearVoucher(){
  S.checkout.voucher = null;
  toast('Voucher dihapus');
  back();
}

/* ==================== CHAT ==================== */
function viewChat(sellerId){
  const s = db.sellers[sellerId] || {name:'Kurir E-Juku', id:sellerId};
  let chat = db.chats.find(c=>c.userId===S.user.id && c.sellerId===sellerId);
  if(!chat){
    chat = {id:uid(), userId:S.user.id, sellerId, messages:[
      {id:uid(), from:'you', text:'Halo! Ada yang bisa kami bantu?', at:Date.now()-60000}
    ]};
    db.chats.push(chat); DB.save(db);
  }

  return `<div class="chat-wrap">
    <div class="chat-body" id="chatBody">
      <div class="center muted small" style="padding:8px 0">
        <strong>${s.name}</strong><br>Biasanya membalas dalam 5 menit
      </div>
      ${chat.messages.map(m=>`<div class="chat-msg ${m.from==='me'?'me':'you'}">${m.text}</div>`).join('')}
    </div>
    <div class="chat-input">
      <input id="chatInput" placeholder="Tulis pesan..." onkeydown="if(event.key==='Enter')sendMsg(${sellerId})">
      <button onclick="sendMsg(${sellerId})">${svg('send')}</button>
    </div>
  </div>`;
}

function sendMsg(sellerId){
  const inp = $('#chatInput');
  const text = inp.value.trim();
  if(!text) return;
  const chat = db.chats.find(c=>c.userId===S.user.id && c.sellerId===sellerId);
  chat.messages.push({id:uid(), from:'me', text, at:Date.now()});
  DB.save(db);
  inp.value = '';
  const body = $('#chatBody');
  body.insertAdjacentHTML('beforeend', `<div class="chat-msg me">${text}</div>`);
  body.scrollTop = body.scrollHeight;
  // simulated reply
  setTimeout(()=>{
    const replies = ['Baik kak, kami proses ya.','Stok tersedia kak.','Terima kasih atas pesanannya!','Siap, kami siapkan sekarang.'];
    const r = replies[Math.floor(Math.random()*replies.length)];
    chat.messages.push({id:uid(), from:'you', text:r, at:Date.now()});
    DB.save(db);
    body.insertAdjacentHTML('beforeend', `<div class="chat-msg you">${r}</div>`);
    body.scrollTop = body.scrollHeight;
  }, 1200);
}

/* ==================== GLOBAL BIND & AFTER ==================== */
function bindGlobal(){
  // search input on search page
  const inp = $('#searchInp');
  if(inp){
    inp.addEventListener('input', e=>{
      S.search = e.target.value;
      const r = $('#searchResults'); if(r) r.innerHTML = searchResults();
    });
  }
  const note = $('#coNote');
  if(note) note.addEventListener('change', e => S.checkout.note = e.target.value);
}

/* ==================== AFTER RENDER (side effects) ==================== */
let _timerInt = null, _trackInt = null;
function afterRender(){
  // payment countdown
  clearInterval(_timerInt);
  if(S.view==='payment'){
    let sec = 900;
    const el = () => $('#payTimer');
    _timerInt = setInterval(()=>{
      sec--;
      const t = el(); if(!t){ clearInterval(_timerInt); return; }
      const m = String(Math.floor(sec/60)).padStart(2,'0');
      const s = String(sec%60).padStart(2,'0');
      t.textContent = `${m}:${s}`;
      if(sec<=0){ clearInterval(_timerInt); }
    }, 1000);
  }

  // tracking map
  clearInterval(_trackInt);
  if(S.view==='tracking'){
    const o = db.orders.find(x=>x.id===S._opts.orderId);
    if(o && o.courier){
      setTimeout(()=>initMap(o), 50);
      if(o.status==='shipping'){
        _trackInt = setInterval(()=>{
          const oo = db.orders.find(x=>x.id===o.id);
          if(!oo || oo.status!=='shipping'){ clearInterval(_trackInt); return; }
          oo.courier.progress = Math.min(1, (oo.courier.progress||0) + 0.02);
          const dest = {lat:oo.address.lat, lng:oo.address.lng};
          const start = {lat: db.sellers[oo.items[0].sellerId].lat, lng: db.sellers[oo.items[0].sellerId].lng};
          const cur = {
            lat: start.lat + (dest.lat-start.lat) * oo.courier.progress,
            lng: start.lng + (dest.lng-start.lng) * oo.courier.progress
          };
          if(S.map && S.mapMarker){
            S.mapMarker.setLatLng([cur.lat, cur.lng]);
            S.map.panTo([cur.lat, cur.lng], {animate:true, duration:.5});
          }
          const pb = $('#progressBar'); if(pb) pb.style.width = (oo.courier.progress*100)+'%';
          const eta = $('#eta'); if(eta){
            const m = Math.max(1, Math.round((1-oo.courier.progress) * 20));
            eta.textContent = m + ' menit';
          }
          DB.save(db);
          if(oo.courier.progress>=1 && oo.status==='shipping'){
            oo.status = 'delivered';
            oo.deliveredAt = Date.now();
            oo.statusHistory.push({status:'delivered', at: Date.now()});
            DB.save(db);
            notify('delivered','Pesanan Terkirim',`Pesanan ${oo.code} telah tiba. Mohon konfirmasi penerimaan.`, oo.id);
            clearInterval(_trackInt);
            toast('Pesanan telah tiba!','success');
          }
        }, 800);
      }
    }
  }
}

function initMap(o){
  const dest = {lat: o.address.lat, lng: o.address.lng};
  const seller = db.sellers[o.items[0].sellerId];
  const start = {lat: seller.lat, lng: seller.lng};
  const progress = o.courier.progress || 0;
  const cur = {
    lat: start.lat + (dest.lat-start.lat) * progress,
    lng: start.lng + (dest.lng-start.lng) * progress
  };

  if(S.map){ S.map.remove(); S.map = null; }

  S.map = L.map('map', {zoomControl:false, attributionControl:false}).setView([cur.lat, cur.lng], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19}).addTo(S.map);

  // seller marker
  const sellerIcon = L.divIcon({html:`<div style="background:#1565C0;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.3);font-size:11px">P</div>`, className:'', iconSize:[28,28], iconAnchor:[14,14]});
  L.marker([start.lat,start.lng], {icon:sellerIcon}).addTo(S.map).bindPopup('Penjual');

  // dest marker
  const destIcon = L.divIcon({html:`<div style="background:#D32F2F;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.4)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>`, className:'', iconSize:[32,32], iconAnchor:[16,32]});
  L.marker([dest.lat,dest.lng], {icon:destIcon}).addTo(S.map).bindPopup('Alamat Anda');

  // courier marker
  const courierIcon = L.divIcon({html:`<div style="background:#2E7D32;color:#fff;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:3px solid #fff;box-shadow:0 3px 10px rgba(0,0,0,.4);animation:pulse 1.5s infinite"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>`, className:'', iconSize:[36,36], iconAnchor:[18,18]});
  S.mapMarker = L.marker([cur.lat,cur.lng], {icon:courierIcon}).addTo(S.map).bindPopup('Kurir');

  // route line
  const pts = [[start.lat,start.lng],[cur.lat,cur.lng]];
  S.mapLine = L.polyline([[start.lat,start.lng],[dest.lat,dest.lng]], {color:'#D32F2F', weight:3, dashArray:'8 8', opacity:.7}).addTo(S.map);
  L.polyline([[start.lat,start.lng],[cur.lat,cur.lng]], {color:'#2E7D32', weight:4, opacity:.9}).addTo(S.map);
}

/* ==================== KEYBOARD / NAV BACK ==================== */
window.addEventListener('popstate', ()=>{
  if(S.stack.length) back(); else history.pushState(null,'');
});
history.pushState(null,'');

/* ==================== INIT ==================== */
(function init(){
  if(S.user){
    // ensure user still exists in db
    const u = db.users.find(x=>x.id===S.user.id);
    if(!u){ S.user = null; saveSession(); }
    else S.user = u;
  }
  S.view = 'home'; S.stack = [];
  render();
})();