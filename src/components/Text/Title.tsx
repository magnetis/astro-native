import React from 'react';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { poppinsSemiBold } from '@tokens/fonts';
import type { BaseTextProps } from './types';
import BaseText from './BaseText';

function BaseTitle({
  color = colors.moon900,
  align = 'center',
  fontSize,
  children,
  ...props
}: BaseTextProps & { fontSize: number }) {
  const baseProps = {
    color,
    align,
    fontFamily: poppinsSemiBold,
    fontSize,
  };
  return (
    <BaseText {...props} {...baseProps}>
      {children}
    </BaseText>
  );
}

/**
 * Small title
 *
 * - Font-family: Poppins
 * - Size: 32px
 */
export function TitleSmall({ children, ...props }: BaseTextProps) {
  return (
    <BaseTitle {...props} fontSize={32}>
      {children}
    </BaseTitle>
  );
}

/**
 * Medium title
 *
 * - Font-family: Poppins
 * - Size: 40px
 */
export function TitleMedium({ children, ...props }: BaseTextProps) {
  return (
    <BaseTitle {...props} fontSize={40}>
      {children}
    </BaseTitle>
  );
}

/**
 * Large title
 *
 * - Font-family: Poppins
 * - Size: 48px
 */
export function TitleLarge({ children, ...props }: BaseTextProps) {
  return (
    <BaseTitle {...props} fontSize={48}>
      {children}
    </BaseTitle>
  );
}
