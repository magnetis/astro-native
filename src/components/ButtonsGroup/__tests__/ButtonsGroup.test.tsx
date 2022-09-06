import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors, radius } from '@magnetis/astro-tokens';
import { colors as legacyColors } from '@magnetis/astro-galaxy-tokens';

import ButtonsGroup from '../ButtonsGroup';

import type { ButtonsGroupProps } from '../ButtonsGroup';

const ITEMS = [
  { value: 'lorem', onPressItem: jest.fn(), accessibilityLabel: 'buttons group item 1' },
  { value: 'ipsum', onPressItem: jest.fn() },
  { value: 'dolor', onPressItem: jest.fn() },
];

const initialProps: ButtonsGroupProps = {
  items: ITEMS,
  inversed: false,
  testID: 'ButtonsGroup',
};

describe('ButtonsGroup', () => {
  it.each(ITEMS)('should render %s correctly', ({ value }) => {
    const { getByText } = render(<ButtonsGroup {...initialProps} />);

    expect(getByText(value)).toBeTruthy();
  });

  it('should renders correctly with default props', () => {
    const { getByTestId, getAllByTestId } = render(<ButtonsGroup {...initialProps} />);

    expect(getByTestId('ButtonsGroup')).toHaveProp('contentContainerStyle', { flexGrow: 1, justifyContent: 'center' });

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
    const { getByTestId, getAllByTestId } = render(<ButtonsGroup {...initialProps} inversed />);

    expect(getByTestId('ButtonsGroup')).toHaveProp('contentContainerStyle', { flexGrow: 1, justifyContent: 'center' });

    expect(getAllByTestId('Button')[1]).toHaveStyle({
      backgroundColor: colors.transparentBrightSemitransparent,
      borderRadius: radius.small,
    });
  });

  it('should renders correctly with rounded prop', () => {
    const { getByTestId, getAllByTestId } = render(<ButtonsGroup {...initialProps} rounded />);

    expect(getByTestId('ButtonsGroup').props.contentContainerStyle).toEqual({ flexGrow: 1, justifyContent: 'center' });

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
    const { getByTestId, getAllByTestId } = render(<ButtonsGroup {...initialProps} legacy rounded />);

    expect(getByTestId('ButtonsGroup')).toHaveProp('contentContainerStyle', { flexGrow: 1, justifyContent: 'center' });

    expect(getAllByTestId('Button')[0]).toHaveStyle({
      backgroundColor: legacyColors.uranus500,
      borderRadius: radius.circular,
    });

    expect(getAllByTestId('Button')[1]).toHaveStyle({
      backgroundColor: colors.transparentFaintSemitransparent,
      borderRadius: radius.circular,
    });
  });

  it('should renders correctly with contentContainerStyle prop', () => {
    const { getByTestId, getAllByTestId } = render(
      <ButtonsGroup {...initialProps} contentContainerStyle={{ justifyContent: 'space-between' }} />
    );

    expect(getByTestId('ButtonsGroup')).toHaveProp('contentContainerStyle', {
      flexGrow: 1,
      justifyContent: 'space-between',
    });

    expect(getAllByTestId('Button')[0]).toHaveStyle({
      backgroundColor: colors.solidPrimaryMedium,
      borderRadius: radius.small,
    });

    expect(getAllByTestId('Button')[1]).toHaveStyle({
      backgroundColor: colors.transparentFaintSemitransparent,
      borderRadius: radius.small,
    });
  });

  it('should call onPress when the button is pressed', () => {
    const { getAllByTestId } = render(<ButtonsGroup {...initialProps} />);

    fireEvent.press(getAllByTestId('Button')[0]);

    expect(initialProps.items[0].onPressItem).toHaveBeenCalledTimes(1);
  });

  it('should get item by accessibility label', () => {
    const { getByA11yLabel } = render(<ButtonsGroup {...initialProps} />);

    expect(getByA11yLabel('buttons group item 1')).toBeTruthy();
  });
});
