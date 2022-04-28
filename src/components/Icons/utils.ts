import { sizes } from '@magnetis/astro-tokens';
import { GradientID } from '@tokens/gradients';

interface getFillParams {
  gradient?: GradientID;
  color: string;
  id: string;
}

export function getFill({ gradient, color, id }: getFillParams) {
  if (gradient) {
    return `url(#${id})`;
  }
  return color;
}

export function getViewBox(size: number = sizes.smaller) {
  return `0 0 ${size} ${size}`;
}

export function getSize(size: number = sizes.smaller) {
  return size;
}
