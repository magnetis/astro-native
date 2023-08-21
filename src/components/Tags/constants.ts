import { colors } from '@magnetis/astro-tokens';
import type { TagProperties, TagType, TagVariant } from './types';

export const TagTypeOptions = ['default', 'subtle'] as const;

export const TagVariantOptions = ['neutral', 'inversed', 'primary', 'alert', 'success', 'warning', 'disabled'] as const;

export const TAG_PROPERTIES: Record<TagVariant, Record<TagType, TagProperties>> = {
  neutral: {
    default: { color: colors.solidFaintLight, backgroundColor: colors.solidBrightLight },
    subtle: { color: colors.solidFaintLight, backgroundColor: colors.solidBrightLighter },
  },
  inversed: {
    default: { color: colors.solidBrightDark, backgroundColor: colors.solidFaintDark },
    subtle: { color: colors.solidBrightDark, backgroundColor: colors.solidFaintDarker },
  },
  primary: {
    default: { color: colors.solidPrimaryDark, backgroundColor: colors.solidPrimaryLight },
    subtle: { color: colors.solidPrimaryDark, backgroundColor: colors.solidPrimaryLightest },
  },
  alert: {
    default: { color: colors.solidAlertDarkest, backgroundColor: colors.solidAlertLight },
    subtle: { color: colors.solidAlertDarkest, backgroundColor: colors.solidAlertLightest },
  },
  success: {
    default: { color: colors.solidSuccessDarkest, backgroundColor: colors.solidSuccessLight },
    subtle: { color: colors.solidSuccessDarkest, backgroundColor: colors.solidSuccessLightest },
  },
  warning: {
    default: { color: colors.solidWarningDarkest, backgroundColor: colors.solidWarningLight },
    subtle: { color: colors.solidWarningDarkest, backgroundColor: colors.solidWarningLightest },
  },
  disabled: {
    default: { color: colors.solidBrightMedium, backgroundColor: colors.solidBrightLighter },
    subtle: { color: colors.solidFaintMedium, backgroundColor: colors.solidFaintDarker },
  },
};
