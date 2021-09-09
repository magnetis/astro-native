import type { Size } from '@components/types';
import { typography } from '@magnetis/astro-tokens';

export enum FontSize {
  small = typography.fontSizeMicro,
  medium = typography.fontSizeMini,
  large = typography.fontSizeSmaller,
  xlarge = typography.fontSizeMedium,
}

export function getFontSize(size: Size): FontSize {
  return {
    small: typography.fontSizeMicro,
    medium: typography.fontSizeMini,
    large: typography.fontSizeSmaller,
    xlarge: typography.fontSizeMedium,
  }[size];
}
