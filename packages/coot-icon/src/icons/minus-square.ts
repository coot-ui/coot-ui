import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from '../style.scss?inline';
import { defineElement } from '../utils';

@defineElement('coot-icon-minus-square')
export class CootIconMinusSquare extends LitElement {
  @property({ type: Boolean })
  spin = false;

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`<svg
        xmlns="http://www.w3.org/2000/svg"
        ?spin=${this.spin}
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
       `;
  }
}
