import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CootIcon } from '../components/coot-icon';

@customElement('coot-icon-zap-off')
export class CootIconZapOff extends CootIcon {
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
        <polyline points="12.41 6.75 13 2 10.57 4.92" />
        <polyline points="18.57 12.91 21 10 15.66 10" />
        <polyline points="8 8 3 14 12 14 11 22 16 16" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    </coot-icon>`;
  }
}
