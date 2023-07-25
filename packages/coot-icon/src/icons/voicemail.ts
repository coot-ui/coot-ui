import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('coot-icon-voicemail')
export class CootIconVoicemail extends LitElement {

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
    }
  `;

  render() {
    return html`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="5.5" cy="11.5" r="4.5" />
        <circle cx="18.5" cy="11.5" r="4.5" />
        <line x1="5.5" y1="16" x2="18.5" y2="16" />
      </svg>
       `;
  }
}
