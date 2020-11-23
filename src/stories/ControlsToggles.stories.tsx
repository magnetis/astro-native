import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean } from '@storybook/addon-knobs';

import { Toggle, Radio, Checkbox } from '@components/ControlsToggles';

const controlsTogglesStories = storiesOf('Controls & Toggles', module);

controlsTogglesStories.addDecorator((Story: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Story />
  </View>
));

controlsTogglesStories.add('Toggle', () => (
  <Toggle isDisabled={boolean('isDisabled', false)} onValueChange={(newValue) => console.log('Toggled ->', newValue)} />
));

controlsTogglesStories.add('Radio', () => (
  <Radio
    label="Option #1"
    isDisabled={boolean('isDisabled', false)}
    onSelect={() => console.log('selected')}
    isSelected={boolean('isSelected', false)}
  />
));

controlsTogglesStories.add('Checkbox', () => (
  <Checkbox
    label="Check this"
    isIndeterminate={boolean('isIndeterminate', false)}
    isDisabled={boolean('isDisabled', false)}
    startChecked={boolean('startChecked', false)}
    onPress={(checked, indeterminate) => console.log({ checked, indeterminate })}
  />
));
