import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('coot-icon-bluetooth')
export class CootIconBluetooth extends LitElement {

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
        <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
      </svg>
       `;
  }
}
