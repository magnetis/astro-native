import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean } from '@storybook/addon-knobs';

import { Toggle } from '..';

storiesOf('Controls & Toggles', module).add('Toggle', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Toggle disabled={boolean('disabled', false)} onValueChange={(newValue) => console.log('Toggled ->', newValue)} />
  </View>
));

export {};
