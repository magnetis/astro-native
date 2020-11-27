import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { TextInput } from '@components/Inputs';
import { View } from 'react-native';
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
