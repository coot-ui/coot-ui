import { LitElement, html, unsafeCSS, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import {
  computePosition,
  autoUpdate,
  shift,
  offset,
  flip,
} from '@floating-ui/dom';
import type { Placement, Strategy } from '@floating-ui/dom';
import { query } from 'lit/decorators/query.js';

import { useNamespace, classString, defineElement, uniqueId } from '@/utils';

import styles from './style.scss?inline';

@defineElement('coot-popper')
export class CootPopper extends LitElement {
  ns = useNamespace('popper');

  @state()
  uniqueId = uniqueId('coot-popper-');

  @property({ type: String })
  placement: Placement = 'top';

  @property({ type: String })
  strategy: Strategy = 'fixed';

  @property({ type: Number })
  offset = 2;

  @property({ type: Number })
  boundary = 8;

  @property()
  appendTo: HTMLElement | string = 'body';

  @query('#trigger')
  _trigger: HTMLDivElement | undefined;

  @query('#coot-popper-content')
  content: HTMLDivElement | undefined;

  classes = () => ({
    [this.ns.b()]: true,
  });

  protected firstUpdated() {
    this.computePopperPosition();
    this.appendPopperToDocument();
  }

  // 将 popper 渲染到目标 container
  appendPopperToDocument() {
    const container =
      typeof this.appendTo === 'string'
        ? document.querySelector(this.appendTo)
        : this.appendTo;
    if (container instanceof HTMLElement) {
      const content = this.content as HTMLDivElement;
      container.appendChild(content);
    }
  }

  // 计算 popper 位置
  computePopperPosition() {
    const trigger = this._trigger as HTMLDivElement;
    const content = this.content as HTMLDivElement;
    autoUpdate(trigger, content, () => {
      computePosition(trigger, content, {
        placement: this.placement,
        strategy: this.strategy,
        middleware: [
          offset(this.offset),
          shift({ padding: this.boundary }),
          flip(),
        ],
      }).then(({ x, y, strategy }) => {
        Object.assign(content.style, {
          left: `${x}px`,
          top: `${y}px`,
          position: strategy,
        });
      });
    });
  }

  handleSlotChange() {
    // const slot = event.target;
    // const assignedNodes = slot.assignedNodes({ flatten: true });
    // assignedNodes.forEach((node: CootButton) => {
    //   if (node.tagName === 'COOT-BUTTON') {
    //     node.size = this.size;
    //   }
    // });
  }

  render() {
    return html`<div
      id="trigger"
      class=${classString(this.classes())}
      part=${this.ns.b()}
    >
      <slot @slotchange=${this.handleSlotChange}></slot>
      <div id="coot-popper-content">
        <slot name="content">tooltip</slot>
      </div>
    </div>`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
}
