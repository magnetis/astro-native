import { colors } from '@magnetis/astro-tokens';

import { getFill } from '../utils';

describe('Icons/Utils', () => {
  describe('getFill', () => {
    it('when gradient is valid', () => {
      expect(getFill({ gradient: 'sombrero', color: colors.uranus500, id: 'ID' })).toEqual('url(#ID)');
    });
    it('when gradient is not valid', () => {
      expect(getFill({ gradient: undefined, color: colors.uranus500, id: 'ID' })).toEqual(colors.uranus500);
    });
  });
});
