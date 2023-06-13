import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { PrimaryTextMedium } from '@components/Text';

import { Link } from '..';

storiesOf('Buttons', module).add('Link', () => (
  <Link color={text('color', 'uranus')} onPress={() => console.log('Pressed')}>
    <PrimaryTextMedium>{text('text', 'Button')}</PrimaryTextMedium>
  </Link>
));

export {};
