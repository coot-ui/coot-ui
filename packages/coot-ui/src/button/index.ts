import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ButtonType, ButtonStatus } from './type';
import { styleList } from './style';

@customElement('coot-button')
export class CootButton extends LitElement {
  @property({ type: String })
  type: ButtonType = 'default';

  @property({ type: String })
  status: ButtonStatus = 'default';

  classes = () => ({
    'wc-button': true,
    [`wc-button-type-${this.type}`]: true,
    [`wc-button-status-${this.status}`]: true,
  });

  render() {
    return html`<button class=${classMap(this.classes())}>
      <slot></slot>
    </button>`;
  }

  static styles = styleList;
}
