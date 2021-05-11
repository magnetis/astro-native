import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-tokens';

import GhostIconButton from '../GhostIconButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'GhostIconButton',
};

describe('Ghost Icon Button', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<GhostIconButton {...props} icon="Alert" />);
    const button = getByTestId('GhostIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
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
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
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
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
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
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
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
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      })
    );
  });

  it('renders correctly when loading is true', () => {
    const { getByTestId, rerender } = render(<GhostIconButton loading {...props} icon="Alert" />);
    const button = getByTestId('GhostIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      })
    );

    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.uranus500);

    // loading and Earth color
    rerender(<GhostIconButton color="earth" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.earth600);

    // loading and Venus color
    rerender(<GhostIconButton color="venus" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.venus400);

    // loading and Mars color
    rerender(<GhostIconButton color="mars" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.mars500);
  });

  it('renders correctly when disabled is true', () => {
    const { getByTestId } = render(<GhostIconButton disabled {...props} icon="Alert" />);
    const button = getByTestId('GhostIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
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
