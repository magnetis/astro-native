import { colors } from '@magnetis/astro-galaxy-tokens';
import {
  formatRawValueToCurrency,
  getInputBackgroundColor,
  getInputBorderColor,
  getInputLabelColor,
  getInputLabelFontSize,
  getLabelPosition,
} from '../utils';

describe('Inputs/utils', () => {
  describe('getInputBorderColor', () => {
    it('when disabled is true', () => {
      expect(
        getInputBorderColor({
          disabled: true,
          hasError: false,
          validated: false,
          hasFocus: false,
        })
      ).toEqual(colors.moon200);
    });
    it('when hasError is true', () => {
      expect(
        getInputBorderColor({
          disabled: false,
          hasError: true,
          validated: false,
          hasFocus: false,
        })
      ).toEqual(colors.mars500);
    });
    it('when validated is true', () => {
      expect(
        getInputBorderColor({
          disabled: false,
          hasError: false,
          validated: true,
          hasFocus: false,
        })
      ).toEqual(colors.earth400);
    });
    it('when hasFocus is true', () => {
      expect(
        getInputBorderColor({
          disabled: false,
          hasError: false,
          validated: false,
          hasFocus: true,
        })
      ).toEqual(colors.uranus500);
    });
    it('when every status is false', () => {
      expect(
        getInputBorderColor({
          disabled: false,
          hasError: false,
          validated: false,
          hasFocus: false,
        })
      ).toEqual(colors.moon900);
    });
  });

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

  describe('getInputBackgroundColor', () => {
    it('when disabled is true', () => {
      expect(getInputBackgroundColor({ disabled: true })).toEqual(colors.moon100);
    });
    it('when disabled is false', () => {
      expect(getInputBackgroundColor({ disabled: false })).toEqual(colors.space100);
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

  describe('formatRawValueToCurrency', () => {
    describe('when enableCents is true', () => {
      it('returns 987.612.345,67 when rawValue is 987612345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: true,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: 987612345.67,
          })
        ).toEqual('987.612.345,67');
      });

      it('returns 12.345,67 when rawValue is 12345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: true,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: 12345.67,
          })
        ).toEqual('12.345,67');
      });

      it('returns 345,67 when rawValue is 345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: true,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: 345.67,
          })
        ).toEqual('345,67');
      });

      it('returns 0,67 when rawValue is 0.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: true,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: 0.67,
          })
        ).toEqual('0,67');
      });

      it('returns 0,00 when rawValue is 0', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: true,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: 0,
          })
        ).toEqual('0,00');
      });

      it('returns -987.612.345,67 when rawValue is -987612345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: true,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: -987612345.67,
          })
        ).toEqual('-987.612.345,67');
      });

      it('returns -12.345,67 when rawValue is -12345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: true,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: -12345.67,
          })
        ).toEqual('-12.345,67');
      });

      it('returns -345,67 when rawValue is -345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: true,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: -345.67,
          })
        ).toEqual('-345,67');
      });

      it('returns -0,67 when rawValue is -0.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: true,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: -0.67,
          })
        ).toEqual('-0,67');
      });
    });

    describe('when enableCents is false', () => {
      it('returns 987.612.345 when rawValue is 987612345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: false,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: 987612345.67,
          })
        ).toEqual('987.612.345');
      });

      it('returns 12.345 when rawValue is 12345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: false,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: 12345.67,
          })
        ).toEqual('12.345');
      });

      it('returns 345 when rawValue is 345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: false,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: 345.67,
          })
        ).toEqual('345');
      });

      it('returns 0 when rawValue is 0.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: false,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: 0.67,
          })
        ).toEqual('0');
      });

      it('returns 0 when rawValue is 0', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: false,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: 0,
          })
        ).toEqual('0');
      });

      it('returns -987.612.345 when rawValue is -987612345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: false,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: -987612345.67,
          })
        ).toEqual('-987.612.345');
      });

      it('returns -12.345 when rawValue is -12345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: false,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: -12345.67,
          })
        ).toEqual('-12.345');
      });

      it('returns -345 when rawValue is -345.67', () => {
        expect(
          formatRawValueToCurrency({
            enableCents: false,
            decimalSeparator: ',',
            milesimalSeparator: '.',
            rawValue: -345.67,
          })
        ).toEqual('-345');
      });
    });
  });
});
