import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from '../style.scss?inline';

@customElement('coot-icon-corner-up-left')
export class CootIconCornerUpLeft extends LitElement {
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
        <polyline points="9 14 4 9 9 4" />
        <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
      </svg>
       `;
  }
}
