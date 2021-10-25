import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors, radius } from '@magnetis/astro-tokens';

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
    const { getByA11yLabel } = render(<ButtonsGroup {...initialProps} />);

    expect(getByA11yLabel('lorem')).toHaveStyle({
      backgroundColor: colors.solidPrimaryMedium,
      borderRadius: radius.small,
    });

    expect(getByA11yLabel('ipsum')).toHaveStyle({
      backgroundColor: colors.transparentFaintSemitransparent,
      borderRadius: radius.small,
    });
  });

  it('should renders correctly with inversed prop', () => {
    const { getByA11yLabel } = render(<ButtonsGroup {...initialProps} inversed />);

    expect(getByA11yLabel('ipsum')).toHaveStyle({
      backgroundColor: colors.transparentBrightSemitransparent,
      borderRadius: radius.small,
    });
  });

  it('should renders correctly with rounded prop', () => {
    const { getByA11yLabel } = render(<ButtonsGroup {...initialProps} rounded />);

    expect(getByA11yLabel('lorem')).toHaveStyle({
      backgroundColor: colors.solidPrimaryMedium,
      borderRadius: radius.circular,
    });

    expect(getByA11yLabel('ipsum')).toHaveStyle({
      backgroundColor: colors.transparentFaintSemitransparent,
      borderRadius: radius.circular,
    });
  });

  it('should call onPress when the button is pressed', () => {
    const { getByText } = render(<ButtonsGroup {...initialProps} />);

    fireEvent.press(getByText('lorem'));

    expect(initialProps.items[0].onPressItem).toHaveBeenCalledTimes(1);
  });
});
