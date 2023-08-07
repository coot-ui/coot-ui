export function defineElement(name: string) {
  return function (Component: any) {
    if (!customElements.get(name)) {
      customElements.define(name, Component);
    }
  };
}
