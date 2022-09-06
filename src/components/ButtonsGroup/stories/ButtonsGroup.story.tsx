import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, object } from '@storybook/addon-knobs';
import { colors, sizes } from '@magnetis/astro-tokens';

import ButtonsGroup from '../ButtonsGroup';

import type { Item } from '../ButtonsGroup';

const ITEMS: Item[] = [
  { value: 'lorem', onPress: () => console.log('lorem') },
  { value: 'ipsum', onPress: () => console.log('ipsum') },
  { value: 'dolor', onPress: () => console.log('dolor') },
];

const ITEMS_INDEX = ITEMS.map((_, index) => index);

storiesOf('Buttons Group', module).add('Buttons Group', () => (
  <SafeAreaView>
    <View style={{ backgroundColor: colors.solidFaintDarkest }}>
      <ButtonsGroup
        contentContainerStyle={object('contentContainerStyle', {})}
        initialActiveItemIndex={select('initialActiveItemIndex', ITEMS_INDEX, ITEMS_INDEX[0])}
        inversed={boolean('inversed', true)}
        items={ITEMS}
        legacy={boolean('legacy', true)}
        rounded={boolean('rounded', false)}
      />
    </View>
    <View style={{ marginTop: sizes.mini }}>
      <ButtonsGroup
        contentContainerStyle={object('contentContainerStyle', {})}
        initialActiveItemIndex={select('initialActiveItemIndex', ITEMS_INDEX, ITEMS_INDEX[0])}
        items={ITEMS}
        legacy={boolean('legacy', false)}
        rounded={boolean('rounded', false)}
      />
    </View>
  </SafeAreaView>
));

export {};
