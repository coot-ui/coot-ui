import { html } from 'lit';
import '../index.ts';
import '../../space';
import { BasicDemo as _BasicDemo } from './basic';
import { SuccessDemo, WarningDemo, DangerDemo } from './status';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: 'wc-button',
};

export const BasicDemo = _BasicDemo;
BasicDemo.parameters = {
  docs: {
    source: {
      code: BasicDemo,
      language: 'yml',
      type: 'auto',
    },
  },
};
