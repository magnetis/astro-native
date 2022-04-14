import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, select, text } from '@storybook/addon-knobs';

import { IconLabelButton } from '..';
import { buttonColorOptions, iconButtonPositionOptions, iconOptions, sizeOptions } from '@root/storybook/options';

storiesOf('Buttons', module).add('IconLabelButton', () => (
  <IconLabelButton
    color={select('color', buttonColorOptions, 'uranus')}
    disabled={boolean('disabled', false)}
    fill={boolean('fill', false)}
    icon={select('icon', iconOptions, iconOptions[0])}
    iconPosition={select('iconPosition', iconButtonPositionOptions, 'left') as 'left' | 'right'}
    loading={boolean('loading', false)}
    onPress={() => console.log('Pressed')}
    opacity={number('opacity', 0.7)}
    size={select('size', sizeOptions, 'medium')}
    text={text('text', 'Button')}
  />
));

export {};
