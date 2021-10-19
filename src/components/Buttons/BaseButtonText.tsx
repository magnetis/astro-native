import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { getLineHeight } from '@components/Buttons/utils';
import { getFontSize } from '@tokens/fonts';
import { typography } from '@magnetis/astro-tokens';
import type { Size } from '@components/types';
import type { FontWeightType } from '@typings/styles';

interface BaseButtonTextProps extends TextProps {
  children: string;
  color: string;
  size?: Size;
}

function BaseButtonText({ size = 'medium', color, children }: BaseButtonTextProps) {
  const textStyles = {
    color,
    fontSize: getFontSize(size),
    lineHeight: getLineHeight(size),
  };
  return <Text style={[styles.text, textStyles]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    fontFamily: typography.fontFamilyBase,
    fontWeight: typography.fontWeightSemibold.toString() as FontWeightType,
    textAlign: 'center',
  },
});

export default BaseButtonText;
