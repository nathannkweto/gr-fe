import { el } from '../utils/dom';
import { navigate } from '../router';

export default function Header() {
  // Assuming the path to your SVG logo is '/images/logo.svg'
  const logoImg = el('img', {
    src: '/images/logo.svg',
    alt: 'Golden Force Logo',
    class: 'h-10 mr-2', // adjust size & spacing as needed
  });

  const logoLink = el('a', {
    href: '/',
    class: 'flex items-center text-xl font-bold',
  }, logoImg, 'Golden Force');

  const header = el('header', { class: 'bg-white shadow z-50' },
    el('div', { class: 'container-max relative z-10 flex items-center justify-between py-2' },
      logoLink,
      el('nav', { class: 'space-x-4' },
        el('a', { href: '/about', class: 'hover:underline transition' }, 'About'),
        el('a', { href: '/services', class: 'hover:underline transition' }, 'Services'),
        el('a', { href: '/quote', class: 'hover:underline transition' }, 'Get Quote'),
        el('a', { href: '/contact', class: 'hover:underline transition' }, 'Contact'),
      )
    )
  );

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
