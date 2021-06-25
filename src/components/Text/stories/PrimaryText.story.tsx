import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select } from '@storybook/addon-knobs';
import { colors } from '@magnetis/astro-tokens';

import { PrimaryTextVerySmall, PrimaryTextSmall, PrimaryTextMedium, PrimaryTextLarge } from '..';
import { colorOptions } from '@root/storybook/options';

const primaryTextStories = storiesOf('Primary Text', module);

primaryTextStories.add('Large', () => (
  <PrimaryTextLarge
    color={select('color', colorOptions, colors.moon900)}
    bold={boolean('bold', false)}
    semiBold={boolean('semiBold', false)}
  >
    The quick brown fox jumps over the lazy dog
  </PrimaryTextLarge>
));

primaryTextStories.add('Medium', () => (
  <PrimaryTextMedium
    color={select('color', colorOptions, colors.moon900)}
    bold={boolean('bold', false)}
    semiBold={boolean('semiBold', false)}
  >
    The quick brown fox jumps over the lazy dog
  </PrimaryTextMedium>
));

primaryTextStories.add('Small', () => (
  <PrimaryTextSmall
    color={select('color', colorOptions, colors.moon900)}
    bold={boolean('bold', false)}
    semiBold={boolean('semiBold', false)}
  >
    The quick brown fox jumps over the lazy dog
  </PrimaryTextSmall>
));

primaryTextStories.add('Very Small', () => (
  <PrimaryTextVerySmall
    color={select('color', colorOptions, colors.moon900)}
    bold={boolean('bold', false)}
    semiBold={boolean('semiBold', false)}
  >
    The quick brown fox jumps over the lazy dog
  </PrimaryTextVerySmall>
));
