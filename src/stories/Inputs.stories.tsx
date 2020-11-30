import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { TextInput, MaskedInput } from '@components/Inputs';
import { Text, View } from 'react-native';
import { boolean, text } from '@storybook/addon-knobs';

const inputsStories = storiesOf('Inputs', module);

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
