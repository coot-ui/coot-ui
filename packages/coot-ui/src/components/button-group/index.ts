import { LitElement, html, unsafeCSS, css } from 'lit';
import { property } from 'lit/decorators.js';

import { useNamespace, classString, defineElement } from '@/utils';
import { ButtonSize } from '../button/type';

import styles from './style.scss?inline';

@defineElement('coot-button-group')
export class CootButtonGroup extends LitElement {
  ns = useNamespace('button-group');

  @property({ type: String })
  size: ButtonSize = 'default';

  classes = () => ({
    [this.ns.b()]: true,
  });

  handleSlotChange(e) {
    console.log(e);
  }

  render() {
    return html`<div class=${classString(this.classes())} part=${this.ns.b()}>
      <slot @slotchange=${this.handleSlotChange}></slot>
    </div>`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
}
