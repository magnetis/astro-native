import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, select } from '@storybook/addon-knobs';
import { colors, sizes } from '@magnetis/astro-tokens';

import TabsContainer from '../TabsContainer';
import { buttonTypeOptions, buttonVariantOptions } from '@components/Buttons/types';

const TWO_ITEMS = [
  { value: 'lorem', onPressItem: () => console.log('lorem') },
  { value: 'ipsum', onPressItem: () => console.log('ipsum') },
];

const THREE_ITEMS = [
  { value: 'lorem', onPressItem: () => console.log('lorem') },
  { value: 'ipsum', onPressItem: () => console.log('ipsum') },
  { value: 'dolor', onPressItem: () => console.log('dolor') },
];

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

storiesOf('Tabs', module).add('TabsContainer', () => (
  <SafeAreaView>
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.solidFaintDarkest,
        },
      ]}
    >
      <TabsContainer
        items={TWO_ITEMS}
        rounded={boolean('rounded', true)}
        active={{
          type: select('ActiveType', buttonTypeOptions, buttonTypeOptions[0]),
          variant: select('ActiveVariant', buttonVariantOptions, buttonVariantOptions[0]),
        }}
        inactive={{
          type: select('InactiveType', buttonTypeOptions, buttonTypeOptions[1]),
          variant: select('InactiveVariant', buttonVariantOptions, buttonVariantOptions[1]),
        }}
        onPress={() => console.log('value')}
      />
    </View>
    <View style={[styles.container, { marginTop: sizes.mini, backgroundColor: colors.solidBrightWhite }]}>
      <TabsContainer
        items={THREE_ITEMS}
        rounded={boolean('rounded', false)}
        active={{
          type: select('ActiveType', buttonTypeOptions, buttonTypeOptions[0]),
          variant: select('ActiveVariant', buttonVariantOptions, buttonVariantOptions[0]),
        }}
        inactive={{
          type: select('InactiveType', buttonTypeOptions, buttonTypeOptions[1]),
          variant: select('InactiveVariant', buttonVariantOptions, buttonVariantOptions[1]),
        }}
        onPress={() => console.log('value')}
      />
    </View>
  </SafeAreaView>
));

export {};
