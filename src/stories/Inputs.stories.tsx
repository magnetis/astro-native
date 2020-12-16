import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, text } from '@storybook/addon-knobs';

import { TextInput, MaskedInput, ControlInput } from '@components/Inputs';

const inputsStories = storiesOf('Inputs', module);

import '@components/Inputs/stories';

inputsStories.add('TextInput', () => (
  <View>
    <TextInput
      password={boolean('password', false)}
      large={boolean('large', false)}
      error={text('error', '')}
      validated={boolean('validated', false)}
      label={text('label', 'Name')}
      disabled={boolean('disabled', false)}
      onChangeText={(value) => console.log('onChangeText', value)}
      touched
      onBlur={() => console.log('onBlur')}
      onFocus={() => console.log('onFocus')}
    />
    <View style={{ height: 10 }}></View>
    <TextInput label="Last Name" onChangeText={(value) => console.log('onChangeText', value)} touched />
  </View>
));

inputsStories.add('ControlInput', () => (
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

inputsStories.add('MaskedInput', () => (
  <View>
    <Text style={{ color: 'red', textAlign: 'center', marginBottom: 50 }}>
      Masks were not implemented in these examples{'\n'}
    </Text>
    <MaskedInput
      blockCursor={boolean('blockCursor', false)}
      placeholder="DD/MM/AAAA"
      large={boolean('large', false)}
      error={text('error', '')}
      validated={boolean('validated', false)}
      label={text('label', 'Date')}
      disabled={boolean('disabled', false)}
      onChangeText={(value) => console.log('onChangeText', value)}
      touched
      onBlur={() => console.log('onBlur')}
      onFocus={() => console.log('onFocus')}
    />
    <View style={{ height: 10 }}></View>
    <MaskedInput
      placeholder="xxx.xxx.xxx-xx"
      label="CPF"
      onChangeText={(value) => console.log('onChangeText', value)}
      touched
    />
  </View>
));
