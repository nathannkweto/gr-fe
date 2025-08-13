// src/components/Header.ts
import { el } from '../utils/dom';
import { navigate } from '../router';

type NavLink = { href: string; label: string };

export default function Header(): HTMLElement {
  // logo image
  const logoImg = el('img', {
    src: '/images/logo.svg',
    alt: 'Golden Force Logo',
    class: 'h-10 mr-2 hover:text-secondary',
  }) as HTMLImageElement;

  const logoLink = el('a', {
    href: '/',
    class: 'flex items-center text-xl font-bold text-primary hover:text-secondary transition-colors',
  }, logoImg, 'Golden Force') as HTMLAnchorElement;

  const links: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/quote', label: 'Get Quote' },
    { href: '/contact', label: 'Contact' },
  ];

  // desktop nav (hidden on small screens with Tailwind classes)
  const desktopNav = el('nav', { class: 'hidden md:flex space-x-4' },
    ...links.map(l => el('a', {
      href: l.href,
      class: 'text-white hover:text-primary transition-colors',
    }, l.label))
  ) as HTMLElement;

  // mobile hamburger button
  const menuButton = el('button', {
    type: 'button',
    'aria-label': 'Toggle menu',
    'aria-expanded': 'false',
    class: 'md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary focus:outline-none focus:ring-none',
  },
    el('i', { class: 'ri-menu-3-line text-2xl focus' }
    )
  ) as HTMLButtonElement;

  // mobile menu (hidden by default)
  const mobileMenu = el('div', {
    class: 'absolute right-0 mt-2 w-48 bg-gray-900 shadow-lg md:hidden hidden z-50',
    role: 'menu',
    'aria-hidden': 'true'
  },
    el('div', { class: 'py-1' },
      ...links.map(l => el('a', {
        href: l.href,
        role: 'menuitem',
        class: 'block px-4 py-2 text-sm text-white hover:text-primary hover:bg-gray-800 transition-colors',
      }, l.label))
    )
  ) as HTMLElement;

  const header = el('header', { class: 'bg-gray-900 shadow z-50' },
    el('div', { class: 'container-max relative z-100 flex items-center justify-between py-2' },
      logoLink,
      el('div', { class: 'relative' }, desktopNav, menuButton, mobileMenu)
    )
  ) as HTMLElement;

  // state
  let menuOpen = false;

  function setMenuOpen(isOpen: boolean): void {
    menuOpen = isOpen;
    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.setAttribute('aria-hidden', 'false');
      menuButton.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.setAttribute('aria-hidden', 'true');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleMenu(ev?: MouseEvent): void {
    ev?.preventDefault();
    setMenuOpen(!menuOpen);
  }

  // wire button
  menuButton.addEventListener('click', (ev: MouseEvent) => toggleMenu(ev));

  // click outside to close
  document.addEventListener('click', (ev: MouseEvent) => {
    if (!menuOpen) return;
    const target = ev.target as Node | null;
    if (!target) return;
    // if click inside button or menu, ignore
    if (menuButton.contains(target) || mobileMenu.contains(target)) return;
    setMenuOpen(false);
  });

  // close on escape
  document.addEventListener('keydown', (ev: KeyboardEvent) => {
    if (!menuOpen) return;
    if (ev.key === 'Escape' || ev.key === 'Esc') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  // navigation wiring: only intercept internal links
  const anchors = header.querySelectorAll<HTMLAnchorElement>('a');
  anchors.forEach((a) => {
    a.addEventListener('click', (ev: MouseEvent) => {
      const href = a.getAttribute('href') ?? '/';
      // external or explicit target=_blank -> allow default
      if (href.startsWith('http') || a.getAttribute('target') === '_blank') return;
      ev.preventDefault();
      // close mobile menu if open
      if (menuOpen) setMenuOpen(false);
      // use SPA navigation
      navigate(href);
    });
  });

  // ensure closed initial state
  setMenuOpen(false);

  return header;
}
