import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { select, number } from '@storybook/addon-knobs';

import * as icons from '@components/Icons';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { colorOptions, gradientOptions } from './options';

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
