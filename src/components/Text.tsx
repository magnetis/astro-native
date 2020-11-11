import type { ReactNode } from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { poppins, lato, latoBold, poppinsBold, poppinsSemiBold } from '@tokens/fonts';

interface BaseTextProps extends TextProps {
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  children: ReactNode;
}

interface PrimaryTextProps extends BaseTextProps {
  semiBold?: boolean;
  bold?: boolean;
}

interface SecondaryTextProps extends BaseTextProps {
  bold?: boolean;
}

// PRIMARY TEXT
const BasePrimaryText = styled.Text<PrimaryTextProps>`
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  font-family: ${(props) => (props.bold ? poppinsBold : props.semiBold ? poppinsSemiBold : poppins)};
`;

BasePrimaryText.defaultProps = {
  bold: false,
  semiBold: false,
  align: 'center',
  color: colors.moon900,
};

/**
 * Very small primary text
 *
 * - Font-family: Poppins
 * - Size: 12px
 */
const PrimaryTextVerySmall = styled(BasePrimaryText)`
  font-size: 12px;
`;

/**
 * Small primary text
 *
 * - Font-family: Poppins
 * - Size: 14px
 */
const PrimaryTextSmall = styled(BasePrimaryText)`
  font-size: 14px;
`;

/**
 * Medium primary text
 *
 * - Font-family: Poppins
 * - Size: 16px
 */
const PrimaryTextMedium = styled(BasePrimaryText)`
  font-size: 16px;
`;

/**
 * Large primary text
 *
 * - Font-family: Poppins
 * - Size: 24px
 */
const PrimaryTextLarge = styled(BasePrimaryText)`
  font-size: 24px;
`;

// SECONDARY TEXT
const BaseSecondaryText = styled.Text<SecondaryTextProps>`
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  font-family: ${(props) => (props.bold ? latoBold : lato)};
`;

BaseSecondaryText.defaultProps = {
  bold: false,
  align: 'center',
  color: colors.moon900,
};

/**
 * Very small text
 *
 * - Font-family: Lato
 * - Size: 12px
 */
const SecondaryTextVerySmall = styled(BaseSecondaryText)`
  font-size: 12px;
`;

/**
 * Small text
 *
 * - Font-family: Lato
 * - Size: 14px
 */
const SecondaryTextSmall = styled(BaseSecondaryText)`
  font-size: 14px;
`;

/**
 * Medium text
 *
 * - Font-family: Lato
 * - Size: 16px
 */
const SecondaryTextMedium = styled(BaseSecondaryText)`
  font-size: 16px;
`;

/**
 * Large text
 *
 * - Font-family: Lato
 * - Size: 24px
 */
const SecondaryTextLarge = styled(BaseSecondaryText)`
  font-size: 24px;
`;

export type { PrimaryTextProps, SecondaryTextProps };

export {
  PrimaryTextVerySmall,
  PrimaryTextSmall,
  PrimaryTextMedium,
  PrimaryTextLarge,
  SecondaryTextVerySmall,
  SecondaryTextSmall,
  SecondaryTextMedium,
  SecondaryTextLarge,
};
