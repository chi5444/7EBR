// cart.js — Panier 7EBR (localStorage)

function getCart() {
  return JSON.parse(localStorage.getItem('7ebr_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('7ebr_cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(product, size = '') {
  const cart = getCart();
  const key = `${product.id}_${size}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ key, id: product.id, title: product.title, price: product.price, size, qty: 1, img_class: product.img_class });
  }
  saveCart(cart);
  showCartToast(product.title);
}

function removeFromCart(key) {
  const cart = getCart().filter(i => i.key !== key);
  saveCart(cart);
}

function updateQty(key, qty) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (item) item.qty = qty;
  saveCart(cart.filter(i => i.qty > 0));
}

function clearCart() {
  localStorage.removeItem('7ebr_cart');
  updateCartCount();
}

function cartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function updateCartCount() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function showCartToast(title) {
  let toast = document.getElementById('cart-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cart-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = `"${title}" ajouté au panier`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

document.addEventListener('DOMContentLoaded', updateCartCount);