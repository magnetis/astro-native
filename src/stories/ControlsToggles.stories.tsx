import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Colors, colors } from '@magnetis/astro-galaxy-tokens';
import { boolean, number, text, select } from '@storybook/addon-knobs';

import sizes from '@tokens/sizes';
import type { TabItem } from '@components/ControlsToggles';
import { Toggle, Radio, Checkbox, RadioGroup, Slider, Tabs } from '@components/ControlsToggles';
import { colorOptions, colorOptionsWithTransparent, sizeOptions } from './options';

const controlsTogglesStories = storiesOf('Controls & Toggles', module);

controlsTogglesStories.add('Toggle', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Toggle disabled={boolean('disabled', false)} onValueChange={(newValue) => console.log('Toggled ->', newValue)} />
  </View>
));

controlsTogglesStories.add('Radio', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Radio
      label="Option #1"
      disabled={boolean('disabled', false)}
      onSelect={() => console.log('selected')}
      selected={boolean('selected', false)}
    />
  </View>
));

const mockOptions = [
  { label: 'Pizza', value: 'pizza' },
  { label: 'Hamburguer', value: 'hamburguer' },
  { label: 'Salad', value: 'salad', disabled: true },
];

controlsTogglesStories.add('RadioGroup', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <RadioGroup
      options={mockOptions}
      onOptionChange={(option) => console.log(option)}
      defaultOption="pizza"
      inline={boolean('inline', false)}
    />
  </View>
));

controlsTogglesStories.add('Checkbox', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Checkbox
      label="Check this"
      indeterminate={boolean('indeterminate', false)}
      disabled={boolean('disabled', false)}
      startChecked={boolean('startChecked', false)}
      onPress={(checked, indeterminate) => console.log({ checked, indeterminate })}
    />
  </View>
));

controlsTogglesStories.add('Slider', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Slider
      label={text('label', 'Deadline')}
      unit={{ plural: 'days', singular: 'day' }}
      minimumValue={number('minimumValue', 1)}
      maximumValue={number('maximumValue', 70)}
      fullFill={boolean('fullFill', false)}
      disabled={boolean('disabled', false)}
      onValueChange={(newValue) => console.log('slider to ', newValue)}
    />
  </View>
));

const items: TabItem[] = [
  { label: 'Item #1', icon: 'Cake', value: 'item-1' },
  { label: 'Item #2', value: 'item-2' },
  { label: 'Item #3', value: 'item-3', disabled: true },
  { label: 'Item #4', value: 'item-4' },
  { label: 'Item #5', value: 'item-5' },
  { label: 'Item #6', value: 'item-6' },
];

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
        textColor={select('textColor', colorOptionsWithTransparent, colors.space100) as Colors[keyof Colors]}
        disabledColor={select('disabledColor', colorOptions, colors.space100)}
        activeItemColor={select('activeItemColor', colorOptionsWithTransparent, colors.space100)}
        activeTextColor={select('activeTextColor', colorOptionsWithTransparent, colors.moon900) as Colors[keyof Colors]}
        size={select('size', sizeOptions, sizes.Medium)}
      />
    </View>
  </View>
));
