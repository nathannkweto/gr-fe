import { el } from '../utils/dom';
import { navigate } from '../router';

export default function Header() {
  const header = el('header', { class: 'bg-white shadow z-50' },
    el('div', { class: 'container-max relative z-10 flex items-center justify-between py-4' },
      el('a', { href: '/', class: 'text-xl font-bold' }, 'Golden Recruiter'),
      el('nav', { class: 'space-x-4' },
        el('a', { href: '/about', class: 'hover:underline transition' }, 'About'),
        el('a', { href: '/services', class: 'hover:underline transition' }, 'Services'),
        el('a', { href: '/quote', class: 'hover:underline transition' }, 'Get Quote'),
        el('a', { href: '/contact', class: 'hover:underline transition' }, 'Contact'),
      )
    )
  );

  // enable logo click with client navigation (progressive)
  header.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (ev) => {
      const href = (a as HTMLAnchorElement).getAttribute('href') || '/';
      if (href.startsWith('http') || a.getAttribute('target') === '_blank') return;
      ev.preventDefault();
      navigate(href);
    });
  });

  return header;
}
