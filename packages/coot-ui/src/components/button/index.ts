import { LitElement, html, unsafeCSS, css } from 'lit';
import { property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import '@coot-ui/icons/spin';

import { useNamespace, classString, defineElement } from '@/utils';

import styles from './style.scss?inline';

import { ButtonType, ButtonStatus, ButtonSize } from './type';
import '../ripple';

@defineElement('coot-button')
export class CootButton extends LitElement {
  @property({ type: String })
  type: ButtonType = 'default';

  @property({ type: String })
  status: ButtonStatus = 'primary';

  @property({ type: String })
  size: ButtonSize = 'default';

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
      return html`<coot-icon-spin spin></coot-icon-spin>`;
    } else if (this.icon) {
      return html`<slot name="icon">
        ${unsafeHTML(`<coot-icon-${this.icon}></coot-icon-${this.icon}>`)}
      </slot>`;
    } else {
      return null;
    }
  }

  renderRipple() {
    if (this.type === 'link' || this.loading || this.disabled) {
      return null;
    }
    return html`<coot-ripple style="margin-left: -4px;"></coot-ripple>`;
  }

  renderButton() {
    return html`<button
      class=${classString(this.classes())}
      part=${classString(this.classes())}
    >
      ${this.renderIcon()}
      <slot></slot>
    </button>`;
  }

  render() {
    if (this.type === 'link' || this.loading || this.disabled) {
      return this.renderButton();
    }
    return html`<coot-ripple>${this.renderButton()}</coot-ripple>`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
}
