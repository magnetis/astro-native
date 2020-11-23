import React from 'react';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { render } from '@testing-library/react-native';

import { AlertIcon } from '@components/Icons';

import {
  getButtonHeight,
  getButtonPadding,
  getFontSize,
  getIconSize,
  getBorderRadius,
  getLineHeight,
  getButtonMainColor,
  getButtonSecondaryColor,
  getIcon,
} from '../utils';

describe('Button/utils', () => {
  it('getFontSize', () => {
    expect(getFontSize('very-small')).toBe(12);
    expect(getFontSize('small')).toBe(14);
    expect(getFontSize('medium')).toBe(16);
    expect(getFontSize('large')).toBe(24);
  });

  it('getButtonPadding', () => {
    expect(getButtonPadding('very-small')).toEqual({ paddingVertical: 5, paddingHorizontal: 20 });
    expect(getButtonPadding('small')).toEqual({ paddingVertical: 5, paddingHorizontal: 28 });
    expect(getButtonPadding('medium')).toEqual({ paddingVertical: 8, paddingHorizontal: 38 });
    expect(getButtonPadding('large')).toEqual({ paddingVertical: 5, paddingHorizontal: 28 });

    expect(getButtonPadding('very-small', true)).toEqual({ paddingVertical: 5, paddingHorizontal: 0 });
    expect(getButtonPadding('small', true)).toEqual({ paddingVertical: 5, paddingHorizontal: 0 });
    expect(getButtonPadding('medium', true)).toEqual({ paddingVertical: 8, paddingHorizontal: 0 });
    expect(getButtonPadding('large', true)).toEqual({ paddingVertical: 5, paddingHorizontal: 0 });
  });

  it('getIconSize', () => {
    expect(getIconSize('very-small')).toEqual({ width: 24, height: 24 });
    expect(getIconSize('small')).toEqual({ width: 28, height: 28 });
    expect(getIconSize('medium')).toEqual({ width: 32, height: 32 });
    expect(getIconSize('large')).toEqual({ width: 48, height: 48 });
  });

  it('getButtonHeight', () => {
    expect(getButtonHeight('very-small')).toBe(30);
    expect(getButtonHeight('small')).toBe(42);
    expect(getButtonHeight('medium')).toBe(48);
    expect(getButtonHeight('large')).toBe(72);
  });

  it('getBorderRadius', () => {
    expect(getBorderRadius('very-small', false)).toBe(25);
    expect(getBorderRadius('small', false)).toBe(16);
    expect(getBorderRadius('medium', false)).toBe(31);
    expect(getBorderRadius('large', false)).toBe(24);

    expect(getBorderRadius('very-small', true)).toBe(24);
    expect(getBorderRadius('small', true)).toBe(28);
    expect(getBorderRadius('medium', true)).toBe(32);
    expect(getBorderRadius('large', true)).toBe(48);
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
    expect(getButtonMainColor(null)).toEqual(colors.uranus500);

    expect(getButtonMainColor('venus', { outline: true })).toEqual(colors.venus400);
    expect(getButtonMainColor('uranus', { outline: true })).toEqual(colors.uranus500);
    expect(getButtonMainColor('mars', { outline: true })).toEqual(colors.mars500);
    expect(getButtonMainColor('earth', { outline: true })).toEqual(colors.earth600);
    expect(getButtonMainColor(null, { outline: true })).toEqual(colors.uranus500);
  });

  it('getButtonSecondaryColor', () => {
    expect(getButtonSecondaryColor('venus')).toEqual(colors.space100);
    expect(getButtonSecondaryColor('uranus')).toEqual(colors.space100);
    expect(getButtonSecondaryColor('mars')).toEqual(colors.space100);
    expect(getButtonSecondaryColor('earth')).toEqual(colors.moon900);
    expect(getButtonSecondaryColor(null)).toEqual(colors.space100);
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
