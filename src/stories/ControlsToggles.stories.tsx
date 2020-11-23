import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean } from '@storybook/addon-knobs';

import { Toggle, Radio } from '@components/ControlsToggles';

function onValueChange(newValue: boolean) {
  console.log('Toggled ->', newValue);
}

const controlsTogglesStories = storiesOf('Controls & Toggles', module);

controlsTogglesStories.addDecorator((Story: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Story />
  </View>
));

controlsTogglesStories.add('Toggle', () => (
  <Toggle isDisabled={boolean('isDisabled', false)} onValueChange={onValueChange} />
));

controlsTogglesStories.add('Radio', () => (
  <Radio
    label="Option #1"
    isDisabled={boolean('isDisabled', false)}
    onSelect={() => console.log('selected')}
    isSelected={boolean('isSelected', false)}
  />
));
