import { getFixedHitSlop } from '../utils';

describe('components/utils', () => {
  it('getFixedHitSlop', () => {
    let options = {
      width: 16,
      height: 16,
    };
    expect(getFixedHitSlop(options)).toEqual({ top: 16, bottom: 16, right: 16, left: 16 });

    options = {
      width: 48,
      height: 16,
    };
    expect(getFixedHitSlop(options)).toEqual({ top: 16, bottom: 16, right: 0, left: 0 });

    options = {
      width: 64,
      height: 16,
    };
    expect(getFixedHitSlop(options)).toEqual({ top: 16, bottom: 16, right: 0, left: 0 });

    options = {
      width: 48,
      height: 48,
    };
    expect(getFixedHitSlop(options)).toEqual(0);
  });
});
