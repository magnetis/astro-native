import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ToastItem from '../toast-item';
import { View } from 'react-native';
import { AlertIcon } from '@components/Icons/Support';

storiesOf('Toast', module).add('ToastIconInfo', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ToastItem
      onClose={() => console.log('Pressed')}
      message="Type here the info message from the galaxy."
      typeVariante="info"
      timeout={1}
      key="info"
      Icon={AlertIcon}
      testID={'info'}
    />
  </View>
));

export {};
