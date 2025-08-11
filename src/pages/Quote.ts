import { el } from '../utils/dom';
import { api } from '../api';
import type { QuoteFormData } from '../types';

export default function Quote() {
  let state: QuoteFormData = {};
  let step = 1;

  const container = el('div', { class: 'max-w-2xl' });

  const progress = el('div', { class: 'mb-4' }, el('p', {}, 'Step: ', String(step), '/3'));

  function renderStep() {
    const stepContainer = document.createElement('div');
    stepContainer.className = 'bg-white p-6 rounded shadow';

    if (step === 1) {
      const fullname = Object.assign(document.createElement('input'), { placeholder: 'Full name', className: 'border p-2 w-full rounded mb-3' });
      const email = Object.assign(document.createElement('input'), { placeholder: 'Email', className: 'border p-2 w-full rounded mb-3' });
      const company = Object.assign(document.createElement('input'), { placeholder: 'Company', className: 'border p-2 w-full rounded mb-3' });

      fullname.value = state.fullname || '';
      email.value = state.email || '';
      company.value = state.company || '';

      stepContainer.append(fullname, email, company);

      const next = Object.assign(document.createElement('button'), { className: 'mt-3 bg-blue-600 text-white py-2 px-4 rounded', innerText: 'Next' });
      next.addEventListener('click', () => {
        state.fullname = fullname.value;
        state.email = email.value;
        state.company = company.value;
        step = 2;
        rerender();
      });
      stepContainer.append(next);
    } else if (step === 2) {
      const serviceField = Object.assign(document.createElement('select'), { multiple: true, className: 'border p-2 w-full rounded mb-3' });
      ['Recruitment','Outsourcing','Staffing','Consulting'].forEach(s => {
        const o = document.createElement('option');
        o.value = s;
        o.innerText = s;
        if (state.services?.includes(s)) o.selected = true;
        serviceField.appendChild(o);
      });

      const details = Object.assign(document.createElement('textarea'), { placeholder: 'Project / requirement details', rows: 5, className: 'border p-2 w-full rounded mb-3' });
      details.value = state.details || '';

      const back = Object.assign(document.createElement('button'), { className: 'mr-2 py-2 px-3', innerText: 'Back' });
      back.addEventListener('click', () => { step = 1; rerender(); });

      const next = Object.assign(document.createElement('button'), { className: 'bg-blue-600 text-white py-2 px-4 rounded', innerText: 'Next' });
      next.addEventListener('click', () => {
        state.services = Array.from(serviceField.selectedOptions).map(o => o.value);
        state.details = details.value;
        step = 3;
        rerender();
      });

      stepContainer.append(serviceField, details, el('div', {}, back, next));
    } else {
      // step 3: budget & submit
      const budget = Object.assign(document.createElement('input'), { placeholder: 'Budget (optional)', className: 'border p-2 w-full rounded mb-3' });
      budget.value = state.budget || '';

      const back = Object.assign(document.createElement('button'), { className: 'mr-2 py-2 px-3', innerText: 'Back' });
      back.addEventListener('click', () => { step = 2; rerender(); });

      const submit = Object.assign(document.createElement('button'), { className: 'bg-green-600 text-white py-2 px-4 rounded', innerText: 'Request Quote' });

      submit.addEventListener('click', async () => {
        state.budget = budget.value;
        submit.setAttribute('disabled','true');
        try {
          await api.postQuote(state);
          alert('Quote request sent. We will contact you.');
          // reset
          state = {};
          step = 1;
          rerender();
        } catch (err) {
          console.error(err);
          alert('Failed to send quote request.');
        } finally {
          submit.removeAttribute('disabled');
        }
      });

      stepContainer.append(budget, el('div', {}, back, submit));
    }

    return stepContainer;
  }

  function rerender() {
    container.innerHTML = '';
    progress.innerHTML = `Step: ${step} / 3`;
    container.append(progress, renderStep());
  }

  rerender();
  return container;
}
