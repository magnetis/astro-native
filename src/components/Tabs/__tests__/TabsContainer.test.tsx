import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-tokens';

import TabsContainer from '../TabsContainer';
import type { TabsContainerProps } from '../TabsContainer';

const ITEMS = [
  { value: 'lorem', onPressItem: jest.fn() },
  { value: 'ipsum', onPressItem: jest.fn() },
  { value: 'dolor', onPressItem: jest.fn() },
];

const ITEMS_VALUE = ITEMS.map(({ value }) => value);

const initialProps: TabsContainerProps = {
  items: ITEMS,
  inversed: false,
  active: {
    type: 'solid',
    variant: 'primary',
  },
  inactive: {
    type: 'subtle',
    variant: 'inversed',
  },
};

describe('TabsContainer', () => {
  it.each(ITEMS_VALUE)('should render %s tab value correctly', (value) => {
    const { getByText } = render(<TabsContainer {...initialProps} />);

    expect(getByText(value)).toBeTruthy();
  });

  it('should renders correctly with default props', () => {
    const { getByTestId, getByText } = render(<TabsContainer {...initialProps} />);

    expect(getByTestId('Tabs.Tab.0')).toHaveStyle({
      backgroundColor: colors.solidPrimaryMedium,
    });
    expect(getByTestId('Tabs.Tab.1')).toHaveStyle({
      backgroundColor: 'transparent',
    });

    expect(getByText('lorem')).toHaveStyle({
      color: colors.solidBrightLightest,
    });
    expect(getByText('ipsum')).toHaveStyle({
      color: colors.solidBrightLightest,
    });
  });

  it('should call onPress when the button is pressed', () => {
    const { getByText } = render(<TabsContainer {...initialProps} />);

    fireEvent.press(getByText('lorem'));

    expect(initialProps.items[0].onPressItem).toHaveBeenCalledTimes(1);
  });
});
