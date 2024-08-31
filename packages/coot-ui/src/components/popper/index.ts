import { LitElement, html, unsafeCSS, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import {
  computePosition,
  autoUpdate,
  shift,
  offset,
  flip,
  arrow,
} from '@floating-ui/dom';
import type { Placement, Strategy } from '@floating-ui/dom';
import { query } from 'lit/decorators/query.js';
import { styleMap } from 'lit/directives/style-map.js';

import { useNamespace, classString, defineElement, useZIndex } from '@/utils';

import styles from './style.scss?inline';

enum TriggerType {
  Click = 'click',
  Hover = 'hover',
  Focus = 'focus',
  ContextMenu = 'contextmenu',
}

@defineElement('coot-popper')
export class CootPopper extends LitElement {
  ns = useNamespace('popper');

  @property({ type: String })
  placement: Placement = 'top';

  @property({ type: String })
  strategy: Strategy = 'fixed';

  @property({ type: Number })
  offset = 2;

  @property({ type: Number })
  boundary = 8;

  @property({ type: String })
  background = '';

  @property({ type: String })
  color = '';

  @property({ type: Boolean })
  arrow = true;

  @property({ type: Boolean })
  visible = false;

  @property({ type: String })
  trigger: TriggerType = TriggerType.Hover;

  @query('#popper-trigger')
  _triggerElement: HTMLDivElement | undefined;

  @query('#popper-wrapper')
  _wrapperElement: HTMLDivElement | undefined;

  @query('#popper-arrow')
  _arrowElement: HTMLDivElement | undefined;

  @state()
  _visible = false;

  @state()
  _zIndex = useZIndex();

  classes = () => ({
    [this.ns.b()]: true,
  });

  arrowClasses = () => ({
    [this.ns.e('arrow')]: true,
  });

  protected firstUpdated() {
    this.computePopperPosition();
    this.appendPopperToDocument();
    this.addTriggerEvent();
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    if (changedProperties.has('visible')) {
      this.handlePropertyVisible();
    } else {
      this.computePopperPosition();
    }
  }

  addTriggerEvent() {
    this.addEventListener('mouseenter', this.handleMouseEnter);
    this.addEventListener('mouseleave', this.handleMouseLeave);
    this.addEventListener('focus', this.handleFocus);
    this.addEventListener('blur', this.handleBlur);
    this.addEventListener('click', this.handleClick);
  }

  handleMouseEnter() {
    if (this.trigger === TriggerType.Hover) {
      this.showPopper();
    }
  }

  handleMouseLeave() {
    if (this.trigger === TriggerType.Hover) {
      this.hidePopover();
    }
  }

  handleFocus() {
    if (this.trigger === TriggerType.Focus) {
      this.showPopper();
    }
  }

  handleBlur() {
    if (this.trigger === TriggerType.Focus) {
      this.hidePopover();
    }
  }

  handleClick() {
    if (this.trigger === TriggerType.Click) {
      if (this._visible) {
        this.hidePopover();
      } else {
        this.showPopper();
      }
    }
  }

  showPopper() {
    this._wrapperElement!.style.display = 'block';
    this._visible = true;
    this._zIndex = useZIndex();
    this.computePopperPosition();
  }

  hidePopover() {
    this._wrapperElement!.style.display = 'none';
    this._visible = false;
  }

  handlePropertyVisible() {
    if (this.visible) {
      this.showPopper();
    } else {
      this.hidePopover();
    }
  }

  // 将 popper 渲染到目标 container
  appendPopperToDocument() {
    const container = this._triggerElement;
    if (container instanceof HTMLElement) {
      container.appendChild(this._wrapperElement!);
    }
  }

  // 计算 popper 位置
  computePopperPosition() {
    const trigger = this._triggerElement as HTMLDivElement;
    const wrapper = this._wrapperElement! as HTMLDivElement;
    const middleware = [
      offset(this.offset + (this.arrow ? 6 : 0)),
      shift({ padding: this.boundary }),
      flip(),
    ];

    if (this.arrow) {
      middleware.push(arrow({ element: this._arrowElement! }));
    }

    autoUpdate(trigger, wrapper, () => {
      computePosition(trigger, wrapper, {
        placement: this.placement,
        strategy: this.strategy,
        middleware,
      }).then(({ x, y, strategy, middlewareData, placement }) => {
        Object.assign(wrapper.style, {
          left: `${x}px`,
          top: `${y}px`,
          position: strategy,
        });

        // 自动调整 arrow 为止
        const { x: arrowX, y: arrowY } = middlewareData.arrow!;
        const staticSide = {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right',
        }[placement.split('-')[0]]!;
        Object.assign(this._arrowElement!.style, {
          left: arrowX != null ? `${arrowX}px` : '',
          top: arrowY != null ? `${arrowY}px` : '',
          right: '',
          bottom: '',
          [staticSide]: '-4px',
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

  popperWrapperStyle() {
    return {
      zIndex: this._zIndex,
    }
  }

  render() {
    return html`<div id="popper-trigger">
      <slot @slotchange=${this.handleSlotChange}></slot>
      <div id="popper-wrapper" style=${styleMap(this.popperWrapperStyle())}>
        <div class=${classString(this.classes())} part=${this.ns.b()}>
          <slot name="content"></slot>
          <div
            id="popper-arrow"
            class=${classString(this.arrowClasses())}
            part=${this.ns.e('arrow')}
          ></div>
        </div>
      </div>
    </div>`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
}
