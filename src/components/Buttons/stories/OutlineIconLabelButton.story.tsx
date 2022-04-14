import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, select, text } from '@storybook/addon-knobs';

import { OutlineIconLabelButton } from '..';
import { buttonColorOptions, iconButtonPositionOptions, iconOptions, sizeOptions } from '@root/storybook/options';

storiesOf('Buttons', module).add('OutlineIconLabelButton', () => (
  <OutlineIconLabelButton
    color={select('color', buttonColorOptions, 'uranus')}
    disabled={boolean('disabled', false)}
    fill={boolean('fill', false)}
    icon={select('icon', iconOptions, iconOptions[0])}
    iconPosition={select('iconPosition', iconButtonPositionOptions, 'left')}
    onPress={() => console.log('Pressed')}
    opacity={number('opacity', 0.7)}
    loading={boolean('loading', false)}
    size={select('size', sizeOptions, 'medium')}
    text={text('text', 'Button')}
  />
));

export {};
