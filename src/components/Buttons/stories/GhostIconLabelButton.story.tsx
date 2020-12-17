import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, text } from '@storybook/addon-knobs';

import { GhostIconLabelButton } from '..';
import { buttonColorOptions, iconButtonPositionOptions, iconOptions, sizeOptions } from '@root/storybook/options';

storiesOf('Buttons', module).add('GhostIconLabelButton', () => (
  <GhostIconLabelButton
    text={text('text', 'Button')}
    onPress={() => console.log('Pressed')}
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    fill={boolean('fill', false)}
    color={select('color', buttonColorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0])}
    size={select('size', sizeOptions, 'medium')}
    iconPosition={select('iconPosition', iconButtonPositionOptions, 'left')}
  />
));

export {};
