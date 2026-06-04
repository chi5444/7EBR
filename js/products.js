// products.js — 7EBR

async function fetchProducts(filters = {}) {
  let query = sb.from('products').select('*').eq('in_stock', true);
  if (filters.category) query = query.eq('category', filters.category);
  if (filters.search)   query = query.ilike('title', `%${filters.search}%`);
  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

async function fetchProductById(id) {
  const { data, error } = await sb.from('products').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}

async function fetchAllProducts() {
  const { data, error } = await sb.from('products').select('*').order('id', { ascending: false });
  if (error) throw error;
  return data || [];
}

async function createProduct(product) {
  const { data, error } = await sb.from('products').insert([product]).select();
  if (error) throw error;
  return data[0];
}

async function updateProduct(id, updates) {
  const { data, error } = await sb.from('products').update(updates).eq('id', id).select();
  if (error) throw error;
  return data[0];
}

async function deleteProduct(id) {
  const { error } = await sb.from('products').delete().eq('id', id);
  if (error) throw error;
}

/* ── Card placeholder SVG (parchment style) ── */
function placeholderSVG() {
  return `<svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
    <rect width="300" height="400" fill="#E8DECE"/>
    <path d="M90 280 L150 120 L210 280 Z" stroke="#B5956A" stroke-width="1" fill="none" opacity="0.4"/>
    <circle cx="150" cy="115" r="8" fill="none" stroke="#B5956A" stroke-width="1" opacity="0.4"/>
    <text x="150" y="370" font-family="Georgia,serif" font-size="14" fill="#B5956A" text-anchor="middle" opacity="0.35" letter-spacing="4">7EBR</text>
  </svg>`;
}

function renderProductCard(p) {
  const badge    = p.badge    ? `<span class="badge">${p.badge}</span>` : '';
  const oldPrice = p.old_price ? `<span class="old-price">${p.old_price} TND</span>` : '';
  /* first image from images array OR fallback */
  let imgHtml;
  if (p.images && p.images.length > 0) {
    imgHtml = `<img src="${p.images[0]}" alt="${p.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
               <div style="display:none;width:100%;height:100%;align-items:center;justify-content:center;">${placeholderSVG()}</div>`;
  } else {
    imgHtml = placeholderSVG();
  }
  return `
    <article class="product-card" onclick="window.location.href='/product.html?id=${p.id}'">
      <div class="card-img-wrap">
        ${badge}
        <div class="card-img-placeholder">${imgHtml}</div>
      </div>
      <div class="card-info">
        <h3 class="card-title">${p.title}</h3>
        <div class="card-price">${oldPrice}<span class="price">${p.price} TND</span></div>
      </div>
    </article>`;
}