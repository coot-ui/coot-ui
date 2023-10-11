import { LitElement, html, unsafeCSS, css } from 'lit';
import { property } from 'lit/decorators.js';

import { useNamespace, classString, defineElement, injectStyle } from '@/utils';
import { ButtonSize } from '../button/type';
import { CootButton } from '../button';

import styles from './style.scss?inline';

import ButtonGroupStyle from '@/style/components/button-group.scss?inline';
injectStyle(ButtonGroupStyle, '@/style/components/button-group.scss');

@defineElement('coot-button-group')
export class CootButtonGroup extends LitElement {
  ns = useNamespace('button-group');

  @property({ type: String })
  size: ButtonSize = 'default';

  classes = () => ({
    [this.ns.b()]: true,
  });

  handleSlotChange(event: any) {
    const slot = event.target;
    const assignedNodes = slot.assignedNodes({ flatten: true });

    assignedNodes.forEach((node: CootButton) => {
      if (node.tagName === 'COOT-BUTTON') {
        node.size = this.size;
      }
    });
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
