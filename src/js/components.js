/* ==========================================================================
   BMCCI INTERACTIVE UI COMPONENTS HANDLER
   ========================================================================== */

/**
 * Initialize all generic UI interactive elements (Tabs, Accordions, Modals)
 */
export function initUIComponents() {
  initTabs();
  initAccordions();
  initModals();
  initDropdowns();
  initPageHeader();
}

/**
 * Generic Tab Component Handler
 * Elements must have:
 * - Tab buttons: data-tab-target="[selector]"
 * - Tab panes: id="[selector]" and data-tab-content
 */
function initTabs() {
  const tabs = document.querySelectorAll('[data-tab-target]');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetSelector = tab.getAttribute('data-tab-target');
      const targetContent = document.querySelector(targetSelector);
      
      if (!targetContent) return;
      
      // Get all siblings of the clicked tab button
      const parent = tab.parentElement;
      if (parent) {
        parent.querySelectorAll('[data-tab-target]').forEach(t => {
          t.classList.remove('active', 'border-brand-green', 'text-brand-green');
          t.classList.add('border-transparent', 'text-text-muted');
        });
      }
      
      // Add active state to clicked tab button
      tab.classList.add('active', 'border-brand-green', 'text-brand-green');
      tab.classList.remove('border-transparent', 'text-text-muted');
      
      // Toggle Tab Content panes
      const contentGroup = targetContent.parentElement;
      if (contentGroup) {
        contentGroup.querySelectorAll('[data-tab-content]').forEach(pane => {
          pane.classList.add('hidden');
          pane.classList.remove('block');
        });
      }
      
      targetContent.classList.remove('hidden');
      targetContent.classList.add('block');
    });
  });
}

/**
 * Generic Accordion Component Handler
 * Elements must have:
 * - Trigger header: data-accordion-trigger
 * - Target panel: sibling element or container
 */
function initAccordions() {
  const triggers = document.querySelectorAll('[data-accordion-trigger]');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const target = trigger.nextElementSibling;
      const icon = trigger.querySelector('.accordion-icon');
      
      if (!target) return;

      const isOpen = !target.classList.contains('hidden');
      
      // Close all accordions in the same group (optional, we check if container has data-accordion-group)
      const group = trigger.closest('[data-accordion-group]');
      if (group) {
        group.querySelectorAll('[data-accordion-trigger]').forEach(otherTrigger => {
          if (otherTrigger !== trigger) {
            const otherTarget = otherTrigger.nextElementSibling;
            const otherIcon = otherTrigger.querySelector('.accordion-icon');
            if (otherTarget) otherTarget.classList.add('hidden');
            if (otherIcon) otherIcon.classList.remove('rotate-180');
          }
        });
      }

      // Toggle state
      if (isOpen) {
        target.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180');
      } else {
        target.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

/**
 * Generic Modal Handler
 * Elements must have:
 * - Trigger open buttons: data-modal-open="[modal-id]"
 * - Trigger close buttons: data-modal-close or class .modal-close
 * - Modal backdrop: id="[modal-id]"
 */
function initModals() {
  const openButtons = document.querySelectorAll('[data-modal-open]');
  const closeButtons = document.querySelectorAll('[data-modal-close]');
  const modals = document.querySelectorAll('.modal-backdrop');

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-modal-open');
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.remove('hidden');
        targetModal.classList.add('flex');
        document.body.classList.add('overflow-hidden');
      }
    });
  });

  const closeModal = (modal) => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  };

  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-backdrop');
      if (modal) closeModal(modal);
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      // Close modal if clicking direct outer backdrop
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });
}

/**
 * Dropdown Menu Handler
 * Elements must have:
 * - Trigger button: data-dropdown-trigger
 * - Menu list: next sibling or inside container with absolute position
 */
function initDropdowns() {
  const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');

  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = trigger.nextElementSibling;
      if (!menu) return;

      const isHidden = menu.classList.contains('hidden');
      
      // Close all other dropdowns
      document.querySelectorAll('[data-dropdown-trigger]').forEach(otherTrigger => {
        const otherMenu = otherTrigger.nextElementSibling;
        if (otherMenu && otherTrigger !== trigger) {
          otherMenu.classList.add('hidden');
        }
      });

      if (isHidden) {
        menu.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
      }
    });
  });

  // Close dropdowns on clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('[data-dropdown-trigger]').forEach(trigger => {
      const menu = trigger.nextElementSibling;
      if (menu) menu.classList.add('hidden');
    });
  });
}

/**
 * Dynamic Subpage Header Handler
 * Auto-configures title and subtitle on page-header based on body data-attributes or title tags.
 */
function initPageHeader() {
  const pageTitleEl = document.getElementById('page-header-title');
  const pageSubtitleEl = document.getElementById('page-header-subtitle');
  const breadcrumbEl = document.getElementById('breadcrumb-current-page');
  
  if (pageTitleEl && pageSubtitleEl) {
    const overrideTitle = document.body.getAttribute('data-page-title');
    const overrideSubtitle = document.body.getAttribute('data-page-subtitle');
    
    const finalTitle = overrideTitle || document.title.split('|')[0].trim();
    pageTitleEl.textContent = finalTitle;
    if (breadcrumbEl) {
      breadcrumbEl.textContent = finalTitle;
    }
    
    if (overrideSubtitle) {
      pageSubtitleEl.textContent = overrideSubtitle;
    } else {
      const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
      pageSubtitleEl.textContent = metaDesc || '';
    }
  }
}

