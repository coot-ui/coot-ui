import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('coot-icon-battery-charging')
export class CootIconBatteryCharging extends LitElement {

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
    }
  `;

  render() {
    return html`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
        <line x1="23" y1="13" x2="23" y2="11" />
        <polyline points="11 6 7 12 13 12 9 18" />
      </svg>
       `;
  }
}
