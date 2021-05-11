import React from 'react';
import { colors } from '@magnetis/astro-tokens';

import { lato, latoBold } from '@tokens/fonts';
import { BaseTextProps } from './types';
import BaseText from './BaseText';

export interface SecondaryTextProps extends BaseTextProps {
  bold?: boolean;
}

function BaseSecondaryText({
  bold = false,
  color = colors.moon900,
  align = 'center',
  fontSize,
  children,
  ...props
}: SecondaryTextProps & { fontSize: number }) {
  const baseProps = {
    color,
    align,
    fontFamily: bold ? latoBold : lato,
    fontSize,
  };
  return (
    <BaseText {...props} {...baseProps}>
      {children}
    </BaseText>
  );
}

/**
 * Very small primary text
 *
 * - Font-family: Lato
 * - Size: 12px
 */
export function SecondaryTextVerySmall({ children, ...props }: SecondaryTextProps) {
  return (
    <BaseSecondaryText {...props} fontSize={12}>
      {children}
    </BaseSecondaryText>
  );
}

/**
 * Small primary text
 *
 * - Font-family: Lato
 * - Size: 14px
 */
export function SecondaryTextSmall({ children, ...props }: SecondaryTextProps) {
  return (
    <BaseSecondaryText {...props} fontSize={14}>
      {children}
    </BaseSecondaryText>
  );
}

/**
 * Medium primary text
 *
 * - Font-family: Lato
 * - Size: 16px
 */
export function SecondaryTextMedium({ children, ...props }: SecondaryTextProps) {
  return (
    <BaseSecondaryText {...props} fontSize={16}>
      {children}
    </BaseSecondaryText>
  );
}

/**
 * Large primary text
 *
 * - Font-family: Lato
 * - Size: 24px
 */
export function SecondaryTextLarge({ children, ...props }: SecondaryTextProps) {
  return (
    <BaseSecondaryText {...props} fontSize={24}>
      {children}
    </BaseSecondaryText>
  );
}
