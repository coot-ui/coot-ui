import { LitElement, html, unsafeCSS, css } from 'lit';
import { property } from 'lit/decorators.js';
import { query } from 'lit/decorators/query.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import '@coot-ui/icons/spin';

import { useNamespace, classString, defineElement, CootRipple } from '@/utils';

import styles from './style.scss?inline';

import { ButtonType, ButtonStatus, ButtonSize } from './type';

@defineElement('coot-button')
export class CootButton extends LitElement {
  @property({ type: String })
  type: ButtonType = ButtonType.Default;

  @property({ type: String })
  status: ButtonStatus = ButtonStatus.Primary;

  @property({ type: String })
  size: ButtonSize = ButtonSize.Default;

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

  @query('#ripple-effect-dom')
  buttomDOM: HTMLButtonElement | undefined;

  ns = useNamespace('button');
  ripple = new CootRipple();

  firstUpdated(): void {
    this.ripple.init(this.buttomDOM as HTMLButtonElement);
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    if (changedProperties.has('long')) {
      this.handlePropertyLong();
    }
  }

  handlePropertyLong() {
    if (this.long) {
      this.style.width = '100%';
    } else {
      this.style.width = 'auto';
    }
  }

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

  validateClickable(e: Event) {
    if (this.loading || this.disabled) {
      e.stopPropagation();
    }
  }

  renderButtonWithRipple() {
    return html`<button
      id="ripple-effect-dom"
      class=${classString(this.classes())}
      part=${classString(this.classes())}
      @click="${this.validateClickable}"
    >
      ${this.renderIcon()}
      <slot></slot>
    </button>`;
  }

  renderButton() {
    return html`<button
      class=${classString(this.classes())}
      part=${classString(this.classes())}
      @click="${this.validateClickable}"
    >
      ${this.renderIcon()}
      <slot></slot>
    </button>`;
  }

  render() {
    if (this.type === 'link' || this.loading || this.disabled) {
      return this.renderButton();
    }
    return html`${this.renderButtonWithRipple()}`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
}
