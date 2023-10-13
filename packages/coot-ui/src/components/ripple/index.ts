import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';

import { useNamespace, defineElement, injectStyle } from '@/utils';

import rippleStyle from '@/style/components/ripple.scss?inline';
injectStyle(rippleStyle, '@/style/components/ripple.scss');

const rippleEventAttr = 'coot-ripple-event';

@defineElement('coot-ripple')
export class CootButtonGroup extends LitElement {
  ns = useNamespace('ripple');

  @state()
  _ripple: HTMLDivElement | undefined;

  rippleInit(holder: HTMLElement) {
    const parentPosition = window
      .getComputedStyle(holder)
      .getPropertyValue('position');
    if (parentPosition === 'static') {
      holder.style.position = 'relative';
    }
    holder.addEventListener(
      'mousedown',
      (event) => {
        this.startRipple('mousedown', event as MouseEvent, holder);
      },
      { passive: true }
    );
    holder.addEventListener(
      'touchstart',
      (event) => {
        const changedTouches = (event as TouchEvent).changedTouches;
        for (let i = 0; i < changedTouches.length; ++i) {
          this.startRipple(
            'touchstart',
            changedTouches[i] as unknown as MouseEvent,
            holder
          );
        }
      },
      { passive: true }
    );
  }

  startRipple(
    eventType: 'mousedown' | 'touchstart',
    event: MouseEvent,
    holder: HTMLElement
  ) {
    if (!this._ripple) {
      this._ripple = document.createElement('div') as HTMLDivElement;
      this._ripple.setAttribute('part', this.ns.b());
      holder.appendChild(this._ripple);
    }

    // Store the event use to generate this ripple on the holder: don't allow
    // further events of different types until we're done. Prevents double-
    // ripples from mousedown/touchstart.
    const previousEvent = this._ripple.getAttribute(rippleEventAttr);
    if (previousEvent && previousEvent !== eventType) {
      return;
    }
    this._ripple.setAttribute(rippleEventAttr, eventType);

    // Create and position the ripple.
    const rect = this._ripple.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const leftTopDistance = Math.sqrt(x * x + y * y);
    const leftBottomDistance = Math.sqrt(
      x * x + (rect.height - y) * (rect.height - y)
    );
    const rightTopDistance = Math.sqrt(
      (rect.width - x) * (rect.width - x) + y * y
    );
    const rightBottomDistance = Math.sqrt(
      (rect.width - x) * (rect.width - x) +
        (rect.height - y) * (rect.height - y)
    );
    const radius = Math.max(
      leftTopDistance,
      leftBottomDistance,
      rightTopDistance,
      rightBottomDistance
    );
    const diameter = radius * 2 + 'px';

    const ripple = document.createElement('div');
    ripple.style.width = diameter;
    ripple.style.height = diameter;
    ripple.style.marginLeft = -radius + x + 'px';
    ripple.style.marginTop = -radius + y + 'px';
    ripple.setAttribute('part', this.ns.e('content'));

    this._ripple.appendChild(ripple);

    setTimeout(() => {
      ripple.setAttribute(
        'part',
        `${this.ns.e('content')} ${this.ns.m('held')}`
      );
    });

    const releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend';
    const release = () => {
      document.removeEventListener(releaseEvent, release);
      ripple.setAttribute(
        'part',
        `${this.ns.e('content')} ${this.ns.m('held')} ${this.ns.m('finish')}`
      );

      // larger than animation: duration in css
      setTimeout(() => {
        (this._ripple as HTMLDivElement).removeChild(ripple);
      }, 600);
    };
    document.addEventListener(releaseEvent, release);
  }

  handleSlotChange(event: any) {
    const slot = event.target;
    const assignedNodes = slot.assignedNodes({ flatten: true });

    if (assignedNodes.length > 1) {
      console.error('There are more than 1 node under coot ripple.');
    } else if (assignedNodes.length === 1) {
      const holder = assignedNodes[0];
      if (!this._ripple) {
        this.rippleInit(holder);
      }
    }
  }

  classes = () => ({
    [this.ns.b()]: true,
  });

  render() {
    return html`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }
}
