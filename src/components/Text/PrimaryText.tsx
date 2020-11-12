import React from 'react';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { poppins, poppinsBold, poppinsSemiBold } from '@tokens/fonts';
import { BaseTextProps } from './types';
import BaseText from './BaseText';

export interface PrimaryTextProps extends BaseTextProps {
  semiBold?: boolean;
  bold?: boolean;
}

function BasePrimatyText({
  semiBold = false,
  bold = false,
  color = colors.moon900,
  align = 'center',
  fontSize,
  children,
  ...props
}: PrimaryTextProps & { fontSize: number }) {
  const baseProps = {
    color,
    align,
    fontFamily: bold ? poppinsBold : semiBold ? poppinsSemiBold : poppins,
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
 * - Font-family: Poppins
 * - Size: 12px
 */
export function PrimaryTextVerySmall({ children, ...props }: PrimaryTextProps) {
  return (
    <BasePrimatyText {...props} fontSize={12}>
      {children}
    </BasePrimatyText>
  );
}

/**
 * Small primary text
 *
 * - Font-family: Poppins
 * - Size: 14px
 */
export function PrimaryTextSmall({ children, ...props }: PrimaryTextProps) {
  return (
    <BasePrimatyText {...props} fontSize={14}>
      {children}
    </BasePrimatyText>
  );
}

/**
 * Medium primary text
 *
 * - Font-family: Poppins
 * - Size: 16px
 */
export function PrimaryTextMedium({ children, ...props }: PrimaryTextProps) {
  return (
    <BasePrimatyText {...props} fontSize={16}>
      {children}
    </BasePrimatyText>
  );
}

/**
 * Large primary text
 *
 * - Font-family: Poppins
 * - Size: 24px
 */
export function PrimaryTextLarge({ children, ...props }: PrimaryTextProps) {
  return (
    <BasePrimatyText {...props} fontSize={24}>
      {children}
    </BasePrimatyText>
  );
}
