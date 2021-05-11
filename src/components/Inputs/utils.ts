import { colors } from '@magnetis/astro-tokens';

const BLUR_BORDER_COLOR = colors.moon900;
const BLUR_LABEL_COLOR = colors.moon400;

const FOCUS_COLOR = colors.uranus500;
const ERROR_COLOR = colors.mars500;
const VALIDATED_COLOR = colors.earth400;

const DISABLED_BORDER_COLOR = colors.moon200;
const DISABLED_TEXT_COLOR = colors.moon300;
const DISABLED_BACKGROUND_COLOR = colors.moon100;
const ENABLED_BACKGROUND_COLOR = colors.space100;

const LABEL_FONT_SIZE = 12;
const LABEL_FONT_SIZE_LARGE = 16;

const LABEL_FOCUS_POSITION = 6;
const LABEL_BLUR_POSITION = 16;
const LABEL_FOCUS_POSITION_LARGE = 8;
const LABEL_BLUR_POSITION_LARGE = 18;

/**
 * Calculates input border color based on input status
 */
export function getInputBorderColor(status: {
  disabled: boolean;
  hasError: boolean;
  validated: boolean;
  hasFocus: boolean;
}) {
  if (status.disabled) return DISABLED_BORDER_COLOR;
  if (status.hasError) return ERROR_COLOR;
  if (status.validated) return VALIDATED_COLOR;
  if (status.hasFocus) return FOCUS_COLOR;
  return BLUR_BORDER_COLOR;
}

/**
 * Calculates input label color based on input status
 */
export function getInputLabelColor(status: {
  disabled: boolean;
  hasError: boolean;
  validated: boolean;
  hasFocus: boolean;
}) {
  if (status.disabled) return DISABLED_TEXT_COLOR;
  if (status.hasError) return ERROR_COLOR;
  if (status.validated) return VALIDATED_COLOR;
  if (status.hasFocus) return FOCUS_COLOR;
  return BLUR_LABEL_COLOR;
}

/**
 *  Calculates input background color based on input status
 */
export function getInputBackgroundColor({ disabled }: { disabled: boolean }) {
  return disabled ? DISABLED_BACKGROUND_COLOR : ENABLED_BACKGROUND_COLOR;
}

/**
 * Calculates input label position based on status and size
 */
export function getLabelPosition({ expandLabel, large }: { expandLabel: boolean; large: boolean }) {
  if (large) {
    return expandLabel ? LABEL_BLUR_POSITION_LARGE : LABEL_FOCUS_POSITION_LARGE;
  }
  return expandLabel ? LABEL_BLUR_POSITION : LABEL_FOCUS_POSITION;
}

/**
 * Calculate input label font size based on input status and size
 */
export function getInputLabelFontSize({
  expandLabel,
  large,
  baseSize,
}: {
  expandLabel: boolean;
  large: boolean;
  baseSize: number;
}) {
  if (expandLabel) {
    return baseSize;
  }

  return large ? LABEL_FONT_SIZE_LARGE : LABEL_FONT_SIZE;
}

interface FormatRawValueToCurrencyParams {
  /** Char to be used as decimal separator */
  decimalSeparator: string;
  /** Char to be used as milesimal separator */
  milesimalSeparator: string;
  /** Raw value*/
  rawValue: number;
  /** Use float number when set to true */
  enableCents: boolean;
}

/**
 * Formats a number to a string in currency format
 */
export function formatRawValueToCurrency({
  decimalSeparator,
  milesimalSeparator,
  rawValue,
  enableCents,
}: FormatRawValueToCurrencyParams) {
  let integerDigits = '';
  const signal = rawValue < 0 ? '-' : '';
  const absoluteValue = Math.abs(rawValue);
  const integerValue = String(absoluteValue - (absoluteValue - Math.floor(absoluteValue)));
  const _decimalSeparator = enableCents ? decimalSeparator : '';
  const decimalDigits = enableCents
    ? String(Number(absoluteValue - Math.floor(absoluteValue)).toFixed(2))
        .replace('0.', '')
        .padEnd(2, '0')
    : '';

  if (integerValue.length <= 3) {
    return `${signal}${integerValue}${_decimalSeparator}${decimalDigits}`;
  }

  for (let i = integerValue.length - 3; i > 0; i = i - 3) {
    if (i <= 3) {
      integerDigits = `${integerValue.substring(0, i)}${milesimalSeparator}${integerValue.substr(
        i,
        3
      )}${integerDigits}`;
    } else {
      integerDigits = `${milesimalSeparator}${integerValue.substr(i, 3)}${integerDigits}`;
    }
  }

  return `${signal}${integerDigits}${_decimalSeparator}${decimalDigits}`;
}
