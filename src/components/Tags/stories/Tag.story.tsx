import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { select, text } from '@storybook/addon-knobs';
import { iconOptions } from '@root/storybook/options';

import { colors } from '@magnetis/astro-tokens';

import Tag from '../Tag';
import { TagTypeOptions, TagVariantOptions } from '../constants';

import type { TagType, TagVariant } from '../types';

storiesOf('Tags', module).add('Tag', () => (
  <SafeAreaView>
    <View style={styles.container}>
      <Tag
        type={select('type', TagTypeOptions, TagTypeOptions[0]) as TagType}
        variant={select('variant', TagVariantOptions, TagVariantOptions[0]) as TagVariant}
        text={text('text', 'tag label')}
      />
    </View>
    <View style={[styles.container, { backgroundColor: colors.solidBrightWhite }]}>
      <Tag
        type={select('type', TagTypeOptions, TagTypeOptions[0]) as TagType}
        variant={select('variant', TagVariantOptions, TagVariantOptions[0]) as TagVariant}
        text={text('text', 'tag label')}
        icon={select('icon', iconOptions, iconOptions[0])}
      />
    </View>
  </SafeAreaView>
));

export {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.solidFaintBlack,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
