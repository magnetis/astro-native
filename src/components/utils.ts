import { MIN_HIT_SLOP } from './constants';

export function getFixedHitSlop({ width, height }: { width: number; height: number }) {
  if (width < MIN_HIT_SLOP || height < MIN_HIT_SLOP) {
    const horizontalOffset = width < MIN_HIT_SLOP ? (MIN_HIT_SLOP - width) / 2 : 0;
    const verticalOffset = height < MIN_HIT_SLOP ? (MIN_HIT_SLOP - height) / 2 : 0;
    const newHitSlop = {
      top: verticalOffset,
      bottom: verticalOffset,
      left: horizontalOffset,
      right: horizontalOffset,
    };
    return newHitSlop;
  }
  return 0;
}
