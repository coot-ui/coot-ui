export function injectStyle(content: string, identifier: string) {
  const identifierAttribute = 'coot-style-identifier';
  if (document.querySelector(`style[${identifierAttribute}="${identifier}"]`)) {
    return;
  } else {
    const style = document.createElement('style');
    style.setAttribute(identifierAttribute, identifier);
    style.innerHTML = content;
    document.body.appendChild(style);
  }
}
