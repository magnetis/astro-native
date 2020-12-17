import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean } from '@storybook/addon-knobs';

import { RadioGroup } from '..';

const mockOptions = [
  { label: 'Pizza', value: 'pizza' },
  { label: 'Hamburguer', value: 'hamburguer' },
  { label: 'Salad', value: 'salad', disabled: true },
];

storiesOf('Controls & Toggles', module).add('RadioGroup', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <RadioGroup
      options={mockOptions}
      onOptionChange={(option) => console.log(option)}
      defaultOption="pizza"
      inline={boolean('inline', false)}
    />
  </View>
));

export {};
