import { typography } from '@magnetis/astro-tokens';
import { getFontSize } from '../fonts';

describe('tokens/utils', () => {
  it('getFontSize', () => {
    expect(getFontSize('small')).toBe(typography.fontSizeMicro);
    expect(getFontSize('medium')).toBe(typography.fontSizeMini);
    expect(getFontSize('large')).toBe(typography.fontSizeSmaller);
    expect(getFontSize('xlarge')).toBe(typography.fontSizeMedium);
  });
});
