import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean } from '@storybook/addon-knobs';

import { Checkbox } from '..';

storiesOf('Controls & Toggles', module).add('Checkbox', () => (
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

export {};
