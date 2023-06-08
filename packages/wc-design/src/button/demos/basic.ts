import { html } from 'lit';
import '../index.ts';
import '../../space';

export const BasicDemo = () => html`<wc-space>
  <wc-button>Default</wc-button>
  <wc-button type="primary">Primary</wc-button>
  <wc-button type="plain">Plain</wc-button>
  <wc-button type="dashed">Dashed</wc-button>
  <wc-button type="text">Text</wc-button>
</wc-space>`;
