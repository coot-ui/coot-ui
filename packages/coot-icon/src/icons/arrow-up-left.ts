import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CootIcon } from '../components/coot-icon';

@customElement('coot-icon-arrow-up-left')
export class CootIconArrowUpLeft extends CootIcon {
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
        <line x1="17" y1="17" x2="7" y2="7" />
        <polyline points="7 17 7 7 17 7" />
      </svg>
    </coot-icon>`;
  }
}
