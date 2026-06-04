// auth.js — Gestion de l'authentification 7EBR

const ADMIN_EMAIL = 'admin@7ebr.com';

async function getUser() {
  try {
    const { data: { user } } = await sb.auth.getUser();
    return user;
  } catch(e) {
    return null;
  }
}

async function isAdmin() {
  try {
    const user = await getUser();
    return !!(user && user.email === ADMIN_EMAIL);
  } catch(e) {
    return false;
  }
}

async function login(email, password) {
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function register(email, password) {
  const { data, error } = await sb.auth.signUp({
    email, password,
    options: { emailRedirectTo: null }
  });
  if (error) throw error;
  return data;
}

async function logout() {
  await sb.auth.signOut();
  window.location.href = '/index.html';
}

async function requireAdmin() {
  const admin = await isAdmin();
  if (!admin) window.location.href = '/index.html';
}

async function updateNavAuth() {
  const user = await getUser();
  const loginLink = document.getElementById('nav-login');
  const logoutBtn = document.getElementById('nav-logout');
  const adminLink = document.getElementById('nav-admin');

  if (user) {
    if (loginLink) loginLink.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'flex';
    if (adminLink && user.email === ADMIN_EMAIL) adminLink.style.display = 'flex';
  } else {
    if (loginLink) loginLink.style.display = 'flex';
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (adminLink) adminLink.style.display = 'none';
  }
}