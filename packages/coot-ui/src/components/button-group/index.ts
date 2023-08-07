import { LitElement, html, unsafeCSS, css } from 'lit';

import { useNamespace, classString, defineElement } from '@/utils';

import styles from './style.scss?inline';

@defineElement('coot-button-group')
export class CootButtonGroup extends LitElement {
  ns = useNamespace('button-group');

  classes = () => ({
    [this.ns.b()]: true,
  });
  render() {
    return html`<div class=${classString(this.classes())} part=${this.ns.b()}>
      <slot></slot>
    </div>`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
}
