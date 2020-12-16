import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, text } from '@storybook/addon-knobs';

import { ControlInput } from '..';

storiesOf('Inputs', module).add('ControlInput', () => (
  <View>
    <ControlInput
      touched
      enableCents={boolean('enableCents', false)}
      onValueChange={(raw, formatted) => console.log({ raw, formatted })}
      initialValue={0}
      maxValue={number('maxValue', 1000)}
      minValue={number('minValue', 0)}
      step={number('step', 100)}
      large={boolean('large', false)}
      error={text('error', '')}
      validated={boolean('validated', false)}
      label={text('label', 'Value (R$)')}
      disabled={boolean('disabled', false)}
      onBlur={() => console.log('onBlur')}
      onFocus={() => console.log('onFocus')}
    />
  </View>
));

export {};
