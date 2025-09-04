export function el(
  tag = 'div',
  attrs: Record<string, any> = {},
  ...children: (string | Node)[]
) {
  const node = document.createElement(tag);

  Object.entries(attrs).forEach(([k, v]) => {
    if (k.startsWith('on') && typeof v === 'function') {
      // e.g. onclick → click
      node.addEventListener(k.slice(2).toLowerCase(), v);
    } else if (k === 'className') {
      node.className = v;
    } else {
      node.setAttribute(k, String(v));
    }
  });

  children.forEach(child => {
    if (typeof child === 'string') {
      node.appendChild(document.createTextNode(child));
    } else {
      node.appendChild(child);
    }
  });

  return node;
}
