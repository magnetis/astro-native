import React from 'react';
import { render } from '@testing-library/react-native';
import { colors as legacyColors } from '@magnetis/astro-galaxy-tokens';
import { colors, sizes } from '@magnetis/astro-tokens';

import { AlertIcon } from '@components/Icons';

import {
  getButtonHeight,
  getButtonHorizontalPadding,
  getLineHeight,
  getIcon,
  getIconProperties,
  getButtonProperties,
  getLoadingSize,
} from '../utils';

describe('Button/utils', () => {
  it('getButtonHeight', () => {
    expect(getButtonHeight('small')).toEqual({
      height: sizes.small,
    });
    expect(getButtonHeight('medium')).toEqual({
      height: sizes.large,
    });
    expect(getButtonHeight('large')).toEqual({
      height: sizes.larger,
    });
    expect(getButtonHeight('xlarge')).toEqual({
      height: sizes.great,
    });

    expect(getButtonHeight('small')).toEqual({ height: 32 });
    expect(getButtonHeight('medium')).toEqual({ height: 48 });
    expect(getButtonHeight('large')).toEqual({ height: 56 });
    expect(getButtonHeight('xlarge')).toEqual({ height: 64 });
  });

  it('getButtonHorizontalPadding', () => {
    expect(getButtonHorizontalPadding('small')).toEqual({ width: undefined, paddingHorizontal: sizes.micro });
    expect(getButtonHorizontalPadding('medium')).toEqual({ width: undefined, paddingHorizontal: sizes.tiny });
    expect(getButtonHorizontalPadding('large')).toEqual({ width: undefined, paddingHorizontal: sizes.smaller });
    expect(getButtonHorizontalPadding('xlarge')).toEqual({ width: undefined, paddingHorizontal: sizes.smaller });

    expect(getButtonHorizontalPadding('small', { isIconButton: true })).toEqual({
      width: sizes.small,
      paddingHorizontal: 0,
    });
    expect(getButtonHorizontalPadding('medium', { isIconButton: true })).toEqual({
      width: sizes.large,
      paddingHorizontal: 0,
    });
    expect(getButtonHorizontalPadding('large', { isIconButton: true })).toEqual({
      width: sizes.larger,
      paddingHorizontal: 0,
    });
    expect(getButtonHorizontalPadding('xlarge', { isIconButton: true })).toEqual({
      width: sizes.great,
      paddingHorizontal: 0,
    });
  });

  it('getLineHeight', () => {
    expect(getLineHeight('small')).toBe(18);
    expect(getLineHeight('medium')).toBe(21);
    expect(getLineHeight('large')).toBe(24);
    expect(getLineHeight('xlarge')).toBe(30);
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

  it('getIconProperties', () => {
    expect(getIconProperties('small')).toEqual({ iconSize: sizes.tiny, iconMargin: sizes.quark });
    expect(getIconProperties('medium')).toEqual({ iconSize: sizes.tiny, iconMargin: sizes.quark });
    expect(getIconProperties('large')).toEqual({ iconSize: sizes.smaller, iconMargin: sizes.nano });
    expect(getIconProperties('xlarge')).toEqual({ iconSize: sizes.small, iconMargin: sizes.nano });
  });

  describe('getButtonProperties', () => {
    it('primary', () => {
      expect(getButtonProperties('primary', 'solid')).toEqual({
        textColor: colors.solidBrightLightest,
        backgroundColor: colors.solidPrimaryMedium,
      });
      expect(getButtonProperties('primary', 'subtle')).toEqual({
        textColor: colors.solidPrimaryMedium,
        backgroundColor: colors.transparentPrimarySemitransparent,
      });
      expect(getButtonProperties('primary', 'outline')).toEqual({
        textColor: colors.solidPrimaryMedium,
        backgroundColor: 'transparent',
      });
      expect(getButtonProperties('primary', 'ghost')).toEqual({
        textColor: colors.solidPrimaryMedium,
        backgroundColor: 'transparent',
      });
    });

    it('secondary', () => {
      expect(getButtonProperties('secondary', 'solid')).toEqual({
        textColor: colors.solidBrightLightest,
        backgroundColor: colors.solidFaintDark,
      });
      expect(getButtonProperties('secondary', 'subtle')).toEqual({
        textColor: colors.solidFaintDark,
        backgroundColor: colors.transparentFaintSemitransparent,
      });
      expect(getButtonProperties('secondary', 'outline')).toEqual({
        textColor: colors.solidFaintDark,
        backgroundColor: 'transparent',
      });
      expect(getButtonProperties('secondary', 'ghost')).toEqual({
        textColor: colors.solidFaintDark,
        backgroundColor: 'transparent',
      });
    });

    it('outline', () => {
      expect(getButtonProperties('alert', 'solid')).toEqual({
        textColor: colors.solidBrightLightest,
        backgroundColor: colors.solidAlertMedium,
      });
      expect(getButtonProperties('alert', 'subtle')).toEqual({
        textColor: colors.solidAlertMedium,
        backgroundColor: colors.transparentAlertSemitransparent,
      });
      expect(getButtonProperties('alert', 'outline')).toEqual({
        textColor: colors.solidAlertMedium,
        backgroundColor: 'transparent',
      });
      expect(getButtonProperties('alert', 'ghost')).toEqual({
        textColor: colors.solidAlertMedium,
        backgroundColor: 'transparent',
      });
    });

    it('ghost', () => {
      expect(getButtonProperties('success', 'solid')).toEqual({
        textColor: colors.solidFaintDarkest,
        backgroundColor: colors.solidSuccessMedium,
      });
      expect(getButtonProperties('success', 'subtle')).toEqual({
        textColor: colors.solidSuccessDark,
        backgroundColor: colors.transparentSuccessSemitransparent,
      });
      expect(getButtonProperties('success', 'outline')).toEqual({
        textColor: colors.solidSuccessDark,
        backgroundColor: 'transparent',
      });
      expect(getButtonProperties('success', 'ghost')).toEqual({
        textColor: colors.solidSuccessDark,
        backgroundColor: 'transparent',
      });
    });

    it('inversed', () => {
      expect(getButtonProperties('inversed', 'solid')).toEqual({
        textColor: colors.solidFaintDarkest,
        backgroundColor: colors.solidBrightLightest,
      });
      expect(getButtonProperties('inversed', 'subtle')).toEqual({
        textColor: colors.solidBrightLightest,
        backgroundColor: colors.transparentBrightSemitransparent,
      });
      expect(getButtonProperties('inversed', 'outline')).toEqual({
        textColor: colors.solidBrightLightest,
        backgroundColor: 'transparent',
      });
      expect(getButtonProperties('inversed', 'ghost')).toEqual({
        textColor: colors.solidBrightLightest,
        backgroundColor: 'transparent',
      });
    });

    it('disabled', () => {
      expect(getButtonProperties('disabled', 'solid')).toEqual({
        textColor: colors.transparentFaintSoft,
        backgroundColor: colors.transparentFaintSemitransparent,
      });
      expect(getButtonProperties('disabled', 'subtle')).toEqual({
        textColor: colors.transparentFaintSoft,
        backgroundColor: colors.transparentFaintSemitransparent,
      });
      expect(getButtonProperties('disabled', 'outline')).toEqual({
        textColor: colors.transparentFaintSoft,
        backgroundColor: 'transparent',
      });
      expect(getButtonProperties('disabled', 'ghost')).toEqual({
        textColor: colors.transparentFaintSoft,
        backgroundColor: 'transparent',
      });
    });

    it('legacy', () => {
      expect(getButtonProperties('legacy', 'solid')).toEqual({
        textColor: colors.solidBrightLightest,
        backgroundColor: legacyColors.uranus500,
      });
      expect(getButtonProperties('legacy', 'subtle')).toEqual({
        textColor: colors.solidBrightLightest,
        backgroundColor: legacyColors.uranus500,
      });
      expect(getButtonProperties('legacy', 'outline')).toEqual({
        textColor: legacyColors.uranus500,
        backgroundColor: 'transparent',
      });
      expect(getButtonProperties('legacy', 'ghost')).toEqual({
        textColor: legacyColors.uranus500,
        backgroundColor: 'transparent',
      });
    });
  });

  it('getLoadingSize', () => {
    expect(getLoadingSize('small')).toBe('small');
    expect(getLoadingSize('medium')).toBe('small');
    expect(getLoadingSize('large')).toBe('large');
    expect(getLoadingSize('xlarge')).toBe('large');
  });
});
