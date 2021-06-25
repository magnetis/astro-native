import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, select } from '@storybook/addon-knobs';
import { colors } from '@magnetis/astro-tokens';

import sizes from '@tokens/sizes';
import { Tabs } from '..';
import type { TabItem } from '..';
import { colorOptions, colorOptionsWithTransparent, sizeOptions } from '@root/storybook/options';

import type { Color } from '@magnetis/astro-tokens';

const items: TabItem[] = [
  { label: 'Item #1', icon: 'Cake', value: 'item-1' },
  { label: 'Item #2', value: 'item-2' },
  { label: 'Item #3', value: 'item-3', disabled: true },
  { label: 'Item #4', value: 'item-4' },
  { label: 'Item #5', value: 'item-5' },
  { label: 'Item #6', value: 'item-6' },
];

const controlsTogglesStories = storiesOf('Controls & Toggles', module);

controlsTogglesStories.add('Tabs', () => (
  <View style={{ width: '100%', flex: 1, backgroundColor: colors.space900, justifyContent: 'center' }}>
    <View style={{ width: '100%' }}>
      <Tabs
        onChange={(value: string) => console.log('Tab selected ->', value)}
        items={items}
        disabled={boolean('disabled', false)}
        defaultSelected="item-2"
        borderColor={select('borderColor', colorOptionsWithTransparent, 'transparent')}
        backgroundColor={select('backgroundColor', colorOptionsWithTransparent, 'transparent')}
        textColor={select('textColor', colorOptionsWithTransparent, colors.space100) as Color}
        disabledColor={select('disabledColor', colorOptions, colors.space100)}
        activeItemColor={select('activeItemColor', colorOptionsWithTransparent, colors.space100)}
        activeTextColor={select('activeTextColor', colorOptionsWithTransparent, colors.moon900) as Color}
        size={select('size', sizeOptions, sizes.Medium)}
      />
    </View>
  </View>
));

controlsTogglesStories.add('Tabs with borderBottom', () => (
  <View style={{ width: '100%', flex: 1, backgroundColor: colors.space100, justifyContent: 'center' }}>
    <View style={{ width: '100%' }}>
      <Tabs
        onChange={(value: string) => console.log('Tab selected ->', value)}
        items={items}
        disabled={boolean('disabled', false)}
        defaultSelected="item-1"
        borderBottom={boolean('borderBottom', true)}
        textColor={select('textColor', colorOptionsWithTransparent, colors.moon300) as Color}
        disabledColor={select('disabledColor', colorOptions, colors.moon200)}
        activeTextColor={select('activeTextColor', colorOptionsWithTransparent, colors.uranus500) as Color}
        size={select('size', sizeOptions, sizes.Medium)}
      />
    </View>
  </View>
));

export {};
