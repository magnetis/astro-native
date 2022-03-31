import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, select, text } from '@storybook/addon-knobs';

import { Button } from '..';
import { iconOptions } from '@root/storybook/options';
import { sizeOptions } from '@components/types';
import { buttonTypeOptions, buttonVariantOptions } from '../types';

storiesOf('Next Buttons', module).add('Button', () => (
  <Button
    disabled={boolean('disabled', false)}
    fill={boolean('fill', false)}
    iconLeft={select('iconLeft', iconOptions, iconOptions[0])}
    iconRight={select('iconRight', iconOptions, iconOptions[0])}
    loading={boolean('loading', false)}
    opacity={number('opacity', 0.7)}
    rounded={boolean('rounded', false)}
    size={select('size', sizeOptions, sizeOptions[1])}
    text={text('text', 'Button')}
    type={select('type', buttonTypeOptions, buttonTypeOptions[0])}
    variant={select('variant', buttonVariantOptions, buttonVariantOptions[0])}
    onPress={() => console.log('Pressed')}
  />
));

export {};
