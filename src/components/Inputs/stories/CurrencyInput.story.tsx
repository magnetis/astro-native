import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, text } from '@storybook/addon-knobs';

import { CurrencyInput } from '..';

storiesOf('Inputs', module).add('CurrencyInput', () => (
  <View>
    <CurrencyInput
      placeholder={text('placeholder', '0,00')}
      onValueChange={(raw, formatted) => console.log({ raw, formatted })}
      large={boolean('large', false)}
      error={text('error', '')}
      validated={boolean('validated', false)}
      label={text('label', 'Money (R$)')}
      disabled={boolean('disabled', false)}
      touched
      onBlur={() => console.log('onBlur')}
      onFocus={() => console.log('onFocus')}
      enableCents={boolean('enableCents', false)}
    />
    <View style={{ height: 10 }}></View>
    <CurrencyInput
      placeholder={text('placeholder', '0,00')}
      label="Money (R$)"
      onValueChange={(raw, formatted) => console.log({ raw, formatted })}
      touched
    />
  </View>
));

export {};
