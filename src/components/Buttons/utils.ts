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

/**
 * Calculates button padding according to button size and if should have horizontal padding
 * @param size Valid **ButtonSize**
 * @param noHorizontalPadding When true, returns zero as horizontal padding
 */
export function getButtonPadding(size: ButtonSize, noHorizontalPadding?: boolean) {
  let paddingHorizontal = 38;
  let paddingVertical = 8;

  switch (size) {
    case 'very-small':
      paddingVertical = 5;
      paddingHorizontal = 20;
      break;
    case 'small':
      paddingVertical = 5;
      paddingHorizontal = 28;
      break;
    case 'large':
      paddingVertical = 5;
      paddingHorizontal = 28;
      break;
  }

  if (noHorizontalPadding) {
    paddingHorizontal = 0;
  }

  return { paddingHorizontal, paddingVertical };
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
 * Calculates button height according to button size
 * @param buttonSize Valid **ButtonSize**
 */
export function getButtonHeight(size: ButtonSize): number {
  switch (size) {
    case 'very-small':
      return getFontSize(size) * 2.5;
    default:
      return getFontSize(size) * 3;
  }
}

/**
 * Calculates button borderRadius according to button size
 * @param buttonSize Valid **ButtonSize**
 * @param noHorizontalPadding If button has horizontal padding
 */
export function getBorderRadius(size: ButtonSize, noHorizontalPadding: boolean): number {
  if (noHorizontalPadding) {
    return getFontSize(size) * 2;
  }

  switch (size) {
    case 'very-small':
      return 25;
    case 'small':
      return 16;
    case 'large':
      return 24;
    case 'medium':
    default:
      return 31;
  }
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
