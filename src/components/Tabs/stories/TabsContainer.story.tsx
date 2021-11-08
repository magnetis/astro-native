import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean } from '@storybook/addon-knobs';
import { colors, sizes } from '@magnetis/astro-tokens';

import TabsContainer from '../TabsContainer';

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
        inversed={boolean('inversed', true)}
        rounded
        onPress={() => console.log('value')}
      />
    </View>
    <View style={[styles.container, { marginTop: sizes.mini }]}>
      <TabsContainer items={THREE_ITEMS} />
    </View>
  </SafeAreaView>
));

export {};
