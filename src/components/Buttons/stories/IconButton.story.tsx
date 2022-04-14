import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, select } from '@storybook/addon-knobs';

import { IconButton } from '..';

import { buttonColorOptions, iconOptions, sizeOptions } from '@root/storybook/options';

storiesOf('Buttons', module).add('IconButton', () => (
  <IconButton
    color={select('color', buttonColorOptions, 'uranus')}
    disabled={boolean('disabled', false)}
    icon={select('icon', iconOptions, iconOptions[0])}
    loading={boolean('loading', false)}
    onPress={() => console.log('Pressed')}
    opacity={number('opacity', 0.7)}
    size={select('size', sizeOptions, 'medium')}
  />
));
export {};
