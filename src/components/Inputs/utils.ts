import { colors } from '@magnetis/astro-galaxy-tokens';

const BLUR_LABEL_COLOR = colors.moon400;

const FOCUS_COLOR = colors.uranus500;
const ERROR_COLOR = colors.mars500;
const VALIDATED_COLOR = colors.earth400;

const DISABLED_TEXT_COLOR = colors.moon300;

const LABEL_FONT_SIZE = 12;
const LABEL_FONT_SIZE_LARGE = 16;

const LABEL_FOCUS_POSITION = 6;
const LABEL_BLUR_POSITION = 16;
const LABEL_FOCUS_POSITION_LARGE = 8;
const LABEL_BLUR_POSITION_LARGE = 18;

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

export function getLabelPosition({ expandLabel, large }: { expandLabel: boolean; large: boolean }) {
  if (large) {
    return expandLabel ? LABEL_BLUR_POSITION_LARGE : LABEL_FOCUS_POSITION_LARGE;
  }
  return expandLabel ? LABEL_BLUR_POSITION : LABEL_FOCUS_POSITION;
}

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
