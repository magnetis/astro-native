import { Size } from '@tokens/sizes';
import { SecondaryTextLarge, SecondaryTextMedium, SecondaryTextSmall, SecondaryTextVerySmall } from './SecondaryText';

export function getSecondaryTextFromSize(size: Size) {
  return {
    'very-small': SecondaryTextVerySmall,
    small: SecondaryTextSmall,
    medium: SecondaryTextMedium,
    large: SecondaryTextLarge,
  }[size];
}
