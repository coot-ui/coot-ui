import { LitElement, html, unsafeCSS, css } from 'lit';
import { query } from 'lit/decorators.js';

import { useNamespace, classString, defineElement } from '@/utils';

import styles from './style.scss?inline';

const rippleEventAttr = 'coot-ripple-event';

@defineElement('coot-ripple')
export class CootButtonGroup extends LitElement {
  ns = useNamespace('ripple');

  @query('#ripple-container')
  _rippleContainer: HTMLDivElement | undefined;

  protected firstUpdated() {
    this.rippleInit();
  }

  rippleInit() {
    if (!this.parentElement) {
      return;
    }
    const parentPosition = window
      .getComputedStyle(this.parentElement)
      .getPropertyValue('position');
    if (parentPosition === 'static') {
      this.parentElement.style.position = 'relative';
    }
    this.parentElement.addEventListener(
      'mousedown',
      (event) => {
        this.startRipple('mousedown', event as MouseEvent);
      },
      { passive: true }
    );
    this.parentElement.addEventListener(
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

    // Create and position the ripple.
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
    ripple.className = this.ns.e('content');

    rippleContainer.appendChild(ripple);

    setTimeout(() => {
      ripple.classList.add(this.ns.m('held'));
    });

    const releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend';
    const release = () => {
      document.removeEventListener(releaseEvent, release);
      ripple.classList.add(this.ns.m('finish'));

      // larger than animation: duration in css
      setTimeout(() => {
        rippleContainer.removeChild(ripple);
      }, 500);
    };
    document.addEventListener(releaseEvent, release);
  }

  classes = () => ({
    [this.ns.b()]: true,
  });

  render() {
    return html`<div
      id="ripple-container"
      class=${classString(this.classes())}
      part=${this.ns.b()}
    ></div>`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;
}
