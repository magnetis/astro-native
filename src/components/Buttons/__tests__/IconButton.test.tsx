import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-tokens';

import IconButton from '../IconButton';
import type { IconButtonProps } from '..';

const initialProps: IconButtonProps = {
  disabled: false,
  loading: false,
  size: 'medium',
  icon: 'Alert',
  type: 'solid',
  variant: 'primary',
  onPress: jest.fn(),
};

describe('IconButton', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<IconButton {...initialProps} />);

    const button = getByTestId('IconButton.Icon');
    expect(button.props.children.props.color).toEqual(colors.solidBrightLightest);
    expect(button.props.children.props.size).toEqual(20);
  });

  it('will call onPress handler when button is pressed', () => {
    const { getByTestId } = render(<IconButton {...initialProps} />);

    const button = getByTestId('IconButton.Icon');
    fireEvent.press(button);

    expect(initialProps.onPress).toHaveBeenCalledTimes(1);
  });
});
