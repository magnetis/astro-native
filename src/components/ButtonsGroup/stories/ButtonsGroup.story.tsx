import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, object } from '@storybook/addon-knobs';
import { colors, sizes } from '@magnetis/astro-tokens';

import ButtonsGroup from '../ButtonsGroup';

import type { Item } from '../ButtonsGroup';
import { buttonTypeOptions, buttonVariantOptions } from '@components/Buttons/types';

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
        items={ITEMS}
        rounded={boolean('rounded', false)}
        active={{
          type: select('ActiveType', buttonTypeOptions, buttonTypeOptions[0]),
          variant: select('ActiveVariant', buttonVariantOptions, buttonVariantOptions[0]),
        }}
        inactive={{
          type: select('InactiveType', buttonTypeOptions, buttonTypeOptions[1]),
          variant: select('InactiveVariant', buttonVariantOptions, buttonVariantOptions[4]),
        }}
      />
    </View>
    <View style={{ marginTop: sizes.mini }}>
      <ButtonsGroup
        contentContainerStyle={object('contentContainerStyle', {})}
        initialActiveItemIndex={select('initialActiveItemIndex', ITEMS_INDEX, ITEMS_INDEX[0])}
        items={ITEMS}
        rounded={boolean('rounded', false)}
        active={{
          type: select('ActiveType', buttonTypeOptions, buttonTypeOptions[0]),
          variant: select('ActiveVariant', buttonVariantOptions, buttonVariantOptions[0]),
        }}
        inactive={{
          type: select('InactiveType', buttonTypeOptions, buttonTypeOptions[1]),
          variant: select('InactiveVariant', buttonVariantOptions, buttonVariantOptions[4]),
        }}
      />
    </View>
  </SafeAreaView>
));

export {};
