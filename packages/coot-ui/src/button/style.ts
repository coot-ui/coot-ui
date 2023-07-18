import { css } from 'lit';

const BasicStyle = css`
  /* default button */
  .wc-button {
    background-color: var(--color-bg-white);
    border: var(--border-hover);
    border-radius: var(--border-radius-medium);
    font-size: 14px;
    height: var(--size-default);
    color: var(--color-text-primary);
    box-sizing: border-box;
    padding: 4px 15px;
    line-height: 22px;
    cursor: pointer;
  }
  .wc-button:hover {
    border-color: var(--primary-main-color);
    color: var(--primary-main-color);
    background-clip: ${1};
  }
  /* primary button */
  .wc-button-type-primary {
    background-color: var(--primary-main-color);
    border: transparent;
    color: var(--color-text-white);
  }
  .wc-button-type-primary:hover {
    background-color: var(--primary-hover-color);
    color: var(--color-text-white);
  }
  /* plain button */
  .wc-button-type-plain {
    background-color: var(--primary-bg-color);
    border-color: var(--primary-main-color);
    color: var(--primary-main-color);
  }
  .wc-button-type-plain:hover {
    background-color: var(--primary-main-color);
    color: var(--color-text-white);
  }
  /* dash button */
  .wc-button-type-dashed {
    border-style: dashed;
  }
  /* text button */
  .wc-button-type-text {
    border: transparent;
    color: var(--primary-main-color);
  }
  .wc-button-type-text:hover {
    background: var(--color-fill-disable);
  }
`;

const StatusStyle = css`
  /* success */
  .wc-button-status-success:hover {
    border-color: var(--success-main-color);
    color: var(--success-main-color);
  }
  .wc-button-type-primary.wc-button-status-success {
    background-color: var(--success-main-color);
    color: var(--color-text-white);
  }
  .wc-button-type-primary.wc-button-status-success:hover {
    background-color: var(--success-hover-color);
  }
  .wc-button-type-plain.wc-button-status-success {
    background-color: var(--success-bg-color);
    border-color: var(--success-main-color);
    color: var(--success-main-color);
  }
  .wc-button-type-plain.wc-button-status-success:hover {
    background-color: var(--success-main-color);
    color: var(--color-text-white);
  }
  .wc-button-type-text.wc-button-status-success {
    color: var(--success-main-color);
  }
  .wc-button-type-text.wc-button-status-success:hover {
    color: var(--success-main-color);
  }
  /* warning */
  .wc-button-status-warning:hover {
    border-color: var(--warning-main-color);
    color: var(--warning-main-color);
  }
  .wc-button-type-primary.wc-button-status-warning {
    background-color: var(--warning-main-color);
    color: var(--color-text-white);
  }
  .wc-button-type-primary.wc-button-status-warning:hover {
    background-color: var(--warning-hover-color);
  }
  .wc-button-type-plain.wc-button-status-warning {
    background-color: var(--warning-bg-color);
    border-color: var(--warning-main-color);
    color: var(--warning-main-color);
  }
  .wc-button-type-plain.wc-button-status-warning:hover {
    background-color: var(--warning-main-color);
    color: var(--color-text-white);
  }
  .wc-button-type-text.wc-button-status-warning {
    color: var(--warning-main-color);
  }
  .wc-button-type-text.wc-button-status-warning:hover {
    color: var(--warning-main-color);
  }
  /* danger */
  .wc-button-status-danger:hover {
    border-color: var(--danger-main-color);
    color: var(--danger-main-color);
  }
  .wc-button-type-primary.wc-button-status-danger {
    background-color: var(--danger-main-color);
    color: var(--color-text-white);
  }
  .wc-button-type-primary.wc-button-status-danger:hover {
    background-color: var(--danger-hover-color);
  }
  .wc-button-type-plain.wc-button-status-danger {
    background-color: var(--danger-bg-color);
    border-color: var(--danger-main-color);
    color: var(--danger-main-color);
  }
  .wc-button-type-plain.wc-button-status-danger:hover {
    background-color: var(--danger-main-color);
    color: var(--color-text-white);
  }
  .wc-button-type-text.wc-button-status-danger {
    color: var(--danger-main-color);
  }
  .wc-button-type-text.wc-button-status-danger:hover {
    color: var(--danger-main-color);
  }
`;

export const styleList = [BasicStyle, StatusStyle];
