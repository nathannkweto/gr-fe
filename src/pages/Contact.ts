// src/components/ContactSection.ts
import { el } from '../utils/dom';
import { api } from '../api';

type MessageKind = 'info' | 'success' | 'error';

// ContactSection builds the DOM using your `el()` helper and wires submission to api.postQuote()
export default function ContactSection(): HTMLElement {
  /* ----------------
     BUILD DOM (keeps your markup & styles)
     ---------------- */

  const formMessage = el('div', { id: 'form-message', style: 'display: none;' }) as HTMLElement;

  const form = el('form', { id: 'contact-form', class: 'space-y-6' },
    formMessage,

    // Full Name
    el('div', {},
      el('label', { for: 'name', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Full Name'),
      el('input', {
        type: 'text',
        id: 'name',
        name: 'name',
        class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent',
        required: 'true'
      })
    ),

    // Email
    el('div', {},
      el('label', { for: 'email', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Email Address'),
      el('input', {
        type: 'email',
        id: 'email',
        name: 'email',
        class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent',
        required: 'true'
      })
    ),

    // Company
    el('div', {},
      el('label', { for: 'company', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Company'),
      el('input', {
        type: 'text',
        id: 'company',
        name: 'company',
        class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
      })
    ),

    // Message
    el('div', {},
      el('label', { for: 'message', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Message'),
      el('textarea', {
        id: 'message',
        name: 'message',
        rows: '5',
        class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent',
        required: 'true'
      }, '')
    ),

    // Submit
    el('button',
      {
        type: 'submit',
        id: 'submit-btn',
        class: 'w-full bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-secondary transition-colors whitespace-nowrap',
      },
      'Send Message'
    )
  ) as HTMLFormElement;

  // Contact info column (unchanged)
  const contactInfo = el('div', { class: 'space-y-8' },
    el('div', {},
      el('h3', { class: 'text-xl font-semibold mb-6' }, 'Contact Information'),
      el('div', { class: 'space-y-4' },
        el('div', { class: 'flex items-center' },
          el('div', { class: 'w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4' },
            el('i', { class: 'ri-mail-line text-primary' })
          ),
          el('div', {},
            el('p', { class: 'font-medium' }, 'Email'),
            el('p', { class: 'text-gray-600' }, 'contact@thegoldenforce.com')
          )
        ),
        el('div', { class: 'flex items-center' },
          el('div', { class: 'w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4' },
            el('i', { class: 'ri-phone-line text-primary' })
          ),
          el('div', {},
            el('p', { class: 'font-medium' }, 'Phone'),
            el('p', { class: 'text-gray-600' }, '+212 696-938795')
          )
        )
      )
    )
  ) as HTMLElement;

  // Success modal (hidden by default)
  const successModal = el('div', {
    id: 'contact-success-modal',
    class: 'fixed inset-0 bg-black/50 flex items-center justify-center z-50',
    style: 'display:none;'
  },
    el('div', { class: 'bg-white rounded-xl p-6 max-w-md w-full text-center' },
      el('h3', { class: 'text-xl font-semibold mb-2' }, 'Message Sent'),
      el('p', { id: 'contact-modal-message', class: 'text-gray-600 mb-4' }, 'Thank you — we received your message. We will contact you soon.'),
      el('button', { id: 'contact-modal-close', class: 'px-4 py-2 rounded bg-primary text-white' }, 'Close')
    )
  ) as HTMLElement;

  const section = el('section', { id: 'contact', class: 'py-20 bg-white' },
    el('div', { class: 'container mx-auto px-6' },
      el('div', { class: 'text-center mb-16' },
        el('h2', { class: 'text-4xl font-bold text-gray-900 mb-4' }, 'Get In Touch'),
        el('p', { class: 'text-xl text-gray-600' }, 'Ready to discuss your recruitment and staffing needs? We\'re here to help.')
      ),
      el('div', { class: 'grid lg:grid-cols-2 gap-12' },
        el('div', {}, form),
        contactInfo
      )
    ),
    successModal
  ) as HTMLElement;

  /* ----------------
     Helpers & Logic (submission behaviour using api.postQuote)
     ---------------- */

  function showMessage(text: string, type: MessageKind = 'info'): void {
    formMessage.innerHTML = '';
    const color = type === 'success'
      ? 'text-green-700 bg-green-50'
      : type === 'error'
        ? 'text-red-700 bg-red-50'
        : 'text-blue-800 bg-blue-50';

    const wrapper = el('div', { class: `rounded-md p-3 ${color} px-4 mb-4` }, text) as HTMLElement;
    formMessage.appendChild(wrapper);
    formMessage.style.display = '';

    if (type !== 'error') {
      window.setTimeout(() => {
        if (formMessage.contains(wrapper)) wrapper.remove();
        if (!formMessage.firstChild) formMessage.style.display = 'none';
      }, 4000);
    }
  }

  function hideMessage(): void {
    formMessage.innerHTML = '';
    formMessage.style.display = 'none';
  }

  function collectFormObject(): Record<string, any> {
    const fd = new FormData(form);
    const obj: Record<string, any> = {};
    for (const [k, v] of fd.entries()) {
      // if there are multiple entries with same name, keep last; this single-form mirrors your original behavior
      obj[k] = v;
    }
    return obj;
  }

  function setControlsDisabled(disabled: boolean): void {
    const elements = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement | HTMLSelectElement>('input, textarea, button, select'));
    elements.forEach((el) => {
      el.disabled = disabled;
      if (disabled) el.setAttribute('aria-disabled', 'true');
      else el.removeAttribute('aria-disabled');
    });
  }

  // submit handler uses api.postQuote which posts to API_BASE + '/quote'
  async function handleSubmit(e?: Event): Promise<void> {
    if (e) e.preventDefault();
    hideMessage();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const payload = collectFormObject();

    // optimistic UI
    showMessage('Submitting... Please wait.', 'info');
    setControlsDisabled(true);

    try {
      // api.postQuote(payload) posts to API_BASE + '/quote'
      const data = await api.postQuote(payload);

      // show success modal and message
      const backendMessage = (data && (data.message || (data as any).msg)) ? (data.message ?? (data as any).msg) : 'Quote request submitted successfully.';
      const modalMsgEl = successModal.querySelector('#contact-modal-message') as HTMLElement | null;
      if (modalMsgEl) modalMsgEl.textContent = String(backendMessage);
      successModal.style.display = '';

      showMessage('Submitted successfully.', 'success');
    } catch (caught) {
      console.warn('Submit failed', caught);

      const err = caught as unknown;
      // If the wrapper set timeout property, surface it
      if (err instanceof Error && (err as any).timeout) {
        showMessage('Request timed out. Please try again.', 'error');
      } else if (err instanceof Error) {
        // try to show server-provided info if available
        const serverMsg = (err as any).body?.message ?? (err as any).message ?? 'Submission failed.';
        showMessage(`Failed to submit: ${String(serverMsg)}`, 'error');
      } else {
        showMessage('Failed to submit: unknown error', 'error');
      }
    } finally {
      setControlsDisabled(false);
    }
  }

  /* ----------------
     Wire events
     ---------------- */

  form.addEventListener('submit', (ev: Event) => {
    void handleSubmit(ev);
  });

  const submitBtn = form.querySelector<HTMLButtonElement>('#submit-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', (ev: MouseEvent) => {
      ev.preventDefault();
      void handleSubmit(ev);
    });
  }

  const modalClose = successModal.querySelector<HTMLButtonElement>('#contact-modal-close');
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      successModal.style.display = 'none';
    });
  }

  successModal.addEventListener('click', (ev: MouseEvent) => {
    if (ev.target === successModal) successModal.style.display = 'none';
  });

  return section;
}
