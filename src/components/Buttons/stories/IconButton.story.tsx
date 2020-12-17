import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select } from '@storybook/addon-knobs';

import { IconButton } from '..';

import { buttonColorOptions, iconOptions, sizeOptions } from '@root/storybook/options';

storiesOf('Buttons', module).add('IconButton', () => (
  <IconButton
    onPress={() => console.log('Pressed')}
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    color={select('color', buttonColorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0])}
    size={select('size', sizeOptions, 'medium')}
  />
));
export {};
