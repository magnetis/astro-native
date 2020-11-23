import type { StyleProp, TextProps, TextStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { Text } from 'react-native';

interface BaseTextProps extends TextProps {
  color: string;
  align: 'auto' | 'left' | 'right' | 'center' | 'justify';
  children: ReactNode;
  fontFamily: string;
  fontSize: number;
}

function BaseText({ color, align, fontFamily, fontSize, children, ...props }: BaseTextProps) {
  const style: StyleProp<TextStyle> = {
    ...(props.style as object),
    color,
    textAlign: align,
    fontFamily: fontFamily,
    fontSize: fontSize,
  };

  return (
    <Text {...props} style={style}>
      {children}
    </Text>
  );
}

export default BaseText;
