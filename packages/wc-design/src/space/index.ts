import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { SpaceSize } from './type';

@customElement('wc-space')
export class WcButton extends LitElement {
  @property({ type: String })
  size: SpaceSize = 'small';

  render() {
    const classes = {
      'wc-space': true,
      [`wc-space-size-${this.size}`]: true,
    };

    return html`<div class=${classMap(classes)}>
      <slot></slot>
    </div>`;
  }

  static styles = [
    // basic
    css`
      .wc-space {
        display: flex;
        gap: 8px;
      }
      .wc-space-size-mini {
        gap: 4px;
      }
      .wc-space-size-mini {
        gap: 16px;
      }
      .wc-space-size-mini {
        gap: 24px;
      }
    `,
  ];
}
