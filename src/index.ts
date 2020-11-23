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

// Text
export * from '@components/Text';
export type { PrimaryTextProps, SecondaryTextProps } from '@components/Text';

// Buttons
export * from '@components/Buttons';
export type { ButtonProps } from '@components/Buttons';

// Icons
export * from '@components/Icons';
export type { IconProps } from '@components/Icons';

// Controls & Toggles
export * from '@components/ControlsToggles';
export type { ToggleProps, RadioProps, CheckboxProps } from '@components/ControlsToggles';
