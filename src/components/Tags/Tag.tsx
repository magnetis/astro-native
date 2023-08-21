import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { radius, sizes, typography } from '@magnetis/astro-tokens';

import { getTagIcon, getTagProperties } from './utils';

import type { IconID } from '@components/Icons';
import type { TagType, TagVariant } from './types';

export type TagProps = {
  variant?: TagVariant;
  type?: TagType;
  testID?: string;
  icon?: IconID;
  text: string;
};

/**
 * A customizable tag component.
 *
 * @param {TagProps} props - The props for the Tag.
 * @param {TagVariant} props.variant - The variant of the Tag.
 * @param {TagType} props.type - The type of the Tag.
 * @param {TagProps} props.text - The text for the Tag.
 * @param {TagProps} props.icon - The icon for the Tag.
 * @param {testID} props.testID - Test ID for testing purposes.
 *
 * @returns {JSX.Element} The rendered Tag component.
 * @example
 * <Tag type='default' variant='primary' text='tag label' />
 */

function Tag({ variant = 'neutral', type = 'default', text, testID = 'Tag', icon }: TagProps) {
  const { backgroundColor, color } = getTagProperties(variant, type);

  const Icon = getTagIcon(icon!);

  return (
    <View style={[styles.container, { backgroundColor }]} testID={testID}>
      {icon && (
        <View style={styles.iconStyle}>
          <Icon size={sizes.mini} color={color} testID={`${testID}.Icon`} />
        </View>
      )}
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        style={[styles.fontStyle, { color, marginRight: icon ? sizes.quark : 0 }]}
      >
        {text}
      </Text>
    </View>
  );
}

export default Tag;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: sizes.vast,
    height: sizes.smaller,
    borderRadius: radius.mini,
    paddingHorizontal: sizes.nano,
  },
  fontStyle: {
    fontSize: typography.fontSizeMini,
    fontFamily: 'Lato-Bold',
    includeFontPadding: false,
  },
  iconStyle: {
    marginRight: sizes.quark,
  },
});
