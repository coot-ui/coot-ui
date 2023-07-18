import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';

@customElement('coot-icon')
export class CootIcon extends LitElement {
  @property({ type: Number })
  size: number = 24;

  @property({ type: String })
  color: string = 'var(--color-text-primary)';

  @property({ attribute: false })
  styles = { bs: 11 };

  render() {
    console.log(this.styles);
    const style = styleMap({
      width: `${this.size}px`,
      height: `${this.size}px`,
      color: this.color,
    });

    return html`<div style="${style}">
      <slot></slot>
    </div>`;
  }
}
