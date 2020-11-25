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
