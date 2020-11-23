import React from 'react';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { render } from '@testing-library/react-native';

import { AlertIcon } from '..';
import { getFill, getIcon } from '../utils';

describe('Icons/Utils', () => {
  describe('getFill', () => {
    it('when gradient is valid', () => {
      expect(getFill({ gradient: 'sombrero', color: colors.uranus500, id: 'ID' })).toEqual('url(#ID)');
    });
    it('when gradient is not valid', () => {
      expect(getFill({ gradient: undefined, color: colors.uranus500, id: 'ID' })).toEqual(colors.uranus500);
    });
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
