import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CootIcon } from '../components/coot-icon';

@customElement('coot-icon-corner-right-down')
export class CootIconCornerRightDown extends CootIcon {
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
        <polyline points="10 15 15 20 20 15" />
        <path d="M4 4h7a4 4 0 0 1 4 4v12" />
      </svg>
    </coot-icon>`;
  }
}
