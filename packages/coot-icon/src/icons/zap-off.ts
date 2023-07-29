import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from '../style.scss?inline';

@customElement('coot-icon-zap-off')
export class CootIconZapOff extends LitElement {
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
        <polyline points="12.41 6.75 13 2 10.57 4.92" />
        <polyline points="18.57 12.91 21 10 15.66 10" />
        <polyline points="8 8 3 14 12 14 11 22 16 16" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
       `;
  }
}