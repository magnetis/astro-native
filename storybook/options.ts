import { Colors, colors } from '@magnetis/astro-galaxy-tokens';
import gradients from '@tokens/gradients';
import * as icons from '@components/Icons';

import type { IconID } from '@components/Icons';

export const colorOptions = Object.keys(colors).reduce((acc, key) => {
  acc[key] = colors[key as unknown as keyof Colors];
  return acc;
}, {} as { [key: string]: Colors[keyof Colors] });

export const colorOptionsWithTransparent: { [key: string]: Colors[keyof Colors] | 'transparent' } = {
  ...colorOptions,
  transparent: 'transparent',
};

export const gradientOptions = Object.keys(gradients).reduce(
  (acc, key) => {
    acc[key] = key;
    return acc;
  },
  { '': null } as { [key: string]: any }
);

export const iconOptions: Array<IconID> = Object.keys(icons).map((key) => key.replace('Icon', '') as IconID);
