import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ToastItem from '../toast-item';
import { View } from 'react-native';
import { CircleCheckIcon } from '@components/Icons/Support';

storiesOf('Toast', module).add('ToastIconSuccess', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ToastItem
      onClose={() => console.log('Pressed')}
      message="Type here the success message from the galaxy."
      typeVariante="success"
      timeout={1}
      key="sucess"
      Icon={CircleCheckIcon}
      testID={'alert'}
    />
  </View>
));

export {};
