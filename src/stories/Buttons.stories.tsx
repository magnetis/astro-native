import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, text } from '@storybook/addon-knobs';

import { ButtonColor, ButtonSize } from '@components/Buttons/types';

const colorOptions: ButtonColor[] = ['uranus', 'venus', 'mars', 'earth'];
const sizeOptions: ButtonSize[] = ['very-small', 'small', 'medium', 'large'];

const buttonsStories = storiesOf('Buttons', module);

buttonsStories.add('PrimaryButton', () => (
  <PrimaryButton
    text={text('text', 'Button')}
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    isLoading={boolean('isLoading', false)}
    fill={boolean('fill', false)}
    color={select('color', colorOptions, 'uranus')}
    size={select('size', sizeOptions, 'medium')}
  />
));

