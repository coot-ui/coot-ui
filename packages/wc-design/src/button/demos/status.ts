import { html } from 'lit';
import '../index.ts';
import '../../space';

export const SuccessDemo = () => html`<wc-space>
  <wc-button status="success">Default</wc-button>
  <wc-button type="primary" status="success">Primary</wc-button>
  <wc-button type="plain" status="success">Plain</wc-button>
  <wc-button type="dashed" status="success">Dashed</wc-button>
  <wc-button type="text" status="success">Text</wc-button>
</wc-space>`;

export const WarningDemo = () => html`<wc-space>
  <wc-button status="warning">Default</wc-button>
  <wc-button type="primary" status="warning">Primary</wc-button>
  <wc-button type="plain" status="warning">Plain</wc-button>
  <wc-button type="dashed" status="warning">Dashed</wc-button>
  <wc-button type="text" status="warning">Text</wc-button>
</wc-space>`;

export const DangerDemo = () => html`<wc-space>
  <wc-button status="danger">Default</wc-button>
  <wc-button type="primary" status="danger">Primary</wc-button>
  <wc-button type="plain" status="danger">Plain</wc-button>
  <wc-button type="dashed" status="danger">Dashed</wc-button>
  <wc-button type="text" status="danger">Text</wc-button>
</wc-space>`;
