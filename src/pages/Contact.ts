import { el } from '../utils/dom';
import { api } from '../api';

export default function Contact() {
  const form = document.createElement('form');
  form.className = 'grid gap-4 max-w-xl bg-white p-6 rounded shadow';

  const fullname = Object.assign(document.createElement('input'), { type: 'text', name: 'fullname', placeholder: 'Full name', required: true, className: 'border p-2 rounded' });
  const email = Object.assign(document.createElement('input'), { type: 'email', name: 'email', placeholder: 'Email address', required: true, className: 'border p-2 rounded' });
  const company = Object.assign(document.createElement('input'), { type: 'text', name: 'company', placeholder: 'Company', className: 'border p-2 rounded' });
  const message = Object.assign(document.createElement('textarea'), { name: 'message', placeholder: 'Message', rows: 6, className: 'border p-2 rounded' });

  const submit = Object.assign(document.createElement('button'), { type: 'submit', className: 'bg-blue-600 text-white py-2 px-4 rounded', innerText: 'Send message' });

  form.append(fullname, email, company, message, submit);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submit.setAttribute('disabled','true');
    try {
      await api.contactMessage({
        fullname: (fullname as HTMLInputElement).value,
        email: (email as HTMLInputElement).value,
        company: (company as HTMLInputElement).value,
        message: (message as HTMLTextAreaElement).value,
      });
      alert('Message sent — thank you!');
      form.reset();
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Try again later.');
    } finally {
      submit.removeAttribute('disabled');
    }
  });

  const contactDetails = el('div', { class: 'bg-white p-6 rounded shadow' },
    el('h3', { class: 'text-lg font-semibold' }, 'Contact Details'),
    el('p', {}, 'Email: contact@goldenrecruiter.example'),
    el('p', {}, 'Phone: +1 555 555 5555'),
    el('p', {}, 'Address: 123 Talent Blvd, City, Country')
  );

  return el('div', { class: 'grid md:grid-cols-2 gap-6' }, form, contactDetails);
}
