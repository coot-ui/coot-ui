import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { useNamespace, classString } from '@/utils';

import styles from './style.scss?inline';

@customElement('coot-button-group')
export class CootButton extends LitElement {
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
