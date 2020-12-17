import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Link } from '..';
import { PrimaryTextMedium } from '@components/Text';

storiesOf('Buttons', module).add('Link', () => (
  <Link onPress={() => console.log('Pressed')}>
    <PrimaryTextMedium>Button</PrimaryTextMedium>
  </Link>
));

export {};
