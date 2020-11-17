import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import IconButton from '../IconButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'IconButton',
};

describe(' Icon Button', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<IconButton {...props} icon="Alert" />);
    const button = getByTestId('IconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: colors.uranus500,
        borderColor: colors.uranus500,
      })
    );
  });

  it('renders correctly with color Mars', () => {
    const { getByTestId } = render(<IconButton color="mars" {...props} icon="Alert" />);
    const button = getByTestId('IconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: colors.mars500,
        borderColor: colors.mars500,
      })
    );
  });

  it('renders correctly with color Venus', () => {
    const { getByTestId } = render(<IconButton color="venus" {...props} icon="Alert" />);
    const button = getByTestId('IconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: colors.venus400,
        borderColor: colors.venus400,
      })
    );
  });

  it('renders correctly with color Uranus', () => {
    const { getByTestId } = render(<IconButton color="uranus" {...props} icon="Alert" />);
    const button = getByTestId('IconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: colors.uranus500,
        borderColor: colors.uranus500,
      })
    );
  });

  it('renders correctly with color Earth', () => {
    const { getByTestId } = render(<IconButton color="earth" {...props} icon="Alert" />);
    const button = getByTestId('IconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: colors.earth400,
        borderColor: colors.earth400,
      })
    );
  });

  it('renders correctly when isLoading is true', () => {
    const { getByTestId, rerender } = render(<IconButton isLoading {...props} icon="Alert" />);
    const button = getByTestId('IconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: colors.uranus500,
        borderColor: colors.uranus500,
      })
    );

    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);

    // isLoading and Earth color
    rerender(<IconButton color="earth" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.moon900);

    // isLoading and Venus color
    rerender(<IconButton color="venus" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);

    // isLoading and Mars color
    rerender(<IconButton color="mars" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);
  });

  it('renders correctly when isDisabled is true', () => {
    const { getByTestId } = render(<IconButton isDisabled {...props} icon="Alert" />);
    const button = getByTestId('IconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: colors.moon300,
        borderColor: colors.moon300,
      })
    );
  });

  it('fires onPress prop when pressed', () => {
    const { getByTestId } = render(<IconButton color="earth" {...props} icon="Alert" />);
    const button = getByTestId('IconButton');

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
