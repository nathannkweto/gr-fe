import type { RouteHandler } from './types';

const routes: Record<string, RouteHandler> = {};

// register route
export function register(path: string, handler: RouteHandler) {
  routes[path] = handler;
}

export function navigate(to: string, replace = false) {
  if (replace) history.replaceState({}, '', to);
  else history.pushState({}, '', to);
  renderRoute();
}

export async function renderRoute() {
  const path = window.location.pathname || '/';
  const handler = routes[path] || routes['/404'] || (() => {
    const el = document.createElement('div');
    el.innerHTML = `<h2 class="text-2xl font-bold">Page not found</h2>`;
    return el;
  });
  const content = await handler();
  const main = document.querySelector('#main-content') as HTMLElement;
  if (!main) throw new Error('#main-content missing');
  main.innerHTML = '';
  main.appendChild(content);
}

// handle back/forward
window.addEventListener('popstate', () => renderRoute());

// intercept internal link clicks
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest('a');
  if (!a) return;
  const href = a.getAttribute('href');
  const target = a.getAttribute('target');
  if (!href || href.startsWith('http') || target === '_blank' || a.hasAttribute('data-external')) return;
  e.preventDefault();
  navigate(href);
});
