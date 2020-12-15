import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import IconButton from '../IconButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'IconButton',
};

describe('Icon Button', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<IconButton {...props} icon="Alert" />);
    const button = getByTestId('IconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
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
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
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
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
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
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
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
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: colors.earth400,
        borderColor: colors.earth400,
      })
    );
  });

  it('renders correctly when loading is true', () => {
    const { getByTestId, rerender } = render(<IconButton loading {...props} icon="Alert" />);
    const button = getByTestId('IconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: colors.uranus500,
        borderColor: colors.uranus500,
      })
    );

    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);

    // loading and Earth color
    rerender(<IconButton color="earth" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.moon900);

    // loading and Venus color
    rerender(<IconButton color="venus" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);

    // loading and Mars color
    rerender(<IconButton color="mars" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);
  });

  it('renders correctly when disabled is true', () => {
    const { getByTestId } = render(<IconButton disabled {...props} icon="Alert" />);
    const button = getByTestId('IconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
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
