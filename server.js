const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'ejuku-rahasia-2024';
const DB_FILE = path.join(__dirname, 'db.json');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* ================== SIMPLE JSON DATABASE ================== */
let db = { users: [], products: [], orders: [], carts: [], orderCounter: 0, userCounter: 0 };

function loadDB() {
  if (fs.existsSync(DB_FILE)) {
    db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } else {
    seedDB();
    saveDB();
  }
}
function saveDB() {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

function seedDB() {
  db.users = [{
    id: 1,
    name: 'Admin E-Juku',
    email: 'admin@ejuku.id',
    password: bcrypt.hashSync('admin123', 10),
    role: 'admin',
    phone: '08000000000',
    address: 'Makassar, Sulawesi Selatan'
  }];
  db.userCounter = 1;
  db.products = [
    { id: 1, name: 'Ikan Kembung Segar', price: 35000, unit: 'kg', stock: 100, category: 'Ikan Segar', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500', seller: 'Nelayan Makassar', description: 'Ikan kembung segar langsung dari nelayan Makassar.' },
    { id: 2, name: 'Udang Vaname', price: 85000, unit: 'kg', stock: 50, category: 'Udang', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500', seller: 'Tambak Pinrang', description: 'Udang vaname segar kualitas ekspor.' },
    { id: 3, name: 'Cumi-Cumi Segar', price: 65000, unit: 'kg', stock: 40, category: 'Cumi', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=500', seller: 'Nelayan Bulukumba', description: 'Cumi-cumi segar hasil tangkapan pagi.' },
    { id: 4, name: 'Kepiting Bakau', price: 120000, unit: 'kg', stock: 25, category: 'Kepiting', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=500', seller: 'Tambak Barru', description: 'Kepiting bakau hidup, segar.' },
    { id: 5, name: 'Kerang Dara', price: 25000, unit: 'kg', stock: 60, category: 'Kerang', image: 'https://images.unsplash.com/photo-1611171711791-b34fa4e1d3b7?w=500', seller: 'Nelayan Takalar', description: 'Kerang dara segar bersih.' },
    { id: 6, name: 'Lobster Air Laut', price: 350000, unit: 'kg', stock: 10, category: 'Lobster', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=500', seller: 'Nelayan Makassar', description: 'Lobster segar premium.' },
    { id: 7, name: 'Ikan Bandeng', price: 40000, unit: 'kg', stock: 70, category: 'Ikan Segar', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500', seller: 'Tambak Maros', description: 'Ikan bandeng segar tambak.' },
    { id: 8, name: 'Rumput Laut Kering', price: 20000, unit: 'kg', stock: 80, category: 'Olahan', image: 'https://images.unsplash.com/photo-1611171711791-b34fa4e1d3b7?w=500', seller: 'UMKM Jeneponto', description: 'Rumput laut kering siap olah.' }
  ];
  db.orders = [];
  db.carts = [];
  db.orderCounter = 0;
}

/* ================== AUTH MIDDLEWARE ================== */
function auth(req, res, next) {
  const h = req.headers.authorization || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Token tidak ada' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Token tidak valid' });
  }
}

/* ================== AUTH ROUTES ================== */
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, phone, address } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'Nama, email, password wajib' });
  if (db.users.find(u => u.email === email)) return res.status(400).json({ error: 'Email sudah terdaftar' });
  db.userCounter++;
  const user = {
    id: db.userCounter,
    name, email,
    password: bcrypt.hashSync(password, 10),
    role: 'buyer',
    phone: phone || '',
    address: address || ''
  };
  db.users.push(user);
  saveDB();
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone, address: user.address } });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = db.users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password))
    return res.status(401).json({ error: 'Email atau password salah' });
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone, address: user.address } });
});

app.get('/api/auth/me', auth, (req, res) => {
  const user = db.users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User tidak ditemukan' });
  res.json({ id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone, address: user.address });
});

/* ================== PRODUCT ROUTES ================== */
app.get('/api/products', (req, res) => {
  const { q, category } = req.query;
  let list = [...db.products];
  if (q) list = list.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  if (category) list = list.filter(p => p.category === category);
  res.json(list);
});

app.get('/api/products/:id', (req, res) => {
  const p = db.products.find(x => x.id === +req.params.id);
  if (!p) return res.status(404).json({ error: 'Produk tidak ditemukan' });
  res.json(p);
});

app.post('/api/products', auth, (req, res) => {
  const { name, price, unit, stock, category, image, description } = req.body;
  if (!name || !price) return res.status(400).json({ error: 'Nama dan harga wajib' });
  const user = db.users.find(u => u.id === req.user.id);
  const p = {
    id: Date.now(),
    name, price: +price, unit: unit || 'kg',
    stock: +stock || 0,
    category: category || 'Ikan Segar',
    image: image || 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500',
    seller: user ? user.name : 'Penjual',
    description: description || ''
  };
  db.products.push(p);
  saveDB();
  res.json(p);
});

/* ================== CART ROUTES ================== */
app.get('/api/cart', auth, (req, res) => {
  const items = db.carts.filter(c => c.userId === req.user.id)
    .map(c => {
      const p = db.products.find(x => x.id === c.productId);
      return { ...c, product: p };
    }).filter(c => c.product);
  res.json(items);
});

app.post('/api/cart', auth, (req, res) => {
  const { productId, qty } = req.body;
  const product = db.products.find(p => p.id === +productId);
  if (!product) return res.status(404).json({ error: 'Produk tidak ditemukan' });
  let item = db.carts.find(c => c.userId === req.user.id && c.productId === +productId);
  if (item) {
    item.qty += qty || 1;
  } else {
    item = { id: Date.now(), userId: req.user.id, productId: +productId, qty: qty || 1 };
    db.carts.push(item);
  }
  saveDB();
  res.json(item);
});

app.patch('/api/cart/:id', auth, (req, res) => {
  const item = db.carts.find(c => c.id === +req.params.id && c.userId === req.user.id);
  if (!item) return res.status(404).json({ error: 'Item tidak ditemukan' });
  if (req.body.qty) item.qty = Math.max(1, +req.body.qty);
  saveDB();
  res.json(item);
});

app.delete('/api/cart/:id', auth, (req, res) => {
  db.carts = db.carts.filter(c => !(c.id === +req.params.id && c.userId === req.user.id));
  saveDB();
  res.json({ ok: true });
});

/* ================== ORDER ROUTES ================== */
app.post('/api/orders', auth, (req, res) => {
  const { shippingAddress, paymentMethod, note } = req.body;
  const items = db.carts.filter(c => c.userId === req.user.id)
    .map(c => {
      const p = db.products.find(x => x.id === c.productId);
      if (!p) return null;
      return { productId: p.id, name: p.name, price: p.price, qty: c.qty, image: p.image };
    }).filter(Boolean);
  if (!items.length) return res.status(400).json({ error: 'Keranjang kosong' });

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shippingFee = 10000;
  const serviceFee = 2000;
  const total = subtotal + shippingFee + serviceFee;

  db.orderCounter++;
  const order = {
    id: db.orderCounter,
    code: 'EJ' + String(db.orderCounter).padStart(6, '0'),
    userId: req.user.id,
    items,
    subtotal, shippingFee, serviceFee, total,
    shippingAddress: shippingAddress || 'Alamat belum diisi',
    paymentMethod: paymentMethod || 'QRIS',
    note: note || '',
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
  db.carts = db.carts.filter(c => c.userId !== req.user.id);
  saveDB();
  res.json(order);
});

app.get('/api/orders', auth, (req, res) => {
  const list = db.orders.filter(o => o.userId === req.user.id).sort((a, b) => b.id - a.id);
  res.json(list);
});

app.get('/api/orders/:id', auth, (req, res) => {
  const order = db.orders.find(o => o.id === +req.params.id && o.userId === req.user.id);
  if (!order) return res.status(404).json({ error: 'Pesanan tidak ditemukan' });
  res.json(order);
});

app.patch('/api/orders/:id/status', auth, (req, res) => {
  const order = db.orders.find(o => o.id === +req.params.id && o.userId === req.user.id);
  if (!order) return res.status(404).json({ error: 'Pesanan tidak ditemukan' });
  const flow = ['Menunggu Konfirmasi', 'Diproses', 'Dikirim', 'Selesai'];
  const idx = flow.indexOf(order.status);
  if (idx >= 0 && idx < flow.length - 1) order.status = flow[idx + 1];
  saveDB();
  res.json(order);
});

/* ================== START ================== */
loadDB();
app.listen(PORT, () => {
  console.log(`🐟 E-Juku berjalan di http://localhost:${PORT}`);
  console.log(`Login admin default: admin@ejuku.id / admin123`);
});