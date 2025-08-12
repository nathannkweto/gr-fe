import { el } from '../utils/dom';
import { navigate } from '../router';

type ServiceSpec = {
  id: string;
  value: string;
  title: string;
  desc: string;
  iconClass: string;
};

const SERVICES: ServiceSpec[] = [
  { id: 'sales-reps', value: 'sales-representatives', title: 'Sales Representatives', desc: 'Top-tier sales professionals to drive your revenue.', iconClass: 'ri-phone-line' },
  { id: 'customer-support', value: 'customer-support', title: 'Customer Support', desc: '24/7 multilingual customer support teams delivering exceptional service experiences across all communication channels and platforms.', iconClass: 'ri-customer-service-line' },
  { id: 'virtual-assistants', value: 'virtual-assistants', title: 'Virtual Assistants', desc: 'Remote professionals to help you run your business efficiently.', iconClass: 'ri-user-settings-line' },
  { id: 'software-engineering', value: 'software-engineering', title: 'Software Engineering', desc: 'Skilled developers to build and maintain your systems.', iconClass: 'ri-code-line' },
  { id: 'data-entry', value: 'data-entry', title: 'Data Entry', desc: 'We have a dedicated team that can handle all data entry and virtual assistance needs.', iconClass: 'ri-database-line' },
];

const DRAFT_PRESELECT_KEY = 'quote_preselect_services_v1';

function applyPreselectToQuoteForm(values: string[]) {
  const form = document.querySelector<HTMLFormElement>('#quote-form');
  if (!form) return false;

  const allCheckboxes = Array.from(form.querySelectorAll<HTMLInputElement>('input[name="services"]'));
  allCheckboxes.forEach(cb => {
    cb.checked = values.includes(cb.value);
  });

  return true;
}

function savePreselect(values: string[]) {
  localStorage.setItem(DRAFT_PRESELECT_KEY, JSON.stringify(values));
}

/* --- Use this helper (was previously unused) --- */
function addPreselectAndNavigate(values: string[]) {
  const applied = applyPreselectToQuoteForm(values);
  if (!applied) savePreselect(values);

  try {
    navigate('/quote');
  } catch (err) {
    window.location.href = '/quote';
  }
}

function makeServiceCard(s: ServiceSpec) {
  const card = el(
    'div',
    {
      class:
        'service-card bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:border-2 cursor-pointer',
      role: 'button',
      tabindex: '0',
      'aria-pressed': 'false'
    },
    el(
      'div',
      { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6' },
      el('i', { class: `${s.iconClass} text-primary text-2xl` })
    ),
    el('h3', { class: 'text-xl font-semibold mb-4' }, s.title),
    el('p', { class: 'text-gray-600 mb-6' }, s.desc)
  );

  const handler = () => {
    // Load any existing selection, keep unique values
    const raw = localStorage.getItem(DRAFT_PRESELECT_KEY);
    let existing: string[] = raw ? JSON.parse(raw) : [];

    if (!existing.includes(s.value)) existing.push(s.value);

    // Use the shared helper
    addPreselectAndNavigate(existing);
  };

  card.addEventListener('click', handler);
  card.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      handler();
    }
  });

  return card;
}

export default function ServicesSection() {
  const gridChildren = SERVICES.map(s => makeServiceCard(s));
  return el(
    'section',
    { id: 'services', class: 'py-20 bg-gray-50' },
    el('div', { class: 'container mx-auto px-6' },
      el('div', { class: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' }, ...gridChildren)
    )
  );
}
