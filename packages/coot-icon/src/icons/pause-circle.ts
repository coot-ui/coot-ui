import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('coot-icon-pause-circle')
export class CootIconPauseCircle extends LitElement {

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
        <circle cx="12" cy="12" r="10" />
        <line x1="10" y1="15" x2="10" y2="9" />
        <line x1="14" y1="15" x2="14" y2="9" />
      </svg>
       `;
  }
}
