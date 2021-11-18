import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors, radius } from '@magnetis/astro-tokens';
import { colors as legacyColors } from '@magnetis/astro-galaxy-tokens';

import ButtonsGroup from '../ButtonsGroup';

import type { ButtonsGroupProps } from '../ButtonsGroup';

const ITEMS = [
  { value: 'lorem', onPressItem: jest.fn() },
  { value: 'ipsum', onPressItem: jest.fn() },
  { value: 'dolor', onPressItem: jest.fn() },
];

const initialProps: ButtonsGroupProps = {
  items: ITEMS,
  inversed: false,
};

describe('ButtonsGroup', () => {
  it.each(ITEMS)('should render %s correctly', ({ value }) => {
    const { getByText } = render(<ButtonsGroup {...initialProps} />);

    expect(getByText(value)).toBeTruthy();
  });

  it('should renders correctly with default props', () => {
    const { getAllByTestId } = render(<ButtonsGroup {...initialProps} />);

    expect(getAllByTestId('Button')[0]).toHaveStyle({
      backgroundColor: colors.solidPrimaryMedium,
      borderRadius: radius.small,
    });

    expect(getAllByTestId('Button')[1]).toHaveStyle({
      backgroundColor: colors.transparentFaintSemitransparent,
      borderRadius: radius.small,
    });
  });

  it('should renders correctly with inversed prop', () => {
    const { getAllByTestId } = render(<ButtonsGroup {...initialProps} inversed />);

    expect(getAllByTestId('Button')[1]).toHaveStyle({
      backgroundColor: colors.transparentBrightSemitransparent,
      borderRadius: radius.small,
    });
  });

  it('should renders correctly with rounded prop', () => {
    const { getAllByTestId } = render(<ButtonsGroup {...initialProps} rounded />);

    expect(getAllByTestId('Button')[0]).toHaveStyle({
      backgroundColor: colors.solidPrimaryMedium,
      borderRadius: radius.circular,
    });

    expect(getAllByTestId('Button')[1]).toHaveStyle({
      backgroundColor: colors.transparentFaintSemitransparent,
      borderRadius: radius.circular,
    });
  });

  it('should renders correctly with legacy prop', () => {
    const { getAllByTestId } = render(<ButtonsGroup {...initialProps} legacy rounded />);

    expect(getAllByTestId('Button')[0]).toHaveStyle({
      backgroundColor: legacyColors.uranus500,
      borderRadius: radius.circular,
    });

    expect(getAllByTestId('Button')[1]).toHaveStyle({
      backgroundColor: colors.transparentFaintSemitransparent,
      borderRadius: radius.circular,
    });
  });

  it('should call onPress when the button is pressed', () => {
    const { getAllByTestId } = render(<ButtonsGroup {...initialProps} />);

    fireEvent.press(getAllByTestId('Button')[0]);

    expect(initialProps.items[0].onPressItem).toHaveBeenCalledTimes(1);
  });
});
