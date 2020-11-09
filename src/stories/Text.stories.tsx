import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Text from '../components/Text';

storiesOf('Text', module).add('default', () => <Text text="Typescript works!" />);
