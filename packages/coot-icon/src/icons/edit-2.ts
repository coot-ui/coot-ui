import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CootIcon } from '../components/coot-icon';

@customElement('coot-icon-edit-2')
export class CootIconEdit2 extends CootIcon {
  render() {
    return html`<coot-icon size=${this.size} color=${this.color}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    </coot-icon>`;
  }
}
