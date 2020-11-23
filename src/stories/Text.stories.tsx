import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import {
  PrimaryTextVerySmall,
  PrimaryTextSmall,
  PrimaryTextMedium,
  PrimaryTextLarge,
  SecondaryTextVerySmall,
  SecondaryTextSmall,
  SecondaryTextMedium,
  SecondaryTextLarge,
} from '../components/Text';
import StoryDecorator from '../../storybook/StoryDecorator';

storiesOf('Primary Text', module)
  .add('Large', () => (
    <PrimaryTextLarge bold={boolean('bold', false)} semiBold={boolean('semiBold', false)}>
      The quick brown fox jumps over the lazy dog
    </PrimaryTextLarge>
  ))
  .add('Medium', () => (
    <PrimaryTextMedium bold={boolean('bold', false)} semiBold={boolean('semiBold', false)}>
      The quick brown fox jumps over the lazy dog
    </PrimaryTextMedium>
  ))
  .add('Small', () => (
    <PrimaryTextSmall bold={boolean('bold', false)} semiBold={boolean('semiBold', false)}>
      The quick brown fox jumps over the lazy dog
    </PrimaryTextSmall>
  ))
  .add('Very Small', () => (
    <PrimaryTextVerySmall bold={boolean('bold', false)} semiBold={boolean('semiBold', false)}>
      The quick brown fox jumps over the lazy dog
    </PrimaryTextVerySmall>
  ));

storiesOf('Secondary Text', module)
  .addDecorator(StoryDecorator)
  .addDecorator(withKnobs)
  .add('Large', () => (
    <SecondaryTextLarge bold={boolean('bold', false)}>The quick brown fox jumps over the lazy dog</SecondaryTextLarge>
  ))
  .add('Medium', () => (
    <SecondaryTextMedium bold={boolean('bold', false)}>The quick brown fox jumps over the lazy dog</SecondaryTextMedium>
  ))
  .add('Small', () => (
    <SecondaryTextSmall bold={boolean('bold', false)}>The quick brown fox jumps over the lazy dog</SecondaryTextSmall>
  ))
  .add('Very Small', () => (
    <SecondaryTextVerySmall bold={boolean('bold', false)}>
      The quick brown fox jumps over the lazy dog
    </SecondaryTextVerySmall>
  ));
