import { sizes } from '@magnetis/astro-tokens';
import { GradientID } from '@tokens/gradients';

interface getFillParams {
  gradient?: GradientID;
  color: string;
  id: string;
}

type sizeTokens = keyof typeof sizes;

export function getFill({ gradient, color, id }: getFillParams) {
  if (gradient) {
    return `url(#${id})`;
  }
  return color;
}

export function getViewBox(token: sizeTokens = 'smaller') {
  return `0 0 ${sizes[token]} ${sizes[token]}`;
}

export function getSize(token: sizeTokens = 'smaller') {
  return sizes[token];
}
