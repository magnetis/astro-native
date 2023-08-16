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

// ButtonsGroup
export * from '@components/ButtonsGroup';

// Divider
export * from '@components/Divider';

// TabsContainer
export * from '@components/Tabs';

// Icons
export * from '@components/Icons';

// Tags
export * from '@components/Tags';

// Types
export * from '@components/types';
