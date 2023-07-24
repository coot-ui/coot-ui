import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CootIcon } from '../components/coot-icon';

@customElement('coot-icon-bluetooth')
export class CootIconBluetooth extends CootIcon {
  render() {
    return html`<coot-icon size=${this.size} color=${this.color}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
      </svg>
    </coot-icon>`;
  }
}
