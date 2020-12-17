import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, text } from '@storybook/addon-knobs';

import { IconLinkButton } from '..';
import { iconButtonPositionOptions, iconOptions, sizeOptions } from '@root/storybook/options';

storiesOf('Buttons', module).add('IconLinkButton', () => (
  <View style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <IconLinkButton
      icon={select('icon', iconOptions, iconOptions[0])}
      onPress={() => console.log('Pressed')}
      iconPosition={select('iconPosition', iconButtonPositionOptions, 'left')}
      size={select('size', sizeOptions, 'medium')}
      text={text('text', 'Button')}
      bold={boolean('bold', false)}
      disabled={boolean('disabled', false)}
    />
  </View>
));

export {};
