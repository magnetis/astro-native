import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ToastItem from '../toast-item';
import { View } from 'react-native';
import { WarningIcon } from '@components/Icons/Support';

storiesOf('Toast', module).add('ToastIconWarning', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ToastItem
      onClose={() => console.log('Pressed')}
      message="Type here the warning message from the galaxy."
      type="warning"
      timeout={1}
      key="warning"
      Icon={WarningIcon}
      testID={'warning'}
    />
  </View>
));

export {};
