import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ToastItem from '../toast-item';
import { View } from 'react-native';
import { AlertIcon } from '@components/Icons/Support';

storiesOf('Toast', module).add('ToastIconError', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ToastItem
      onClose={() => console.log('Pressed')}
      message="Type here the error message from the galaxy."
      type="alert"
      timeout={1}
      key="error"
      Icon={AlertIcon}
      testID={'error'}
    />
  </View>
));

export {};
