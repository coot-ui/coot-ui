import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('coot-icon-toggle-left')
export class CootIconToggleLeft extends LitElement {
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
        <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
        <circle cx="8" cy="12" r="3" />
      </svg>
       `;
  }
}
