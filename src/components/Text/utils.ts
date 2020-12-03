import { Size } from '@tokens/sizes';
import { SecondaryTextLarge, SecondaryTextMedium, SecondaryTextSmall, SecondaryTextVerySmall } from './SecondaryText';

/**
 * Returns appropriate SecondaryText component based on Size
 * @param size Size token value
 */
export function getSecondaryTextFromSize(size: Size) {
  return {
    'very-small': SecondaryTextVerySmall,
    small: SecondaryTextSmall,
    medium: SecondaryTextMedium,
    large: SecondaryTextLarge,
  }[size];
}
