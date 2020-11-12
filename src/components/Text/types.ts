import { ReactNode } from 'react';
import { TextProps } from 'react-native';

interface BaseTextProps extends TextProps {
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  children: ReactNode;
}

export type { BaseTextProps };
