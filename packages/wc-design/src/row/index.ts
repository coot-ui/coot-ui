import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('wc-row')
export class WcButton extends LitElement {
  classes = () => ({
    'wc-row': true,
  });

  render() {
    return html`<div class=${classMap(this.classes())}>
      <slot></slot>
    </div>`;
  }

  static styles = [
    // basic
    css`
      .wc-row {
        width: 100%;
      }
    `,
  ];
}
