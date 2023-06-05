import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select, text } from '@storybook/addon-knobs';

import { PrimaryTextMedium } from '@components/Text';
import { buttonColorOptions } from '@root/storybook/options';

import { Link } from '..';

storiesOf('Buttons', module).add('Link', () => (
  <Link color={select('color', buttonColorOptions, 'uranus')} onPress={() => console.log('Pressed')}>
    <PrimaryTextMedium>{text('text', 'Button')}</PrimaryTextMedium>
  </Link>
));

export {};
