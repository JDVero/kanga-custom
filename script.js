async function loadSharedContent() {
  const sharedContent = [
    ['[data-include="header"]', 'header.html'],
    ['[data-include="footer"]', 'footer.html']
  ];

  await Promise.all(sharedContent.map(async ([selector, file]) => {
    const placeholder = document.querySelector(selector);
    if (!placeholder) {
      return;
    }

    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Unable to load ${file}`);
    }

    placeholder.outerHTML = await response.text();
  }));
}

function initializeForms() {
  const forms = document.querySelectorAll('form[action*="formsubmit.co"]');
  const modal = document.querySelector('#quote-modal');
  const closeButton = modal?.querySelector('.modal-close');

function closeModal() {
  if (!modal) {
    return;
  }

  modal.hidden = true;
}

  forms.forEach((form) => {
    form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const subjectInput = form.querySelector('input[name="_subject"]');
    const name = form.elements.namedItem('name')?.value.trim();
    const formType = subjectInput?.value.replace(' - Kanga Custom Products', '') || 'New inquiry';

    if (subjectInput) {
      subjectInput.value = `${formType} - ${name || 'Visitor'} - ${Date.now()}`;
    }

    submitButton.disabled = true;

    try {
      const ajaxAction = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
      const response = await fetch(ajaxAction, {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        headers: {
          Accept: 'application/json',
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
      }
    } catch (error) {
      window.alert('Your message could not be sent. Please try again.');
    } finally {
      submitButton.disabled = false;
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

loadSharedContent()
  .then(initializeForms)
  .catch((error) => console.error(error));
