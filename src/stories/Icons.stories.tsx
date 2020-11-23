import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { select, number } from '@storybook/addon-knobs';

import * as icons from '@components/Icons';
import gradients from '@tokens/gradients';
import { colors, Colors } from '@magnetis/astro-galaxy-tokens';

const gradientOptions = Object.keys(gradients).reduce(
  (acc, key) => {
    acc[key] = key;
    return acc;
  },
  { '': null } as { [key: string]: any }
);

const colorOptions = Object.keys(colors).reduce((acc, key) => {
  acc[key] = colors[(key as unknown) as keyof Colors];
  return acc;
}, {} as { [key: string]: Colors[keyof Colors] });

const iconsStories = storiesOf('Icons', module).addDecorator((Story: any) => (
  <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <Story />
  </View>
));

Object.keys(icons).forEach((key) => {
  // @ts-ignore
  const Icon = icons[key];
  iconsStories.add(key.replace('Icon', ''), () => (
    <Icon
      width={number('width', 64)}
      height={number('height', 64)}
      gradient={select('gradient', gradientOptions, undefined) || undefined}
      color={select('color', colorOptions, colors.uranus500)}
    />
  ));
});
