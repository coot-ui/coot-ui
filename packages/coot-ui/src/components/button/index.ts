import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { useNamespace } from '../../utils';
import type { ComponentSize } from '../../constant';

import styles from './style.scss?inline';

import { ButtonType, ButtonStatus } from './type';

@customElement('coot-button')
export class CootButton extends LitElement {
  @property({ type: String })
  type: ButtonType = 'default';

  @property({ type: String })
  status: ButtonStatus = 'primary';

  @property({ type: String })
  size: ComponentSize = 'default';

  @property({ type: Boolean })
  round = false;

  @property({ type: Boolean })
  circle = false;

  @property({ type: Boolean })
  square = false;

  ns = useNamespace('button');

  classes = () => ({
    [this.ns.b()]: true,
    [this.ns.m(`type-${this.type}`)]: true,
    [this.ns.m(`size-${this.size}`)]: true,
    [this.ns.m(`status-${this.status}`)]: true,
    [this.ns.is('round')]: this.round,
    [this.ns.is('circle')]: this.circle,
    [this.ns.is('square')]: this.square,
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
