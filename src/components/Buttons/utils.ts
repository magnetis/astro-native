import { colors, sizes } from '@magnetis/astro-tokens';
import { colors as legacyColors } from '@magnetis/astro-galaxy-tokens';

import * as icons from '@components/Icons';
import { getFontSize } from '@tokens/fonts';

import type { ButtonVariant, ButtonProperties, IconProperties, ButtonType, LoadingSizes } from './types';
import type { Size } from '@components/types';

interface GetPropertiesOptionsParam {
  isIconButton: boolean;
}

/**
 * Calculates button padding according to button size and if should have horizontal padding
 * @param {Size} size Valid **Size**
 * @param {GetPropertiesOptionsParam} options Options object
 * @param options.isIconButton If button is icon button
 */
export function getButtonPadding(size: Size, options: GetPropertiesOptionsParam) {
  const { isIconButton } = options;

  const regularHorizontalPadding = {
    small: sizes.micro,
    medium: sizes.tiny,
    large: sizes.smaller,
    xlarge: sizes.smaller,
  };

  const regularVerticalPadding = {
    small: 10,
    medium: 17,
    large: 20,
    xlarge: 22,
  };

  return {
    paddingHorizontal: isIconButton ? regularVerticalPadding[size] : regularHorizontalPadding[size],
    paddingVertical: regularVerticalPadding[size],
  };
}

/**
 * Calculates button's text line-height based on size
 * @param {Size} size Valid **Size**
 */
export function getLineHeight(size: Size): number {
  return getFontSize(size) * 1.5;
}

/**
 * Recovers Icon component based on iconName
 * @param _iconName Valid **IconID**
 */
export function getIcon(_iconName: string) {
  const iconName = `${_iconName}Icon`;

  if (Object.keys(icons).includes(iconName)) {
    return (icons as { [key: string]: Function })[iconName];
  }

  return () => null;
}

/**
 * Defines button size based on size passed
 * @param {ButtonVariant} variant Valid **ButtonVariant**
 * @param {Size} size Valid **Size**
 */
export function getIconProperties(size: Size): IconProperties {
  return {
    small: { iconSize: sizes.tiny, iconMargin: sizes.quark },
    medium: { iconSize: sizes.tiny, iconMargin: sizes.quark },
    large: { iconSize: sizes.smaller, iconMargin: sizes.nano },
    xlarge: { iconSize: sizes.small, iconMargin: sizes.nano },
  }[size];
}

/**
 * Defines button text color and background color based on variant and type
 * @param {ButtonVariant} variant Valid **ButtonVariant**
 * @param {ButtonType} type Valid **ButtonType**
 */
export function getButtonProperties(variant: ButtonVariant = 'primary', type: ButtonType = 'solid'): ButtonProperties {
  return {
    primary: {
      solid: { textColor: colors.solidBrightLightest, backgroundColor: colors.solidPrimaryMedium },
      subtle: { textColor: colors.solidPrimaryMedium, backgroundColor: colors.transparentPrimarySemitransparent },
      outline: { textColor: colors.solidPrimaryMedium, backgroundColor: 'transparent' },
      ghost: { textColor: colors.solidPrimaryMedium, backgroundColor: 'transparent' },
    },
    secondary: {
      solid: { textColor: colors.solidBrightLightest, backgroundColor: colors.solidFaintDark },
      subtle: { textColor: colors.solidFaintDark, backgroundColor: colors.transparentFaintSemitransparent },
      outline: { textColor: colors.solidFaintDark, backgroundColor: 'transparent' },
      ghost: { textColor: colors.solidFaintDark, backgroundColor: 'transparent' },
    },
    alert: {
      solid: { textColor: colors.solidBrightLightest, backgroundColor: colors.solidAlertMedium },
      subtle: { textColor: colors.solidAlertMedium, backgroundColor: colors.transparentAlertSemitransparent },
      outline: { textColor: colors.solidAlertMedium, backgroundColor: 'transparent' },
      ghost: { textColor: colors.solidAlertMedium, backgroundColor: 'transparent' },
    },
    success: {
      solid: { textColor: colors.solidBrightLightest, backgroundColor: colors.solidSuccessMedium },
      subtle: { textColor: colors.solidSuccessDark, backgroundColor: colors.transparentSuccessSemitransparent },
      outline: { textColor: colors.solidSuccessDark, backgroundColor: 'transparent' },
      ghost: { textColor: colors.solidSuccessDark, backgroundColor: 'transparent' },
    },
    inversed: {
      solid: { textColor: colors.solidFaintLight, backgroundColor: colors.solidBrightLightest },
      subtle: { textColor: colors.solidBrightLightest, backgroundColor: colors.transparentBrightSemitransparent },
      outline: { textColor: colors.solidBrightLightest, backgroundColor: 'transparent' },
      ghost: { textColor: colors.solidBrightLightest, backgroundColor: 'transparent' },
    },
    disabled: {
      solid: { textColor: colors.transparentFaintSoft, backgroundColor: colors.transparentFaintSemitransparent },
      subtle: { textColor: colors.transparentFaintSoft, backgroundColor: colors.transparentFaintSemitransparent },
      outline: { textColor: colors.transparentFaintSoft, backgroundColor: 'transparent' },
      ghost: { textColor: colors.transparentFaintSoft, backgroundColor: 'transparent' },
    },
    legacy: {
      solid: { textColor: colors.solidBrightLightest, backgroundColor: legacyColors.uranus500 },
      subtle: { textColor: colors.solidBrightLightest, backgroundColor: legacyColors.uranus500 },
      outline: { textColor: colors.solidBrightLightest, backgroundColor: 'transparent' },
      ghost: { textColor: colors.solidBrightLightest, backgroundColor: 'transparent' },
    },
  }[variant][type];
}

/**
 * Defines button loading size
 * @param {Size} size Valid **Size**
 */
export function getLoadingSize(size: Size): LoadingSizes {
  return {
    small: 'small',
    medium: 'small',
    large: 'large',
    xlarge: 'large',
  }[size] as LoadingSizes;
}
