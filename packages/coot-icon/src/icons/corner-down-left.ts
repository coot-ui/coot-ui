import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from '../style.scss?inline';

@customElement('coot-icon-corner-down-left')
export class CootIconCornerDownLeft extends LitElement {
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
        <polyline points="9 10 4 15 9 20" />
        <path d="M20 4v7a4 4 0 0 1-4 4H4" />
      </svg>
       `;
  }
}
