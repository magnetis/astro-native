import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors, radius, sizes } from '@magnetis/astro-tokens';

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
  it('should renders correctly with default props', () => {
    const { getByTestId } = render(<IconButton {...initialProps} />);

    const button = getByTestId('IconButton');
    const iconContainer = getByTestId('IconButton.IconContainer');

    expect(button).toHaveStyle({
      borderRadius: radius.small,
    });

    expect(iconContainer.props.children.props.color).toEqual(colors.solidBrightLightest);
    expect(iconContainer.props.children.props.size).toEqual(sizes.tiny);
  });

  it('should renders correctly with rounded prop', () => {
    const { getByTestId } = render(<IconButton {...initialProps} rounded />);

    const button = getByTestId('IconButton');
    const iconContainer = getByTestId('IconButton.IconContainer');

    expect(button).toHaveStyle({
      borderRadius: radius.circular,
    });

    expect(iconContainer.props.children.props.color).toEqual(colors.solidBrightLightest);
    expect(iconContainer.props.children.props.size).toEqual(sizes.tiny);
  });

  it('should call onPress handler when button is pressed', () => {
    const { getByTestId } = render(<IconButton {...initialProps} />);

    const button = getByTestId('IconButton');
    fireEvent.press(button);

    expect(initialProps.onPress).toHaveBeenCalledTimes(1);
  });
});
