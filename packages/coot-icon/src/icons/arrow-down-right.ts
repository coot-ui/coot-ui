import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CootIcon } from '../components/coot-icon';

@customElement('coot-icon-arrow-down-right')
export class CootIconArrowDownRight extends CootIcon {
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
        <line x1="7" y1="7" x2="17" y2="17" />
        <polyline points="17 7 17 17 7 17" />
      </svg>
    </coot-icon>`;
  }
}
