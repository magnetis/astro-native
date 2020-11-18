import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import GhostIconButton from '../GhostIconButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'GhostIconButton',
};

describe(' Icon Button', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<GhostIconButton {...props} icon="Alert" />);
    const button = getByTestId('GhostIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      })
    );
  });

  it('renders correctly with color Mars', () => {
    const { getByTestId } = render(<GhostIconButton color="mars" {...props} icon="Alert" />);
    const button = getByTestId('GhostIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      })
    );
  });

  it('renders correctly with color Venus', () => {
    const { getByTestId } = render(<GhostIconButton color="venus" {...props} icon="Alert" />);
    const button = getByTestId('GhostIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      })
    );
  });

  it('renders correctly with color Uranus', () => {
    const { getByTestId } = render(<GhostIconButton color="uranus" {...props} icon="Alert" />);
    const button = getByTestId('GhostIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      })
    );
  });

  it('renders correctly with color Earth', () => {
    const { getByTestId } = render(<GhostIconButton color="earth" {...props} icon="Alert" />);
    const button = getByTestId('GhostIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      })
    );
  });

  it('renders correctly when isLoading is true', () => {
    const { getByTestId, rerender } = render(<GhostIconButton isLoading {...props} icon="Alert" />);
    const button = getByTestId('GhostIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      })
    );

    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.uranus500);

    // isLoading and Earth color
    rerender(<GhostIconButton color="earth" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.earth600);

    // isLoading and Venus color
    rerender(<GhostIconButton color="venus" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.venus400);

    // isLoading and Mars color
    rerender(<GhostIconButton color="mars" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.mars500);
  });

  it('renders correctly when isDisabled is true', () => {
    const { getByTestId } = render(<GhostIconButton isDisabled {...props} icon="Alert" />);
    const button = getByTestId('GhostIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 32,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 0,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      })
    );
  });

  it('fires onPress prop when pressed', () => {
    const { getByTestId } = render(<GhostIconButton color="earth" {...props} icon="Alert" />);
    const button = getByTestId('GhostIconButton');

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
