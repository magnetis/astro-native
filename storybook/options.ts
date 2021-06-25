import { colors } from '@magnetis/astro-tokens';

import gradients from '@tokens/gradients';
import { Size } from '@tokens/sizes';
import * as icons from '@components/Icons';
import type { IconID } from '@components/Icons';
import { ButtonColor } from '@components/Buttons';

import type { Color } from '@magnetis/astro-tokens';

type Colors = keyof typeof colors;

export const colorOptions = Object.keys(colors).reduce((acc, key) => {
  acc[key] = colors[key as Colors];
  return acc;
}, {} as Record<string, string>);

export const colorOptionsWithTransparent: { [key: string]: Color | 'transparent' } = {
  ...colorOptions,
  transparent: 'transparent',
};

export const sizeOptions: Size[] = ['very-small', 'small', 'medium', 'large'];

export const gradientOptions = Object.keys(gradients).reduce(
  (acc, key) => {
    acc[key] = key;
    return acc;
  },
  { '': null } as { [key: string]: any }
);

export const iconOptions: Array<IconID> = Object.keys(icons).map((key) => key.replace('Icon', '') as IconID);

export const buttonColorOptions: ButtonColor[] = ['uranus', 'venus', 'mars', 'earth'];

export const iconButtonPositionOptions: Array<'left' | 'right'> = ['left', 'right'];
