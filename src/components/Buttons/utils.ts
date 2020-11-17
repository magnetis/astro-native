import { colors } from '@magnetis/astro-galaxy-tokens';
import { ButtonColor, ButtonSize } from './types';

export function getFontSize(size: ButtonSize): number {
  switch (size) {
    case 'very-small':
      return 12;
    case 'small':
      return 14;
    case 'large':
      return 24;
    case 'medium':
    default:
      return 16;
  }
}

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

export function getIconSize(buttonSize: ButtonSize): { width: number; height: number } {
  const size = getFontSize(buttonSize) * 2;

  return { width: size, height: size };
}

export function getButtonHeight(size: ButtonSize): number {
  switch (size) {
    case 'very-small':
      return getFontSize(size) * 2.5;
    default:
      return getFontSize(size) * 3;
  }
}

export function getBorderRadius(size: ButtonSize): number {
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

export function getLineHeight(size: ButtonSize): number {
  return getFontSize(size) * 1.5;
}

export function getButtonMainColor(
  color: ButtonColor,
  { outline }: { outline?: boolean } = { outline: false }
): string {
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

export function getButtonSecondaryColor(color: ButtonColor): string {
  switch (color) {
    case 'earth':
      return colors.moon900;
    default:
      return colors.space100;
  }
}
