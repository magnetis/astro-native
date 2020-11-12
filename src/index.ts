import gradients from '@tokens/gradients';
import zIndex from '@tokens/z-index';

/**
 * Tokens
 */

export const tokens = {
  gradients,
  zIndex,
};
export type { Gradient, GradientMap, GradientID } from '@tokens/gradients';

/**
 * Components
 */

export * from '@components/Text';
export type { PrimaryTextProps, SecondaryTextProps } from '@components/Text';
