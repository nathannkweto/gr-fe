import { el } from '../utils/dom';

const services = [
  { title: 'Permanent Recruitment', desc: 'Senior to junior hires for long-term roles.' },
  { title: 'Contract Staffing', desc: 'Short-term and project-based placements.' },
  { title: 'Managed Outsourcing', desc: 'Dedicated teams working on your projects.' },
];

export default function Services() {
  const hero = el('div', { class: 'header-image bg-[url("/images/services-hero.jpg")] text-white' },
    el('div', { class: 'bg-black/40 p-6 rounded' },
      el('h1', { class: 'text-3xl font-bold' }, 'Our Services'),
      el('p', { class: 'mt-2' }, 'Solutions tailored to your hiring needs.')
    )
  );

  const list = el('section', { class: 'mt-8 grid md:grid-cols-3 gap-6' },
    ...services.map(s => el('div', { class: 'p-6 bg-white rounded shadow' },
      el('h3', { class: 'font-semibold text-lg' }, s.title),
      el('p', { class: 'mt-2' }, s.desc)
    ))
  );

  return el('div', {}, hero, list);
}
