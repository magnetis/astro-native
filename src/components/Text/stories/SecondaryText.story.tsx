import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select } from '@storybook/addon-knobs';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { SecondaryTextVerySmall, SecondaryTextSmall, SecondaryTextMedium, SecondaryTextLarge } from '..';
import { colorOptions } from '@root/storybook/options';

const secondaryTextStories = storiesOf('Secondary Text', module);

secondaryTextStories.add('Large', () => (
  <SecondaryTextLarge color={select('color', colorOptions, colors.moon900)} bold={boolean('bold', false)}>
    The quick brown fox jumps over the lazy dog
  </SecondaryTextLarge>
));
secondaryTextStories.add('Medium', () => (
  <SecondaryTextMedium color={select('color', colorOptions, colors.moon900)} bold={boolean('bold', false)}>
    The quick brown fox jumps over the lazy dog
  </SecondaryTextMedium>
));
secondaryTextStories.add('Small', () => (
  <SecondaryTextSmall color={select('color', colorOptions, colors.moon900)} bold={boolean('bold', false)}>
    The quick brown fox jumps over the lazy dog
  </SecondaryTextSmall>
));
secondaryTextStories.add('Very Small', () => (
  <SecondaryTextVerySmall color={select('color', colorOptions, colors.moon900)} bold={boolean('bold', false)}>
    The quick brown fox jumps over the lazy dog
  </SecondaryTextVerySmall>
));
