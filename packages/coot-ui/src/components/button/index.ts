import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import '@coot-ui/icons/loader';

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

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  loading = false;

  @property({ type: Boolean })
  loadingFixed = false;

  @property({ type: Boolean })
  long = false;

  @property({ type: String })
  icon = '';

  ns = useNamespace('button');

  classes = () => ({
    [this.ns.b()]: true,
    [this.ns.m(`type-${this.type}`)]: true,
    [this.ns.m(`size-${this.size}`)]: true,
    [this.ns.m(`status-${this.status}`)]: true,
    [this.ns.is('round')]: this.round,
    [this.ns.is('circle')]: this.circle,
    [this.ns.is('square')]: this.square,
    [this.ns.is('disabled')]: this.disabled || this.loading,
    [this.ns.is('long')]: this.long,
    [this.ns.is('loading-fixed')]:
      !this.icon && this.loading && this.loadingFixed,
  });

  renderIcon() {
    if (this.loading) {
      return html`<coot-icon-loader spin></coot-icon-loader>`;
    } else if (this.icon) {
      return html`<slot name="icon">
        ${unsafeHTML(`<coot-icon-${this.icon}></coot-icon-${this.icon}>`)}
      </slot>`;
    } else {
      return null;
    }
  }

  render() {
    return html`<button class=${classMap(this.classes())} part=${this.ns.b()}>
      ${this.renderIcon()}
      <slot></slot>
    </button>`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
}
