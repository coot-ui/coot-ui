import globalStyle from '@/style/index.scss?inline';
import { injectStyle } from './inject-style';

injectStyle(globalStyle, 'global');

export function defineElement(name: string) {
  return function (Component: any) {
    if (!customElements.get(name)) {
      customElements.define(name, Component);
    }
  };
}
