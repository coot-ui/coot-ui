import { ComponentSize } from '@/constant';

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
  Dashed = 'dashed',
  Text = 'text',
  Link = 'link',
}

export enum ButtonStatus {
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export enum ButtonSize {
  Default = ComponentSize.Default,
  Small = ComponentSize.Small,
  Mini = ComponentSize.Mini,
  Large = ComponentSize.Large,
}
