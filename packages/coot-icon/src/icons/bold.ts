import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from '../style.scss?inline';
import { defineElement } from '../utils';

@defineElement('coot-icon-bold')
export class CootIconBold extends LitElement {
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
        <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
        <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
      </svg>
       `;
  }
}
