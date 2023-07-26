import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('coot-icon-corner-right-up')
export class CootIconCornerRightUp extends LitElement {
  @property({ type: Boolean })
  spin = false;

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
    }
    @keyframes cootIconRotate {
      100% {
        transform: rotate(360deg);
      }
    }
    svg[spin] {
      animation: cootIconRotate 1.6s linear infinite;
    }
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
        <polyline points="10 9 15 4 20 9" />
        <path d="M4 20h7a4 4 0 0 0 4-4V4" />
      </svg>
       `;
  }
}
