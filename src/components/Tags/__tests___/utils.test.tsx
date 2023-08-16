import React from 'react';

import { colors } from '@magnetis/astro-tokens';
import { ArrowUpIcon } from '@components/Icons';
import { render } from '@testing-library/react-native';

import { getTagIcon, getTagProperties } from '../utils';

describe('Tags/utils', () => {
  describe('getTagProperties', () => {
    it('sets color and backgroundColor for neutral variant', () => {
      expect(getTagProperties('neutral', 'default')).toEqual({
        color: colors.solidFaintLight,
        backgroundColor: colors.solidBrightLight,
      });
      expect(getTagProperties('neutral', 'subtle')).toEqual({
        color: colors.solidFaintLight,
        backgroundColor: colors.solidBrightLighter,
      });
    });

    it('sets color and backgroundColor for inversed variant', () => {
      expect(getTagProperties('inversed', 'default')).toEqual({
        color: colors.solidBrightDark,
        backgroundColor: colors.solidFaintDark,
      });
      expect(getTagProperties('inversed', 'subtle')).toEqual({
        color: colors.solidBrightDark,
        backgroundColor: colors.solidFaintDarker,
      });
    });

    it('sets color and backgroundColor for primary variant', () => {
      expect(getTagProperties('primary', 'default')).toEqual({
        color: colors.solidPrimaryDark,
        backgroundColor: colors.solidPrimaryLight,
      });
      expect(getTagProperties('primary', 'subtle')).toEqual({
        color: colors.solidPrimaryDark,
        backgroundColor: colors.solidPrimaryLightest,
      });
    });

    it('sets color and backgroundColor for alert variant', () => {
      expect(getTagProperties('alert', 'default')).toEqual({
        color: colors.solidAlertDarkest,
        backgroundColor: colors.solidAlertLight,
      });
      expect(getTagProperties('alert', 'subtle')).toEqual({
        color: colors.solidAlertDarkest,
        backgroundColor: colors.solidAlertLightest,
      });
    });

    it('sets color and backgroundColor for success variant', () => {
      expect(getTagProperties('success', 'default')).toEqual({
        color: colors.solidSuccessDarkest,
        backgroundColor: colors.solidSuccessLight,
      });
      expect(getTagProperties('success', 'subtle')).toEqual({
        color: colors.solidSuccessDarkest,
        backgroundColor: colors.solidSuccessLightest,
      });
    });

    it('sets color and backgroundColor for warning variant', () => {
      expect(getTagProperties('warning', 'default')).toEqual({
        color: colors.solidWarningDarkest,
        backgroundColor: colors.solidWarningLight,
      });
      expect(getTagProperties('warning', 'subtle')).toEqual({
        color: colors.solidWarningDarkest,
        backgroundColor: colors.solidWarningLightest,
      });
    });

    it('sets color and backgroundColor for disabled variant', () => {
      expect(getTagProperties('disabled', 'default')).toEqual({
        color: colors.solidBrightMedium,
        backgroundColor: colors.solidBrightLighter,
      });
      expect(getTagProperties('disabled', 'subtle')).toEqual({
        color: colors.solidFaintMedium,
        backgroundColor: colors.solidFaintDarker,
      });
    });
  });

  describe('getTagIcon', () => {
    it('when iconName is valid, returns Icon', () => {
      const Icon = getTagIcon('ArrowUp');
      const { getByTestId: getIconByTestId } = render(<Icon testID="Icon" />);
      const { getByTestId } = render(<ArrowUpIcon testID="ArrowUp" />);

      expect(getIconByTestId('Icon').props.id).toEqual(getByTestId('ArrowUp').props.id);
    });

    it('when iconName is not valid, returns null', () => {
      const Icon = getTagIcon('NotValidIconName');
      const { queryByTestId } = render(<Icon testID="NotValidIconName" />);

      expect(queryByTestId('Icon')).toBeNull();
    });
  });
});
