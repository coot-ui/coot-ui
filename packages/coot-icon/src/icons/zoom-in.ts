import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('coot-icon-zoom-in')
export class CootIconZoomIn extends LitElement {
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
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
       `;
  }
}
