import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, select } from '@storybook/addon-knobs';

import { OutlineIconButton } from '..';

import { sizeOptions, buttonColorOptions, iconOptions } from '@root/storybook/options';

storiesOf('Buttons', module).add('OutlineIconButton', () => (
  <OutlineIconButton
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
