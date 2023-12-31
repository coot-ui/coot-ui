import type { ComponentSize } from '@/constant';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'dashed'
  | 'text'
  | 'link';

export type ButtonStatus = 'primary' | 'success' | 'warning' | 'error';

export type ButtonSize = ComponentSize;
