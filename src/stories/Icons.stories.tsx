import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select, number } from '@storybook/addon-knobs';

import * as icons from '@components/Icons';
import gradients from '@tokens/gradients';
import { colors } from '@magnetis/astro-galaxy-tokens';

const gradientOptions = Object.keys(gradients).reduce(
  (acc, key) => {
    acc[key] = key;
    return acc;
  },
  { '': null }
);

const colorOptions = Object.keys(colors).reduce((acc, key) => {
  acc[key] = colors[key];
  return acc;
}, {});

const iconsStories = storiesOf('Icons', module);

Object.keys(icons).forEach((key) => {
  const Icon = icons[key];
  iconsStories.add(key.replace('Icon', ''), () => (
    <Icon
      width={number('width', 64)}
      height={number('height', 64)}
      gradient={select('gradient', gradientOptions, undefined) || undefined}
      color={select('color', colorOptions, colors.uranus500)}
    />
  ));
});

// iconsStories.add('Additional', () => (
//   <AdditionalIcon
//     width={number('width', 64)}
//     height={number('height', 64)}
//     gradient={select('gradient', gradientOptions, undefined) || undefined}
//     color={select('color', colorOptions, colors.uranus500)}
//   />
// ));

// iconsStories.add('Chart', () => (
//   <ChartIcon
//     width={number('width', 64)}
//     height={number('height', 64)}
//     gradient={select('gradient', gradientOptions, undefined) || undefined}
//     color={select('color', colorOptions, colors.uranus500)}
//   />
// ));

// iconsStories.add('Invite', () => (
//   <InviteIcon
//     width={number('width', 64)}
//     height={number('height', 64)}
//     gradient={select('gradient', gradientOptions, undefined) || undefined}
//     color={select('color', colorOptions, colors.uranus500)}
//   />
// ));

// iconsStories.add('Time', () => (
//   <TimeIcon
//     width={number('width', 64)}
//     height={number('height', 64)}
//     gradient={select('gradient', gradientOptions, undefined) || undefined}
//     color={select('color', colorOptions, colors.uranus500)}
//   />
// ));

// iconsStories.add('Down', () => (
//   <DownIcon
//     width={number('width', 64)}
//     height={number('height', 64)}
//     gradient={select('gradient', gradientOptions, undefined) || undefined}
//     color={select('color', colorOptions, colors.uranus500)}
//   />
// ));

// iconsStories.add('Sheet', () => (
//   <SheetIcon
//     width={number('width', 64)}
//     height={number('height', 64)}
//     gradient={select('gradient', gradientOptions, undefined) || undefined}
//     color={select('color', colorOptions, colors.uranus500)}
//   />
// ));

// iconsStories.add('Chat', () => (
//   <ChatIcon
//     width={number('width', 64)}
//     height={number('height', 64)}
//     gradient={select('gradient', gradientOptions, undefined) || undefined}
//     color={select('color', colorOptions, colors.uranus500)}
//   />
// ));

// iconsStories.add('Flag', () => (
//   <FlagIcon
//     width={number('width', 64)}
//     height={number('height', 64)}
//     gradient={select('gradient', gradientOptions, undefined) || undefined}
//     color={select('color', colorOptions, colors.uranus500)}
//   />
// ));
