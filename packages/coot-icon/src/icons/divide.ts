import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CootIcon } from '../components/coot-icon';

@customElement('coot-icon-divide')
export class CootIconDivide extends CootIcon {
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
        <circle cx="12" cy="6" r="2" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <circle cx="12" cy="18" r="2" />
      </svg>
    </coot-icon>`;
  }
}
