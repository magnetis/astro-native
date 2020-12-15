import { ReactElement } from 'react';
import { Colors, colors } from '@magnetis/astro-galaxy-tokens';

import { ButtonColor, ButtonSize } from './types';
import * as icons from '@components/Icons';
import { getFontSize } from '@tokens/utils';
import {
  PrimaryTextLarge,
  PrimaryTextMedium,
  PrimaryTextSmall,
  PrimaryTextVerySmall,
  SecondaryTextLarge,
  SecondaryTextMedium,
  SecondaryTextSmall,
  SecondaryTextVerySmall,
} from '@components/Text';

interface getPropertiesOptionsParam {
  noHorizontalPadding: boolean;
  hasIcon: boolean;
}

/**
 * Calculates button padding according to button size and if should have horizontal padding
 * @param size Valid **ButtonSize**
 * @param options Options object
 * @param options.noHorizontalPadding If button should have horizontal padding
 * @param options.hasIcon If button has an Icon
 */
export function getButtonPadding(size: ButtonSize, options: getPropertiesOptionsParam) {
  const { noHorizontalPadding, hasIcon } = options;
  const noHorizontalPaddingValues = {
    'very-small': 4,
    small: 8,
    medium: 8,
    large: 8,
  };
  const regularHorizontalPadding = {
    'very-small': 20,
    small: 26,
    medium: 46,
    large: 64,
  };
  const regularVerticalPadding = {
    'very-small': 4,
    small: 8,
    medium: 8,
    large: 8,
  };

  if (noHorizontalPadding) {
    return { paddingHorizontal: noHorizontalPaddingValues[size], paddingVertical: regularVerticalPadding[size] };
  }

  return {
    paddingHorizontal: regularHorizontalPadding[size] / (hasIcon ? 2 : 1),
    paddingVertical: regularVerticalPadding[size],
  };
}

/**
 * Calculates button icon width and height according to button size
 * @param buttonSize Valid **ButtonSize**
 */
export function getIconSize(buttonSize: ButtonSize): { width: number; height: number } {
  const size = getFontSize(buttonSize) * 2;

  return { width: size, height: size };
}

/**
 * Calculates button borderRadius according to button size
 * @param buttonSize Valid **ButtonSize**
 * @param options Options object
 * @param options.noHorizontalPadding If button should have horizontal padding
 * @param options.hasIcon If button has an Icon
 */
export function getBorderRadius(size: ButtonSize, options: getPropertiesOptionsParam): number {
  const padding = getButtonPadding(size, options).paddingVertical;
  const fontSize = getFontSize(size);

  if (options.noHorizontalPadding) {
    return padding + fontSize * 2;
  }

  return padding + fontSize;
}

/**
 * Calculates button's text line-height based on size
 * @param size Valid **ButtonSize**
 */
export function getLineHeight(size: ButtonSize): number {
  return getFontSize(size) * 1.5;
}

/**
 * Checks button's main color based on base color and is its an outline button
 * @param color Valid **ButtonColor**
 */
export function getButtonMainColor(
  color: ButtonColor,
  { outline }: { outline?: boolean } = { outline: false }
): Colors[keyof Colors] {
  switch (color) {
    case 'earth':
      return outline ? colors.earth600 : colors.earth400;
    case 'mars':
      return colors.mars500;
    case 'venus':
      return colors.venus400;
    default:
      return colors.uranus500;
  }
}

/**
 * Checks button's secondary color based on base color
 * @param color Valid **ButtonColor**
 */
export function getButtonSecondaryColor(color: ButtonColor): Colors[keyof Colors] {
  switch (color) {
    case 'earth':
      return colors.moon900;
    default:
      return colors.space100;
  }
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
 * Checks if provided component is a Primary or Secondary text component
 * @param component The component to be checked
 */
export function isValidTextComponent(component: ReactElement) {
  return (
    component.type === PrimaryTextVerySmall ||
    component.type === PrimaryTextSmall ||
    component.type === PrimaryTextMedium ||
    component.type === PrimaryTextLarge ||
    component.type === SecondaryTextVerySmall ||
    component.type === SecondaryTextSmall ||
    component.type === SecondaryTextMedium ||
    component.type === SecondaryTextLarge
  );
}
