import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CootIcon } from '../components/coot-icon';

@customElement('coot-icon-crop')
export class CootIconCrop extends CootIcon {
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
        <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
        <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
      </svg>
    </coot-icon>`;
  }
}
