/**
 * Infinity Advertising Pvt. Ltd.
 * Main Interactive Script
 * Location: Blue Star Complex, 6th Floor (609), Tripureshwor, Kathmandu, Nepal
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initPortfolioFilters();
  initClientFilters();
  initFaqAccordions();
  initContactForm();
  updateCurrentYear();
});

/**
 * Mobile Navigation Toggle & Focus Management
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  if (!menuToggle || !mobileDrawer) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
    mobileDrawer.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', () => toggleMenu());

  // Close when clicking an anchor link inside the drawer
  mobileDrawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      toggleMenu(false);
      menuToggle.focus();
    }
  });
}

/**
 * Sticky Header Scroll State
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Portfolio Category Filter
 */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const caseCards = document.querySelectorAll('.case-card');
  if (!filterBtns.length || !caseCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter') || 'all';

      caseCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        if (filterVal === 'all' || category.includes(filterVal)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Client Industry Filter
 */
function initClientFilters() {
  const filterBtns = document.querySelectorAll('.client-filter-btn');
  const clientCards = document.querySelectorAll('.client-card');
  if (!filterBtns.length || !clientCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-industry') || 'all';

      clientCards.forEach((card) => {
        const industry = card.getAttribute('data-industry') || '';
        if (filterVal === 'all' || industry === filterVal) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * FAQ Accordion Handlers
 */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Close others in same accordion
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

/**
 * Contact Form Validation & Submission
 */
function initContactForm() {
  const contactForm = document.querySelector('#agency-contact-form');
  const formStatus = document.querySelector('#contact-form-status');
  if (!contactForm || !formStatus) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('#contact-name');
    const email = contactForm.querySelector('#contact-email');
    const phone = contactForm.querySelector('#contact-phone');
    const message = contactForm.querySelector('#contact-message');

    if (!name?.value.trim() || !email?.value.trim() || !message?.value.trim()) {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Please complete all required fields (Name, Email, and Project Details).';
      return;
    }

    // Friendly feedback
    formStatus.className = 'form-status success';
    formStatus.innerHTML = `<strong>Thank you, ${name.value.trim()}!</strong> Your project enquiry has been received. Our team in Tripureshwor, Kathmandu will review your requirements and reach out to you promptly. For urgent assistance, call us directly at <a href="tel:+97715347277" style="text-decoration:underline;">+977-1-5347277</a>.`;

    contactForm.reset();
  });
}

/**
 * Dynamic Current Year
 */
function updateCurrentYear() {
  const yearEls = document.querySelectorAll('.current-year');
  const yr = new Date().getFullYear();
  yearEls.forEach((el) => {
    el.textContent = String(yr);
  });
}
