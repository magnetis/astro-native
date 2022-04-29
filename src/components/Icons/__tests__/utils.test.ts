import { colors } from '@magnetis/astro-galaxy-tokens';

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
    it('when size default', () => {
      expect(getViewBox('smaller')).toEqual('0 0 24 24');
    });
    it('when size is diferent', () => {
      expect(getViewBox('small')).toEqual('0 0 32 32');
    });
  });

  describe('getSize', () => {
    it('when size default', () => {
      expect(getSize('smaller')).toEqual(24);
    });
    it('when size is diferent', () => {
      expect(getSize('small')).toEqual(32);
    });
  });
});
