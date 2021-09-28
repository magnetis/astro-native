import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean } from '@storybook/addon-knobs';
import { colors, sizes } from '@magnetis/astro-tokens';

import ButtonsGroup from '../ButtonsGroup';

const ITEMS = [
  { value: 'lorem', onPressItem: () => console.log('lorem') },
  { value: 'ipsum', onPressItem: () => console.log('ipsum') },
  { value: 'dolor', onPressItem: () => console.log('dolor') },
];

storiesOf('Buttons Group', module).add('Buttons Group', () => (
  <SafeAreaView>
    <View style={{ backgroundColor: colors.solidFaintDarkest }}>
      <ButtonsGroup items={ITEMS} inversed={boolean('inversed', true)} onPress={() => console.log('value')} />
    </View>
    <View style={{ marginTop: sizes.mini }}>
      <ButtonsGroup items={ITEMS} />
    </View>
  </SafeAreaView>
));

export {};
