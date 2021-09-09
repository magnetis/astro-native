import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select } from '@storybook/addon-knobs';

import { IconButton } from '..';
import { iconOptions } from '@root/storybook/options';
import { sizeOptions } from '@components/types';
import { buttonTypeOptions, buttonVariantOptions } from '../types';

storiesOf('Next Buttons', module).add('IconButton', () => (
  <IconButton
    disabled={boolean('disabled', false)}
    icon={select('icon', iconOptions, iconOptions[0])}
    loading={boolean('loading', false)}
    size={select('size', sizeOptions, 'medium')}
    variant={select('variant', buttonVariantOptions, 'primary')}
    type={select('type', buttonTypeOptions, 'solid')}
    onPress={() => console.log('Pressed')}
  />
));

export {};
