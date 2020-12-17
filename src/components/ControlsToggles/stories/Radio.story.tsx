import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean } from '@storybook/addon-knobs';

import { Radio } from '..';

storiesOf('Controls & Toggles', module).add('Radio', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Radio
      label="Option #1"
      disabled={boolean('disabled', false)}
      onSelect={() => console.log('selected')}
      selected={boolean('selected', false)}
    />
  </View>
));

export {};
