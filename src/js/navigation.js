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
    const isMobileMenuOpen = mobileMenu && mobileMenu.classList.contains('translate-x-0');
    
    if (isMobileMenuOpen || window.scrollY > 20) {
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
      handleScroll(); // Update top bar visibility
    });

    // Close menu when clicking outside it or on links
    mobileMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
        handleScroll(); // Update top bar visibility
      }
    });

    // Reset mobile menu state if window is resized to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && mobileMenu.classList.contains('translate-x-0')) {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
        handleScroll(); // Reset top bar visibility
      }
    });
  }

  // 3. Highlight Active Navigation Links
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('#desktop-nav a, #desktop-nav button, #mobile-menu a');

  navLinks.forEach(link => {
    // Check if it is a Mega Menu button
    if (link.tagName === 'BUTTON') {
      const spanText = link.querySelector('span')?.textContent?.trim().toLowerCase();
      if ((spanText === 'membership' && currentPath.includes('membership')) || 
          (spanText === 'discover' && currentPath.includes('discover')) ||
          (spanText === 'news' && currentPath.includes('news'))) {
        link.classList.add('text-brand-green', 'font-bold', 'active');
        link.classList.remove('text-text-body', 'font-semibold');
      }
      return;
    }

    const href = link.getAttribute('href');
    if (href && !href.startsWith('#')) {
      const isHome = currentPath === '/' || currentPath.endsWith('index.html');
      const linkIsHome = href === '/' || href.endsWith('index.html');

      if (isHome && linkIsHome) {
        link.classList.add('text-brand-green', 'font-bold', 'active');
        link.classList.remove('text-text-body', 'font-semibold');
      } else if (!linkIsHome && currentPath.includes(href.split('#')[0].replace('../', ''))) {
        link.classList.add('text-brand-green', 'font-bold', 'active');
        link.classList.remove('text-text-body', 'font-semibold');
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

  // 5. Language Switcher Removed

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
