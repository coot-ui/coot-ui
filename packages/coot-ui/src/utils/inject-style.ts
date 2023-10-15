export function injectStyle(
  content: string,
  identifier: string,
  target?: string | HTMLElement
) {
  if (typeof target === 'string') {
    target = document.querySelector(target) as HTMLElement;
  }
  if (!target) {
    target = document.body;
  }
  const identifierAttribute = 'coot-style-identifier';
  if (target.querySelector(`style[${identifierAttribute}="${identifier}"]`)) {
    return;
  } else {
    const style = document.createElement('style');
    style.setAttribute(identifierAttribute, identifier);
    style.innerHTML = content;
    target.appendChild(style);
  }
}
