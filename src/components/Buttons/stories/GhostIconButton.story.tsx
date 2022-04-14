import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, select } from '@storybook/addon-knobs';

import { GhostIconButton } from '..';
import { buttonColorOptions, iconOptions, sizeOptions } from '@root/storybook/options';

storiesOf('Buttons', module).add('GhostIconButton', () => (
  <GhostIconButton
    color={select('color', buttonColorOptions, 'uranus')}
    disabled={boolean('disabled', false)}
    icon={select('icon', iconOptions, iconOptions[0])}
    loading={boolean('loading', false)}
    opacity={number('opacity', 0.7)}
    onPress={() => console.log('Pressed')}
    size={select('size', sizeOptions, 'medium')}
  />
));

export {};
