import { Size } from './sizes';

export function getFontSize(size: Size): number {
  switch (size) {
    case 'very-small':
      return 12;
    case 'small':
      return 14;
    case 'medium':
      return 16;
    case 'large':
      return 24;
  }
}
