// nav.js — Navigation 7EBR

const SOCIAL = {
  whatsapp: 'https://wa.me/96672771',
  instagram: 'https://instagram.com/7ebr.store',
  facebook: 'https://facebook.com/hebrstore',
  tiktok: 'https://tiktok.com/@7ebr.store'
};

function renderNav(activePage) {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.innerHTML = `
    <div class="announce-bar">Livraison partout en Tunisie · 8 DT</div>
    <nav class="nav">
      <div class="nav-left">
        <button class="nav-btn" id="menu-toggle" aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
          </svg>
        </button>
        <button class="nav-btn" id="search-toggle" aria-label="Rechercher">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
          </svg>
        </button>
      </div>

      <a href="/index.html" class="nav-logo">
        <img src="/logo.jpeg" alt="7EBR" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span class="nav-logo-text" style="display:none">7EBR</span>
      </a>

      <div class="nav-right">
        <a href="/login.html" class="nav-btn" id="nav-login" aria-label="Connexion">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        </a>
        <button class="nav-btn" id="nav-logout" style="display:none" aria-label="Déconnexion">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </button>
        <a href="/admin/index.html" class="nav-btn" id="nav-admin" style="display:none" aria-label="Admin">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
          </svg>
        </a>
        <button class="nav-btn" id="cart-toggle" aria-label="Panier" style="position:relative">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span class="cart-count">0</span>
        </button>
      </div>
    </nav>

    <!-- Search bar -->
    <div id="search-bar" style="display:none;position:fixed;top:var(--nav-h);left:0;right:0;background:var(--cream-card);border-bottom:1px solid var(--cream-dark);padding:14px 24px;z-index:999;box-shadow:var(--shadow-sm);">
      <div class="search-wrap" style="max-width:500px;margin:0 auto;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/></svg>
        <input type="text" class="search-input" id="global-search" placeholder="Rechercher un produit...">
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
      <button class="mobile-menu-close" id="menu-close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <a href="/index.html">Accueil</a>
      <a href="/index.html?cat=t-shirt">T-Shirts</a>
      <a href="/index.html?cat=sweatshirt">Sweatshirts</a>
      <a href="/index.html?cat=hoodie">Hoodies</a>
      <a href="/index.html?cat=pantalon">Pantalons</a>
      <a href="/index.html?cat=accessoire">Accessoires</a>
      <div class="mobile-menu-footer">حبر — نكتب الأثر، نلبس المعنى</div>
    </div>

    <!-- Cart Overlay -->
    <div class="cart-overlay" id="cart-overlay"></div>
    <div class="cart-sidebar" id="cart-sidebar">
      <div class="cart-header">
        <h2>Panier</h2>
        <button class="nav-btn" id="cart-close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="cart-items" id="cart-items-list"></div>
      <div class="cart-footer">
        <div class="cart-total">
          <span>Total</span>
          <span class="cart-total-price" id="cart-total-display">0 TND</span>
        </div>
        <a href="/checkout.html" class="cart-checkout-btn">Commander</a>
      </div>
    </div>
  `;

  document.getElementById('menu-toggle').onclick = () => document.getElementById('mobile-menu').classList.add('open');
  document.getElementById('menu-close').onclick  = () => document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('cart-toggle').onclick = openCart;
  document.getElementById('cart-close').onclick  = closeCart;
  document.getElementById('cart-overlay').onclick = closeCart;
  document.getElementById('nav-logout').onclick  = logout;
  document.getElementById('search-toggle').onclick = () => {
    const sb = document.getElementById('search-bar');
    sb.style.display = sb.style.display === 'none' ? 'block' : 'none';
    if (sb.style.display === 'block') document.getElementById('global-search').focus();
  };
  const gs = document.getElementById('global-search');
  if (gs) gs.addEventListener('input', e => { if (typeof loadProducts === 'function') loadProducts({ search: e.target.value.trim() }); });

  updateNavAuth();
}

function openCart() {
  renderCartSidebar();
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
function renderCartSidebar() {
  const cart = getCart();
  const list = document.getElementById('cart-items-list');
  const total = document.getElementById('cart-total-display');
  if (!list) return;
  if (!cart.length) {
    list.innerHTML = `<div class="cart-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg><p>Votre panier est vide</p></div>`;
    if (total) total.textContent = '0 TND';
    return;
  }
  list.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-thumb">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.title}</div>
        ${item.size ? `<div class="cart-item-size">Taille: ${item.size}</div>` : ''}
        <div class="cart-item-price">${(item.price * item.qty).toFixed(3)} TND</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty('${item.key}',${item.qty-1});renderCartSidebar()">-</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty('${item.key}',${item.qty+1});renderCartSidebar()">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.key}');renderCartSidebar()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      </button>
    </div>`).join('');
  if (total) total.textContent = cartTotal().toFixed(3) + ' TND';
}