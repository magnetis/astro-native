import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors, radius } from '@magnetis/astro-tokens';

import ButtonsGroup from '../ButtonsGroup';

import type { ButtonsGroupProps, Item } from '../ButtonsGroup';

const ITEMS: Item[] = [
  { value: 'lorem', onPress: jest.fn(), accessibilityLabel: 'buttons group item 1' },
  { value: 'ipsum', onPress: jest.fn(), accessibilityLabel: 'buttons group item 2' },
  { value: 'dolor', onPress: jest.fn(), accessibilityLabel: 'buttons group item 3' },
];

const initialProps: ButtonsGroupProps = {
  items: ITEMS,
  testID: 'ButtonsGroup',
  active: { type: 'solid', variant: 'primary' },
  inactive: { type: 'subtle', variant: 'inversed' },
};

describe('ButtonsGroup', () => {
  it.each(ITEMS)('should render %s correctly', ({ value }) => {
    const { getByText } = render(<ButtonsGroup {...initialProps} />);

    expect(getByText(value)).toBeTruthy();
  });

  it('should renders correctly with default props', () => {
    const { getByTestId } = render(<ButtonsGroup {...initialProps} />);

    expect(getByTestId('ButtonsGroup')).toHaveProp('contentContainerStyle', { flexGrow: 1, justifyContent: 'center' });

    expect(getByTestId('ButtonsGroup.Button.0')).toHaveStyle({
      backgroundColor: colors.solidPrimaryMedium,
      borderRadius: radius.small,
    });

    expect(getByTestId('ButtonsGroup.Button.1')).toHaveStyle({
      backgroundColor: colors.transparentBrightSemitransparent,
      borderRadius: radius.small,
    });
  });

  it('should renders correctly with rounded prop', () => {
    const { getByTestId } = render(<ButtonsGroup {...initialProps} rounded />);

    expect(getByTestId('ButtonsGroup').props.contentContainerStyle).toEqual({ flexGrow: 1, justifyContent: 'center' });

    expect(getByTestId('ButtonsGroup.Button.0')).toHaveStyle({
      backgroundColor: colors.solidPrimaryMedium,
      borderRadius: radius.circular,
    });

    expect(getByTestId('ButtonsGroup.Button.1')).toHaveStyle({
      backgroundColor: colors.transparentBrightSemitransparent,
      borderRadius: radius.circular,
    });
  });

  it('should renders correctly with contentContainerStyle prop', () => {
    const { getByTestId } = render(
      <ButtonsGroup {...initialProps} contentContainerStyle={{ justifyContent: 'space-between' }} />
    );

    expect(getByTestId('ButtonsGroup')).toHaveProp('contentContainerStyle', {
      flexGrow: 1,
      justifyContent: 'space-between',
    });

    expect(getByTestId('ButtonsGroup.Button.0')).toHaveStyle({
      backgroundColor: colors.solidPrimaryMedium,
      borderRadius: radius.small,
    });

    expect(getByTestId('ButtonsGroup.Button.1')).toHaveStyle({
      backgroundColor: colors.transparentBrightSemitransparent,
      borderRadius: radius.small,
    });
  });

  it.each(ITEMS)('should call onPress when the button "%s" is pressed', ({ value, onPress }) => {
    const { getByText } = render(<ButtonsGroup {...initialProps} />);

    fireEvent.press(getByText(value));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it.each(ITEMS)('should get "%s" item by accessibility label', ({ accessibilityLabel = '' }) => {
    const { getByA11yLabel } = render(<ButtonsGroup {...initialProps} />);

    expect(getByA11yLabel(accessibilityLabel)).toBeTruthy();
  });

  it('renders correctly changing active and inactive default values', () => {
    const { getByTestId } = render(
      <ButtonsGroup
        {...initialProps}
        contentContainerStyle={{ justifyContent: 'space-between' }}
        active={{ type: 'subtle', variant: 'inversed' }}
        inactive={{ type: 'solid', variant: 'primary' }}
      />
    );

    expect(getByTestId('ButtonsGroup')).toHaveProp('contentContainerStyle', {
      flexGrow: 1,
      justifyContent: 'space-between',
    });

    expect(getByTestId('ButtonsGroup.Button.0')).toHaveStyle({
      backgroundColor: colors.transparentBrightSemitransparent,
    });

    expect(getByTestId('ButtonsGroup.Button.1')).toHaveStyle({
      backgroundColor: colors.solidPrimaryMedium,
    });
  });
});
