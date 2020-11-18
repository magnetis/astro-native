import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, text } from '@storybook/addon-knobs';

import {
  OutlineButton,
  OutlineIconLabelButton,
  PrimaryButton,
  Link,
  OutlineIconButton,
  IconLabelButton,
  IconButton,
  GhostIconButton,
} from '@components/Buttons';
import { PrimaryTextMedium } from '@components/Text';
import { ButtonColor, ButtonSize } from '@components/Buttons/types';
import * as icons from '@components/Icons';

const colorOptions: ButtonColor[] = ['uranus', 'venus', 'mars', 'earth'];
const sizeOptions: ButtonSize[] = ['very-small', 'small', 'medium', 'large'];

const iconPositionOptions = ['left', 'right'];
const iconOptions = Object.keys(icons).map((key) => key.replace('Icon', ''));

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

buttonsStories.add('IconLabelButton', () => (
  <IconLabelButton
    text={text('text', 'Button')}
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    isLoading={boolean('isLoading', false)}
    fill={boolean('fill', false)}
    color={select('color', colorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0])}
    size={select('size', sizeOptions, 'medium')}
    iconPosition={select('iconPosition', iconPositionOptions, 'left')}
  />
));

buttonsStories.add('IconButton', () => (
  <IconButton
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    isLoading={boolean('isLoading', false)}
    color={select('color', colorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0])}
    size={select('size', sizeOptions, 'medium')}
  />
));

buttonsStories.add('GhostIconButton', () => (
  <GhostIconButton
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    isLoading={boolean('isLoading', false)}
    color={select('color', colorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0])}
    size={select('size', sizeOptions, 'medium')}
  />
));

buttonsStories.add('OutlineButton', () => (
  <OutlineButton
    text={text('text', 'Button')}
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    isLoading={boolean('isLoading', false)}
    fill={boolean('fill', false)}
    color={select('color', colorOptions, 'uranus')}
    size={select('size', sizeOptions, 'medium')}
  />
));

buttonsStories.add('OutlineIconLabelButton', () => (
  <OutlineIconLabelButton
    text={text('text', 'Button')}
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    isLoading={boolean('isLoading', false)}
    fill={boolean('fill', false)}
    color={select('color', colorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0])}
    size={select('size', sizeOptions, 'medium')}
    iconPosition={select('iconPosition', iconPositionOptions, 'left')}
  />
));

buttonsStories.add('OutlineIconButton', () => (
  <OutlineIconButton
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    isLoading={boolean('isLoading', false)}
    color={select('color', colorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0])}
    size={select('size', sizeOptions, 'medium')}
  />
));

buttonsStories.add('Link', () => (
  <Link onPress={() => console.log('Pressed')} size={select('size', sizeOptions, 'medium')}>
    <PrimaryTextMedium>this is a Link</PrimaryTextMedium>
  </Link>
));
