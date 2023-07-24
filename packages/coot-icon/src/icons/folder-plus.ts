import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CootIcon } from '../components/coot-icon';

@customElement('coot-icon-folder-plus')
export class CootIconFolderPlus extends CootIcon {
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
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    </coot-icon>`;
  }
}
