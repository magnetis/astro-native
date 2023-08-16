import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { colors, sizes, typography } from '@magnetis/astro-tokens';
import { select } from '@storybook/addon-knobs';

import Divider from '../Divider';
import { DividerOrientationOptions, DividerThicknessOptions, DividerTypeOptions } from '../constants';

import type { DividerThickness } from '../types';
import type { FontWeightType } from '@typings/styles';

storiesOf('Divider', module).add('Divider', () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ ...styles.view, backgroundColor: colors.solidFaintDarker }}>
      <Text style={styles.text}>Divider with Inverse Type</Text>
      <Divider
        orientation={select('orientation', DividerOrientationOptions, DividerOrientationOptions[0])}
        type="inverse"
        thickness={select('thickness', DividerThicknessOptions, DividerThicknessOptions[0]) as DividerThickness}
      />
    </View>
    <View style={styles.view}>
      <Divider
        orientation={select('orientation', DividerOrientationOptions, DividerOrientationOptions[0])}
        type={select('type', DividerTypeOptions, DividerTypeOptions[0])}
        thickness={select('thickness', DividerThicknessOptions, DividerThicknessOptions[0]) as DividerThickness}
      />
    </View>
  </SafeAreaView>
));

const styles = StyleSheet.create({
  text: {
    color: colors.solidBrightLightest,
    textAlign: 'left',
    fontSize: typography.fontSizeMedium,
    fontFamily: typography.fontFamilyBase,
    fontWeight: typography.fontWeightSemibold.toString() as FontWeightType,
    paddingTop: sizes.small,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export {};
