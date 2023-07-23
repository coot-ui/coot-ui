import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { useNamespace } from '../../utils';

import styles from './style.less?inline';

import { ButtonType, ButtonStatus } from './type';

@customElement('coot-button')
export class CootButton extends LitElement {
  @property({ type: String })
  type: ButtonType = 'default';

  @property({ type: String })
  status: ButtonStatus = 'primary';

  ns = useNamespace('button');

  classes = () => ({
    [this.ns.b()]: true,
    [this.ns.m(`type-${this.type}`)]: true,
    [this.ns.m(`status-${this.status}`)]: true,
  });

  render() {
    return html`<button class=${classMap(this.classes())} part=${this.ns.b()}>
      <slot></slot>
    </button>`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
}
