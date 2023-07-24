import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CootIcon } from '../components/coot-icon';

@customElement('coot-icon-voicemail')
export class CootIconVoicemail extends CootIcon {
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
        <circle cx="5.5" cy="11.5" r="4.5" />
        <circle cx="18.5" cy="11.5" r="4.5" />
        <line x1="5.5" y1="16" x2="18.5" y2="16" />
      </svg>
    </coot-icon>`;
  }
}
