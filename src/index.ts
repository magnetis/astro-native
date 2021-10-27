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

// Buttons
export * from '@components/Buttons';
export type { ButtonProps } from '@components/Buttons';

// ButtonsGroup
export * from '@components/ButtonsGroup';
export type { ButtonsGroupProps } from '@components/ButtonsGroup';

// Icons
export * from '@components/Icons';
export type { IconProps } from '@components/Icons';

// Types
export * from '@components/types';
