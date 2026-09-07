/**
 * Kanga Custom Products — Core Script
 * Handles dynamic header/footer loading, navigation active state,
 * mobile drawer toggle, gallery lightbox modal with prev/next navigation,
 * and FormSubmit.co AJAX submissions with confirmation modal.
 */

// 1. Dynamic Shared Content (Header & Footer)
async function loadSharedContent() {
  const sharedContent = [
    ['[data-include="header"]', ['components/header.html', 'header.html']],
    ['[data-include="footer"]', ['components/footer.html', 'footer.html']]
  ];

  await Promise.all(sharedContent.map(async ([selector, paths]) => {
    const placeholder = document.querySelector(selector);
    if (!placeholder) return;

    for (const file of paths) {
      try {
        const response = await fetch(file);
        if (response.ok) {
          placeholder.outerHTML = await response.text();
          break;
        }
      } catch (err) {
        // try fallback
      }
    }
  }));

  initNavigation();
}

// 2. Navigation Active State & Mobile Menu Toggle
function initNavigation() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const currentPage = currentPath.replace('.html', '');

  // Highlight active link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const pageAttr = link.getAttribute('data-page');
    const href = link.getAttribute('href');
    if (href === currentPath || pageAttr === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Mobile menu toggle
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (toggleBtn && primaryNav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('nav-open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      toggleBtn.classList.toggle('is-active', isOpen);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!primaryNav.contains(e.target) && !toggleBtn.contains(e.target) && primaryNav.classList.contains('nav-open')) {
        primaryNav.classList.remove('nav-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.classList.remove('is-active');
      }
    });
  }
}

// 3. Form Handling with Validation & Modal Confirmation
function initializeForms() {
  const forms = document.querySelectorAll('form[action*="formsubmit.co"]');
  const modal = document.querySelector('#quote-modal');
  const closeButton = modal?.querySelector('.modal-close');

  function closeModal() {
    if (modal) {
      modal.hidden = true;
    }
  }

  forms.forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      const subjectInput = form.querySelector('input[name="_subject"]');
      const name = form.elements.namedItem('name')?.value.trim();
      const formType = subjectInput?.value.replace(' - Kanga Custom Products', '') || 'New inquiry';

      if (subjectInput) {
        subjectInput.value = `${formType} - ${name || 'Visitor'} - ${Date.now()}`;
      }

      submitButton.disabled = true;
      submitButton.textContent = 'Sending Request...';

      try {
        const ajaxAction = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
        const formData = new FormData(form);
        const response = await fetch(ajaxAction, {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Form submission failed');
        }

        form.reset();
        if (modal) {
          modal.hidden = false;
          closeButton?.focus();
        } else {
          alert('Thank you! Your quote request has been sent to Kanga Custom Products.');
        }
      } catch (error) {
        console.error(error);
        alert('Your request could not be sent directly via network. Please call us at 801-941-1632 or email kangainfo@gmail.com!');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    });
  });

  closeButton?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

// 4. Rayan's Lightbox & Gallery Filter System
function initializeGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const btnPrev = lightbox.querySelector('.lightbox-prev');
  const btnNext = lightbox.querySelector('.lightbox-next');
  const btnClose = lightbox.querySelector('.lightbox-close');

  let currentIndex = 0;
  let activeItems = Array.from(galleryItems);

  function updateActiveItems() {
    activeItems = Array.from(document.querySelectorAll('.gallery-item:not(.is-hidden)'));
  }

  function showImage(index) {
    if (activeItems.length === 0) return;
    if (index < 0) index = activeItems.length - 1;
    if (index >= activeItems.length) index = 0;
    currentIndex = index;

    const item = activeItems[currentIndex];
    const img = item.querySelector('img');
    const title = item.getAttribute('data-title') || img.alt;
    const category = item.getAttribute('data-category') || '';

    lightboxImg.src = img.src;
    lightboxImg.alt = title;
    lightboxCaption.innerHTML = `<strong>${title}</strong> ${category ? `<span class="lightbox-tag">${category}</span>` : ''}`;
    lightbox.hidden = false;
  }

  function closeLightbox() {
    lightbox.hidden = true;
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      updateActiveItems();
      const idx = activeItems.indexOf(item);
      if (idx !== -1) {
        showImage(idx);
      }
    });
  });

  btnPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(currentIndex - 1);
  });

  btnNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(currentIndex + 1);
  });

  btnClose?.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });

  // Category Filtering
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('is-hidden');
        } else {
          item.classList.add('is-hidden');
        }
      });
      updateActiveItems();
    });
  });
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  loadSharedContent()
    .then(() => {
      initializeForms();
      initializeGallery();
    })
    .catch((err) => console.error(err));
});
