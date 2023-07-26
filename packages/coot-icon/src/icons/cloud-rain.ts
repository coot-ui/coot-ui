import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('coot-icon-cloud-rain')
export class CootIconCloudRain extends LitElement {
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
        <line x1="16" y1="13" x2="16" y2="21" />
        <line x1="8" y1="13" x2="8" y2="21" />
        <line x1="12" y1="15" x2="12" y2="23" />
        <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
      </svg>
       `;
  }
}
