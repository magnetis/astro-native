import { colors } from '@magnetis/astro-galaxy-tokens';
import { sizes } from '@magnetis/astro-tokens';

import { getFill, getSize, getViewBox } from '../utils';

describe('Icons/Utils', () => {
  describe('getFill', () => {
    it('when gradient is valid', () => {
      expect(getFill({ gradient: 'sombrero', color: colors.uranus500, id: 'ID' })).toEqual('url(#ID)');
    });
    it('when gradient is not valid', () => {
      expect(getFill({ gradient: undefined, color: colors.uranus500, id: 'ID' })).toEqual(colors.uranus500);
    });
  });

  describe('getViewBox', () => {
    it('when size is sizes.smaller', () => {
      expect(getViewBox(sizes.smaller)).toEqual('0 0 24 24');
    });
    it('when size is another number', () => {
      expect(getViewBox(32)).toEqual('0 0 32 32');
    });
  });

  describe('getSize', () => {
    it('when size is sizes.smaller', () => {
      expect(getSize(sizes.smaller)).toEqual(24);
    });
    it('when size is another number', () => {
      expect(getSize(32)).toEqual(32);
    });
  });
});
