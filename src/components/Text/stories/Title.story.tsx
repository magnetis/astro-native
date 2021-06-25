import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select } from '@storybook/addon-knobs';
import { colors } from '@magnetis/astro-tokens';

import { TitleSmall, TitleMedium, TitleLarge } from '..';
import { colorOptions } from '@root/storybook/options';

const titleStories = storiesOf('Title', module);

titleStories.add('Large', () => (
  <TitleLarge color={select('color', colorOptions, colors.moon900)}>
    The quick brown fox jumps over the lazy dog
  </TitleLarge>
));

titleStories.add('Medium', () => (
  <TitleMedium color={select('color', colorOptions, colors.moon900)}>
    The quick brown fox jumps over the lazy dog
  </TitleMedium>
));

titleStories.add('Small', () => (
  <TitleSmall color={select('color', colorOptions, colors.moon900)}>
    The quick brown fox jumps over the lazy dog
  </TitleSmall>
));
