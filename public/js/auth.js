/**
 * ==========================================================================
 * BMCCI AUTH SYSTEM
 * Mock-backend authentication, role-based routing, and auth guards.
 * Replace with real JWT/API calls when backend is integrated.
 * ==========================================================================
 */

const MOCK_USERS = [
  { 
    id: "usr_1001",
    email: "superadmin@gmail.com", 
    password: "12345678", 
    role: "superadmin", 
    name: "System Super Admin",
    title: "Platform Administrator",
    avatar: "https://ui-avatars.com/api/?name=Super+Admin&background=006a4e&color=fff&bold=true"
  },
  { 
    id: "usr_1002",
    email: "admin@gmail.com", 
    password: "12345678", 
    role: "admin", 
    name: "Admin Officer",
    title: "Chamber Administrator",
    avatar: "https://ui-avatars.com/api/?name=Admin+Officer&background=0033a0&color=fff&bold=true"
  },
  { 
    id: "usr_1003",
    email: "member@gmail.com", 
    password: "12345678", 
    role: "member", 
    name: "Corporate Member",
    title: "Patron Member",
    avatar: "https://ui-avatars.com/api/?name=Corporate+Member&background=d4af37&color=fff&bold=true"
  }
];

const AUTH_KEY = 'bmcci_auth_token';

const authService = {

  login(email, password) {
    const user = MOCK_USERS.find(u => u.email === email && u.password === password);
    if (user) {
      const tokenObj = {
        userId: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        title: user.title,
        avatar: user.avatar,
        exp: new Date().getTime() + (24 * 60 * 60 * 1000)
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(tokenObj));
      return { success: true, user: tokenObj };
    }
    return { success: false, message: 'Invalid email or password. Please check your credentials.' };
  },

  logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.replace('/pages/login.html');
  },

  getCurrentUser() {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (!raw) return null;
      const token = JSON.parse(raw);
      if (new Date().getTime() > token.exp) {
        localStorage.removeItem(AUTH_KEY);
        return null;
      }
      return token;
    } catch (e) {
      return null;
    }
  },

  guardLoginRoute() {
    const user = this.getCurrentUser();
    if (user) this.routeToPortal(user.role);
  },

  guardPortalRoute(allowedRoles) {
    const user = this.getCurrentUser();
    if (!user) {
      window.location.replace('/pages/login.html');
      return null;
    }
    const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
    if (!roles.includes(user.role)) {
      this.routeToPortal(user.role);
      return null;
    }
    return user;
  },

  routeToPortal(role) {
    switch(role) {
      case 'superadmin': window.location.replace('/pages/admin/superadmin.html'); break;
      case 'admin':      window.location.replace('/pages/admin/admin.html'); break;
      case 'member':     window.location.replace('/pages/admin/member.html'); break;
      default:           window.location.replace('/pages/login.html'); break;
    }
  },

  populateUserInfo() {
    const user = this.getCurrentUser();
    if (!user) return;
    document.querySelectorAll('.auth-user-name').forEach(el => el.textContent = user.name);
    document.querySelectorAll('.auth-user-title').forEach(el => el.textContent = user.title);
    document.querySelectorAll('.auth-user-role').forEach(el => el.textContent = user.role.toUpperCase());
    document.querySelectorAll('.auth-user-email').forEach(el => el.textContent = user.email);
    document.querySelectorAll('.auth-user-avatar').forEach(el => {
      if (el.tagName === 'IMG') el.src = user.avatar;
    });
    document.querySelectorAll('.auth-logout-btn').forEach(btn => {
      btn.addEventListener('click', (e) => { e.preventDefault(); authService.logout(); });
    });
  },

  getAllUsers() {
    return MOCK_USERS;
  }
};

window.authService = authService;
window.MOCK_USERS = MOCK_USERS;
