// products.js — Gestion des produits 7EBR

async function fetchProducts(filters = {}) {
  let query = sb.from('products').select('*').eq('in_stock', true);
  if (filters.category) query = query.eq('category', filters.category);
  if (filters.search) query = query.ilike('title', `%${filters.search}%`);
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

function renderProductCard(p) {
  const badge = p.badge ? `<span class="badge">${p.badge}</span>` : '';
  const oldPrice = p.old_price ? `<span class="old-price">${p.old_price} TND</span>` : '';
  const imgContent = p.image_url
    ? `<img src="${p.image_url}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" onerror="this.style.display='none'">`
    : `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:60%;height:60%;opacity:0.3">
        <rect width="80" height="80" fill="#1a1a1a"/>
        <path d="M20 55 L40 25 L60 55 Z" stroke="#C4A882" stroke-width="1.5" fill="none"/>
        <circle cx="40" cy="22" r="3" fill="#C4A882" opacity="0.5"/>
      </svg>`;
  return `
    <article class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
      <div class="card-img-wrap">
        ${badge}
        <div class="card-img-placeholder ${p.img_class || ''}" style="position:relative;">
          ${imgContent}
        </div>
      </div>
      <div class="card-info">
        <h3 class="card-title">${p.title}</h3>
        <div class="card-price">
          ${oldPrice}
          <span class="price">${p.price} TND</span>
        </div>
      </div>
    </article>`;
}
