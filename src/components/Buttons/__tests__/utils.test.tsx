import React from 'react';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { render } from '@testing-library/react-native';

import { AlertIcon } from '@components/Icons';

import {
  getButtonPadding,
  getIconSize,
  getBorderRadius,
  getLineHeight,
  getButtonMainColor,
  getButtonSecondaryColor,
  getIcon,
} from '../utils';

describe('Button/utils', () => {
  it('getButtonPadding', () => {
    let options = {
      noHorizontalPadding: false,
      hasIcon: false,
    };
    expect(getButtonPadding('very-small', options)).toEqual({ paddingVertical: 4, paddingHorizontal: 20 });
    expect(getButtonPadding('small', options)).toEqual({ paddingVertical: 8, paddingHorizontal: 26 });
    expect(getButtonPadding('medium', options)).toEqual({ paddingVertical: 8, paddingHorizontal: 46 });
    expect(getButtonPadding('large', options)).toEqual({ paddingVertical: 8, paddingHorizontal: 64 });

    options = {
      noHorizontalPadding: true,
      hasIcon: false,
    };
    expect(getButtonPadding('very-small', options)).toEqual({ paddingVertical: 4, paddingHorizontal: 4 });
    expect(getButtonPadding('small', options)).toEqual({ paddingVertical: 8, paddingHorizontal: 8 });
    expect(getButtonPadding('medium', options)).toEqual({ paddingVertical: 8, paddingHorizontal: 8 });
    expect(getButtonPadding('large', options)).toEqual({ paddingVertical: 8, paddingHorizontal: 8 });

    options = {
      noHorizontalPadding: false,
      hasIcon: true,
    };
    expect(getButtonPadding('very-small', options)).toEqual({ paddingVertical: 4, paddingHorizontal: 10 });
    expect(getButtonPadding('small', options)).toEqual({ paddingVertical: 8, paddingHorizontal: 13 });
    expect(getButtonPadding('medium', options)).toEqual({ paddingVertical: 8, paddingHorizontal: 23 });
    expect(getButtonPadding('large', options)).toEqual({ paddingVertical: 8, paddingHorizontal: 32 });
  });

  it('getIconSize', () => {
    expect(getIconSize('very-small')).toEqual({ width: 24, height: 24 });
    expect(getIconSize('small')).toEqual({ width: 28, height: 28 });
    expect(getIconSize('medium')).toEqual({ width: 32, height: 32 });
    expect(getIconSize('large')).toEqual({ width: 48, height: 48 });
  });

  it('getBorderRadius', () => {
    let options = {
      noHorizontalPadding: false,
      hasIcon: false,
    };
    expect(getBorderRadius('very-small', options)).toBe(16);
    expect(getBorderRadius('small', options)).toBe(22);
    expect(getBorderRadius('medium', options)).toBe(24);
    expect(getBorderRadius('large', options)).toBe(32);

    options = {
      noHorizontalPadding: true,
      hasIcon: false,
    };
    expect(getBorderRadius('very-small', options)).toBe(28);
    expect(getBorderRadius('small', options)).toBe(36);
    expect(getBorderRadius('medium', options)).toBe(40);
    expect(getBorderRadius('large', options)).toBe(56);

    options = {
      noHorizontalPadding: false,
      hasIcon: true,
    };
    expect(getBorderRadius('very-small', options)).toBe(16);
    expect(getBorderRadius('small', options)).toBe(22);
    expect(getBorderRadius('medium', options)).toBe(24);
    expect(getBorderRadius('large', options)).toBe(32);
  });

  it('getLineHeight', () => {
    expect(getLineHeight('very-small')).toBe(18);
    expect(getLineHeight('small')).toBe(21);
    expect(getLineHeight('medium')).toBe(24);
    expect(getLineHeight('large')).toBe(36);
  });

  it('getButtonMainColor', () => {
    expect(getButtonMainColor('venus')).toEqual(colors.venus400);
    expect(getButtonMainColor('uranus')).toEqual(colors.uranus500);
    expect(getButtonMainColor('mars')).toEqual(colors.mars500);
    expect(getButtonMainColor('earth')).toEqual(colors.earth400);

    expect(getButtonMainColor('venus', { outline: true })).toEqual(colors.venus400);
    expect(getButtonMainColor('uranus', { outline: true })).toEqual(colors.uranus500);
    expect(getButtonMainColor('mars', { outline: true })).toEqual(colors.mars500);
    expect(getButtonMainColor('earth', { outline: true })).toEqual(colors.earth600);
  });

  it('getButtonSecondaryColor', () => {
    expect(getButtonSecondaryColor('venus')).toEqual(colors.space100);
    expect(getButtonSecondaryColor('uranus')).toEqual(colors.space100);
    expect(getButtonSecondaryColor('mars')).toEqual(colors.space100);
    expect(getButtonSecondaryColor('earth')).toEqual(colors.moon900);
  });

  describe('getIcon', () => {
    it('when iconName is valid, returns Icon', () => {
      const Icon = getIcon('Alert');
      const { getByTestId: getIconByTestId } = render(<Icon testID="Icon" />);
      const { getByTestId } = render(<AlertIcon testID="Alert" />);

      expect(getIconByTestId('Icon').props.id).toEqual(getByTestId('Alert').props.id);
    });

    it('when iconName is not valid, returns null', () => {
      const Icon = getIcon('NotValidIconName');
      const { queryByTestId } = render(<Icon testID="NotValidIconName" />);

      expect(queryByTestId('Icon')).toBeNull();
    });
  });
});
