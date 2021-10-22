import { PressableProps } from 'react-native';

import { IconID } from '@components/Icons/types';
import type { Size } from '@components/types';

export const buttonTypeOptions = ['solid', 'subtle', 'outline', 'ghost'] as const;
export type ButtonType = typeof buttonTypeOptions[number];

export const buttonVariantOptions = ['primary', 'secondary', 'alert', 'success', 'inversed', 'disabled'] as const;
export type ButtonVariant = typeof buttonVariantOptions[number];

export interface ButtonProps extends PressableProps {
  /** Button fills entire parent when set to true. Defaults to `false`. */
  fill?: boolean;
  /** Defines left icon name */
  iconLeft?: IconID;
  /** Defines right icon name */
  iconRight?: IconID;
  /** Renders legacy border radius. Defaults to `false`.  */
  legacy?: boolean;
  /** Shows activity indicator inside button when true. Defaults to `false`.  */
  loading?: boolean;
  /** Specifies button size. Defaults to `"medium"`. */
  size?: Size;
  /** Text to be shown inside the button */
  text: string;
  /** Type of button, the default value is `"solid"` */
  type?: ButtonType;
  /** Variant of button, the default value is `"primary"` */
  variant?: ButtonVariant;
}

export interface ButtonProperties {
  backgroundColor: string;
  textColor: string;
}

export interface IconButtonProps extends Omit<ButtonProps, 'text' | 'fill' | 'iconLeft' | 'iconRight'> {
  /** Name of valid Astro's icon in PascalCase */
  icon: IconID;
}

export interface IconProperties {
  iconSize: number;
  iconMargin: number;
}

export type LoadingSizes = 'small' | 'large';
