import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, select } from '@storybook/addon-knobs';
import { Colors, colors } from '@magnetis/astro-galaxy-tokens';

import sizes from '@tokens/sizes';
import { Selection } from '..';
import { colorOptions, colorOptionsWithTransparent, sizeOptions } from '@root/storybook/options';
import type { SelectionItem } from '..';

const items: SelectionItem[] = [
  { label: 'Item #1', icon: 'Cake', value: 'item-1' },
  { label: 'Item #2', value: 'item-2' },
  { label: 'Item #3', value: 'item-3', disabled: true },
  { label: 'Item #4', value: 'item-4' },
  { label: 'Item #5', value: 'item-5' },
  { label: 'Item #6', value: 'item-6' },
];

const controlsTogglesStories = storiesOf('Controls & Toggles', module);

controlsTogglesStories.add('Selection', () => (
  <View style={{ width: '100%', flex: 1, justifyContent: 'center' }}>
    <View style={{ width: '100%' }}>
      <Selection
        onChange={(value: string) => console.log('Tab selected ->', value)}
        items={items}
        disabled={boolean('disabled', false)}
        defaultSelected="item-2"
        borderColor={select('borderColor', colorOptionsWithTransparent, colors.uranus500)}
        textColor={select('textColor', colorOptionsWithTransparent, colors.uranus500) as Colors[keyof Colors]}
        disabledColor={select('disabledColor', colorOptions, colors.moon600)}
        activeTextColor={select('activeTextColor', colorOptionsWithTransparent, colors.moon100) as Colors[keyof Colors]}
        size={select('size', sizeOptions, sizes.Medium)}
      />
    </View>
  </View>
));

controlsTogglesStories.add('Selection with borderBottom', () => (
  <View style={{ width: '100%', flex: 1, justifyContent: 'center' }}>
    <View style={{ width: '100%' }}>
      <Selection
        onChange={(value: string) => console.log('Tab selected ->', value)}
        items={items}
        disabled={boolean('disabled', false)}
        defaultSelected="item-1"
        textColor={select('textColor', colorOptionsWithTransparent, colors.moon300) as Colors[keyof Colors]}
        disabledColor={select('disabledColor', colorOptions, colors.moon200)}
        activeTextColor={
          select('activeTextColor', colorOptionsWithTransparent, colors.uranus500) as Colors[keyof Colors]
        }
        size={select('size', sizeOptions, sizes.Medium)}
      />
    </View>
  </View>
));

export {};
