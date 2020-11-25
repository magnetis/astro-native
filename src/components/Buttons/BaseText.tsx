import React from 'react';
import { getFontSize, getLineHeight } from './utils';
import { StyleSheet, Text, TextProps } from 'react-native';
import type { Colors } from '@magnetis/astro-galaxy-tokens';

import { poppinsSemiBold } from '@tokens/fonts';
import { ButtonSize } from './types';

interface BaseTextProps extends TextProps {
  size?: ButtonSize;
  color: Colors[keyof Colors];
  children: string;
}

function BaseText({ size = 'medium', color, children }: BaseTextProps) {
  const textStyles = {
    fontSize: getFontSize(size),
    lineHeight: getLineHeight(size),
    color,
  };
  return <Text style={[styles.text, textStyles]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: poppinsSemiBold,
    alignItems: 'center',
  },
});

export default BaseText;
export type { BaseTextProps };
