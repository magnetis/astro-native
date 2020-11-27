import { colors } from '@magnetis/astro-galaxy-tokens';
import {
  getInputBackgroundColor,
  getInputBorderColor,
  getInputLabelColor,
  getInputLabelFontSize,
  getLabelPosition,
} from '../utils';

describe('Inputs/utils', () => {
  describe('getInputLabelColor', () => {
    it('when disabled is true', () => {
      expect(
        getInputLabelColor({
          disabled: true,
          hasError: false,
          validated: false,
          hasFocus: false,
        })
      ).toEqual(colors.moon300);
    });
    it('when hasError is true', () => {
      expect(
        getInputLabelColor({
          disabled: false,
          hasError: true,
          validated: false,
          hasFocus: false,
        })
      ).toEqual(colors.mars500);
    });
    it('when validated is true', () => {
      expect(
        getInputLabelColor({
          disabled: false,
          hasError: false,
          validated: true,
          hasFocus: false,
        })
      ).toEqual(colors.earth400);
    });
    it('when hasFocus is true', () => {
      expect(
        getInputLabelColor({
          disabled: false,
          hasError: false,
          validated: false,
          hasFocus: true,
        })
      ).toEqual(colors.uranus500);
    });
    it('when every status is false', () => {
      expect(
        getInputLabelColor({
          disabled: false,
          hasError: false,
          validated: false,
          hasFocus: false,
        })
      ).toEqual(colors.moon400);
    });
  });

  describe('getLabelPosition', () => {
    it('when expandLabel is true  and large is true', () => {
      expect(getLabelPosition({ expandLabel: true, large: true })).toBe(18);
    });
    it('when expandLabel is true  and large is false', () => {
      expect(getLabelPosition({ expandLabel: true, large: false })).toBe(16);
    });
    it('when expandLabel is false  and large is true', () => {
      expect(getLabelPosition({ expandLabel: false, large: true })).toBe(8);
    });
    it('when expandLabel is false  and large is false', () => {
      expect(getLabelPosition({ expandLabel: false, large: false })).toBe(6);
    });
  });

  describe('getInputLabelFontSize', () => {
    it('when expandLabel is true, returns provided baseSize', () => {
      expect(getInputLabelFontSize({ expandLabel: true, large: false, baseSize: 18 })).toEqual(18);
    });
    it('when expandLabel is false and large is true', () => {
      expect(getInputLabelFontSize({ expandLabel: false, large: true, baseSize: 16 })).toEqual(16);
    });
    it('when expandLabel is false and large is false', () => {
      expect(getInputLabelFontSize({ expandLabel: false, large: false, baseSize: 16 })).toEqual(12);
    });
  });
});
