import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';

import { useNamespace, defineElement, injectStyle } from '@/utils';

import rippleStyle from '@/style/components/ripple.scss?inline';
injectStyle(rippleStyle, '@/style/components/ripple.scss');

const rippleEventAttr = 'coot-ripple-event';

@defineElement('coot-ripple')
export class CootRipple extends LitElement {
  ns = useNamespace('ripple');

  @property({ type: String })
  color = 'currentColor';

  @property({ type: Number })
  opacity = 0.25;

  @property({ type: Number })
  duration = 0.5;

  @state()
  _rippleContainer: HTMLDivElement | undefined;

  initRippleToTarget(target: HTMLElement) {
    this.checkTargetPosition(target);
    this.appendRippleContainerToTarget(target);
    this.addListenerToTarget(target);
  }

  // check that the position of target cann't be static
  checkTargetPosition(target: HTMLElement) {
    const position = window
      .getComputedStyle(target)
      .getPropertyValue('position');
    if (position === 'static') {
      target.style.position = 'relative';
    }
  }

  // init rippleContainer and append it to target
  appendRippleContainerToTarget(target: HTMLElement) {
    if (!this._rippleContainer) {
      this._rippleContainer = document.createElement('div') as HTMLDivElement;
      this._rippleContainer.setAttribute('part', this.ns.b());
      target.appendChild(this._rippleContainer);
    }
  }

  // add click/touch listener to target
  addListenerToTarget(target: HTMLElement) {
    target.addEventListener(
      'mousedown',
      (event) => {
        this.startRipple('mousedown', event as MouseEvent);
      },
      { passive: true }
    );
    target.addEventListener(
      'touchstart',
      (event) => {
        const changedTouches = (event as TouchEvent).changedTouches;
        for (let i = 0; i < changedTouches.length; ++i) {
          this.startRipple(
            'touchstart',
            changedTouches[i] as unknown as MouseEvent
          );
        }
      },
      { passive: true }
    );
  }

  startRipple(eventType: 'mousedown' | 'touchstart', event: MouseEvent) {
    const rippleContainer = this._rippleContainer as HTMLDivElement;

    // Store the event use to generate this ripple on the holder: don't allow
    // further events of different types until we're done. Prevents double-
    // ripples from mousedown/touchstart.
    const previousEvent = rippleContainer.getAttribute(rippleEventAttr);
    if (previousEvent && previousEvent !== eventType) {
      return;
    }
    rippleContainer.setAttribute(rippleEventAttr, eventType);

    // create ripple and computed its position and size
    const rect = rippleContainer.getBoundingClientRect();
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
    ripple.style.backgroundColor = this.color;
    ripple.style.opacity = `${this.opacity}`;
    ripple.style.transform = 'scale(0)';
    ripple.style.transitionDuration = `${this.duration}`;
    ripple.setAttribute('part', this.ns.e('content'));

    rippleContainer.appendChild(ripple);

    setTimeout(() => {
      ripple.style.transform = 'scale(1)';
    });

    const releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend';
    const release = () => {
      document.removeEventListener(releaseEvent, release);
      ripple.style.opacity = '0';

      // larger than animation: duration in css
      setTimeout(() => {
        (this._rippleContainer as HTMLDivElement).removeChild(ripple);
      }, 500);
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
      if (!this._rippleContainer) {
        this.initRippleToTarget(holder);
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
