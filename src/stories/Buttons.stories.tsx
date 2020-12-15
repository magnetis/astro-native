import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, text } from '@storybook/addon-knobs';

import {
  PrimaryButton,
  IconButton,
  IconLabelButton,
  OutlineButton,
  OutlineIconButton,
  OutlineIconLabelButton,
  GhostIconButton,
  GhostIconLabelButton,
  Link,
  IconLinkButton,
} from '@components/Buttons';
import { PrimaryTextMedium } from '@components/Text';
import type { ButtonColor } from '@components/Buttons';
import * as icons from '@components/Icons';
import type { IconID } from '@components/Icons';
import { sizeOptions } from './options';

const colorOptions: ButtonColor[] = ['uranus', 'venus', 'mars', 'earth'];

const iconPositionOptions = ['left', 'right'];
const iconOptions = Object.keys(icons).map((key) => key.replace('Icon', ''));

const buttonsStories = storiesOf('Buttons', module);

buttonsStories.add('PrimaryButton', () => (
  <PrimaryButton
    text={text('text', 'Button')}
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    loading={boolean('loading', false)}
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
    loading={boolean('loading', false)}
    fill={boolean('fill', false)}
    color={select('color', colorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0]) as IconID}
    size={select('size', sizeOptions, 'medium')}
    iconPosition={select('iconPosition', iconPositionOptions, 'left') as 'left' | 'right'}
  />
));

buttonsStories.add('IconButton', () => (
  <IconButton
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    loading={boolean('loading', false)}
    color={select('color', colorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0]) as IconID}
    size={select('size', sizeOptions, 'medium')}
  />
));

buttonsStories.add('GhostIconButton', () => (
  <GhostIconButton
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    loading={boolean('loading', false)}
    color={select('color', colorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0]) as IconID}
    size={select('size', sizeOptions, 'medium')}
  />
));

buttonsStories.add('GhostIconLabelButton', () => (
  <GhostIconLabelButton
    text={text('text', 'Button')}
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    loading={boolean('loading', false)}
    fill={boolean('fill', false)}
    color={select('color', colorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0]) as IconID}
    size={select('size', sizeOptions, 'medium')}
    iconPosition={select('iconPosition', iconPositionOptions, 'left') as 'left' | 'right'}
  />
));

buttonsStories.add('OutlineButton', () => (
  <OutlineButton
    text={text('text', 'Button')}
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    loading={boolean('loading', false)}
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
    loading={boolean('loading', false)}
    fill={boolean('fill', false)}
    color={select('color', colorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0]) as IconID}
    size={select('size', sizeOptions, 'medium')}
    iconPosition={select('iconPosition', iconPositionOptions, 'left') as 'left' | 'right'}
  />
));

buttonsStories.add('OutlineIconButton', () => (
  <OutlineIconButton
    onPress={() => console.log('Pressed')}
    isDisabled={boolean('isDisabled', false)}
    loading={boolean('loading', false)}
    color={select('color', colorOptions, 'uranus')}
    icon={select('icon', iconOptions, iconOptions[0]) as IconID}
    size={select('size', sizeOptions, 'medium')}
  />
));

buttonsStories.add('Link', () => (
  <Link onPress={() => console.log('Pressed')}>
    <PrimaryTextMedium>Button</PrimaryTextMedium>
  </Link>
));

buttonsStories.add('IconLinkButton', () => (
  <View style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <IconLinkButton
      icon={select('icon', iconOptions, iconOptions[0]) as IconID}
      onPress={() => console.log('Pressed')}
      iconPosition={select('iconPosition', iconPositionOptions, 'left') as 'left' | 'right'}
      size={select('size', sizeOptions, 'medium')}
      text={text('text', 'Button')}
      bold={boolean('bold', false)}
      isDisabled={boolean('isDisabled', false)}
    />
  </View>
));
