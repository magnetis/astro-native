import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, select, text } from '@storybook/addon-knobs';

import { OutlineButton } from '..';
import { buttonColorOptions, sizeOptions } from '@root/storybook/options';

storiesOf('Buttons', module).add('OutlineButton', () => (
  <OutlineButton
    color={select('color', buttonColorOptions, 'uranus')}
    disabled={boolean('disabled', false)}
    fill={boolean('fill', false)}
    loading={boolean('loading', false)}
    onPress={() => console.log('Pressed')}
    opacity={number('opacity', 0.7)}
    size={select('size', sizeOptions, 'medium')}
    text={text('text', 'Button')}
  />
));

export {};
