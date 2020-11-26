import { getFontSize } from '../utils';

describe('tokens/utils', () => {
  it('getFontSize', () => {
    expect(getFontSize('very-small')).toBe(12);
    expect(getFontSize('small')).toBe(14);
    expect(getFontSize('medium')).toBe(16);
    expect(getFontSize('large')).toBe(24);
  });
});
