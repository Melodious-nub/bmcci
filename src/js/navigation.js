/* ==========================================================================
   BMCCI NAVIGATION CONTROLLER
   ========================================================================== */

export function initNavigation() {
  const header = document.querySelector('header');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!header) return;

  // 1. Sticky & Glassmorphism Blur on Scroll (with Utility Bar slide-up collapse)
  const globalHeader = document.getElementById('global-header');
  const handleScroll = () => {
    if (!globalHeader) return;
    if (window.scrollY > 20) {
      globalHeader.classList.add('header-scrolled');
    } else {
      globalHeader.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger initially in case page loads scrolled down

  // 2. Mobile Nav Hamburger Toggle
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('translate-x-0');
      if (isOpen) {
        // Close menu
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
      } else {
        // Open menu
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('overflow-hidden');
      }
    });

    // Close menu when clicking outside it or on links
    mobileMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

  // 3. Highlight Active Navigation Links
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const isHome = currentPath === '/' || currentPath.endsWith('index.html');
      const linkIsHome = href === '/' || href.endsWith('index.html');

      if (isHome && linkIsHome) {
        link.classList.add('text-brand-green', 'font-semibold');
      } else if (!linkIsHome && currentPath.includes(href.replace('../', ''))) {
        link.classList.add('text-brand-green', 'font-semibold');
      } else {
        link.classList.remove('text-brand-green', 'font-semibold');
      }
    }
  });

  // 4. Back To Top Toggle & Scroll
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove('back-to-top-hidden');
        backToTopBtn.classList.add('back-to-top-visible');
      } else {
        backToTopBtn.classList.remove('back-to-top-visible');
        backToTopBtn.classList.add('back-to-top-hidden');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Language Switcher State Sync & Storage
  const initLanguageToggle = () => {
    const desktopToggleEn = document.getElementById('lang-btn-en');
    const desktopToggleBm = document.getElementById('lang-btn-bm');
    const mobileToggleBtns = document.querySelectorAll('#language-toggle-mobile button');

    const setActiveLanguage = (lang) => {
      sessionStorage.setItem('bmcci_lang', lang);
      
      // Update desktop pill layout
      if (lang === 'en') {
        desktopToggleEn?.classList.add('bg-white', 'text-brand-green');
        desktopToggleEn?.classList.remove('text-white', 'hover:text-brand-gold');
        desktopToggleBm?.classList.remove('bg-white', 'text-brand-green');
        desktopToggleBm?.classList.add('text-white', 'hover:text-brand-gold');
      } else {
        desktopToggleBm?.classList.add('bg-white', 'text-brand-green');
        desktopToggleBm?.classList.remove('text-white', 'hover:text-brand-gold');
        desktopToggleEn?.classList.remove('bg-white', 'text-brand-green');
        desktopToggleEn?.classList.add('text-white', 'hover:text-brand-gold');
      }

      // Update mobile pill layout
      mobileToggleBtns.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
          btn.classList.add('bg-white', 'text-brand-green', 'shadow-sm');
          btn.classList.remove('text-text-body');
        } else {
          btn.classList.remove('bg-white', 'text-brand-green', 'shadow-sm');
          btn.classList.add('text-text-body');
        }
      });
    };

    // Load active language or default to 'en'
    const activeLang = sessionStorage.getItem('bmcci_lang') || 'en';
    setActiveLanguage(activeLang);

    // Desktop click triggers
    desktopToggleEn?.addEventListener('click', () => setActiveLanguage('en'));
    desktopToggleBm?.addEventListener('click', () => setActiveLanguage('bm'));

    // Mobile click triggers
    mobileToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang) setActiveLanguage(lang);
      });
    });
  };
  initLanguageToggle();

  // 6. Keyboard Escape Key Down search close (Accessibility standard)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const searchModal = document.getElementById('global-search-modal');
      if (searchModal && !searchModal.classList.contains('hidden')) {
        searchModal.classList.add('hidden');
        searchModal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
      }
    }
  });
}
