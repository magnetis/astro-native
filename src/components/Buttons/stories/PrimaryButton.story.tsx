import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, text } from '@storybook/addon-knobs';

import { PrimaryButton } from '..';
import { buttonColorOptions, sizeOptions } from '@root/storybook/options';

storiesOf('Buttons', module).add('PrimaryButton', () => (
  <PrimaryButton
    text={text('text', 'Button')}
    onPress={() => console.log('Pressed')}
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    fill={boolean('fill', false)}
    color={select('color', buttonColorOptions, 'uranus')}
    size={select('size', sizeOptions, 'medium')}
  />
));

export {};
