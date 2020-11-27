import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import type { Colors } from '@magnetis/astro-galaxy-tokens';

import { getLineHeight } from './utils';
import { ButtonSize } from './types';
import { poppinsSemiBold } from '@tokens/fonts';
import { getFontSize } from '@tokens/utils';

interface BaseButtonTextProps extends TextProps {
  size?: ButtonSize;
  color: Colors[keyof Colors];
  children: string;
}

function BaseButtonText({ size = 'medium', color, children }: BaseButtonTextProps) {
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

export default BaseButtonText;
export type { BaseButtonTextProps };
