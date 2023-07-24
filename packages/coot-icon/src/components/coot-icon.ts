import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';

@customElement('coot-icon')
export class CootIcon extends LitElement {
  @property({ type: String })
  size: string = '1rem';

  @property({ type: String })
  color: string = 'rgba(0,0,0,0.85)';

  @property({ attribute: false })
  iconStyle = {};

  static styles = css`
    coot-button {
      display: flex;
      align-item: center;
    }
  `;

  render() {
    const style = styleMap({
      width: `${this.size}`,
      height: `${this.size}`,
      color: this.color,
      display: 'inline-flex',
      alignItems: 'center',
    });

    return html`<div style="${style}">
      <slot></slot>
    </div>`;
  }
}
