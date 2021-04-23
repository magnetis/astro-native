import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, text } from '@storybook/addon-knobs';

import { Slider } from '..';

storiesOf('Controls & Toggles', module).add('Slider', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Slider
      label={text('label', 'Deadline')}
      unit={{ plural: 'days', singular: 'day' }}
      minimumValue={number('minimumValue', 1)}
      maximumValue={number('maximumValue', 70)}
      hideHeader={boolean('hideHeader', false)}
      fullFill={boolean('fullFill', false)}
      disabled={boolean('disabled', false)}
      onValueChange={(newValue) => console.log('slider to ', newValue)}
    />
  </View>
));

export {};
