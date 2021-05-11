import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-tokens';

import OutlineIconButton from '../OutlineIconButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'OutlineIconButton',
};

describe('Outline Icon Button', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<OutlineIconButton {...props} icon="Alert" />);
    const button = getByTestId('OutlineIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: colors.uranus500,
      })
    );
  });

  it('renders correctly with color Mars', () => {
    const { getByTestId } = render(<OutlineIconButton color="mars" {...props} icon="Alert" />);
    const button = getByTestId('OutlineIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: colors.mars500,
      })
    );
  });

  it('renders correctly with color Venus', () => {
    const { getByTestId } = render(<OutlineIconButton color="venus" {...props} icon="Alert" />);
    const button = getByTestId('OutlineIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: colors.venus400,
      })
    );
  });

  it('renders correctly with color Uranus', () => {
    const { getByTestId } = render(<OutlineIconButton color="uranus" {...props} icon="Alert" />);
    const button = getByTestId('OutlineIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: colors.uranus500,
      })
    );
  });

  it('renders correctly with color Earth', () => {
    const { getByTestId } = render(<OutlineIconButton color="earth" {...props} icon="Alert" />);
    const button = getByTestId('OutlineIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: colors.earth600,
      })
    );
  });

  it('renders correctly when loading is true', () => {
    const { getByTestId, rerender } = render(<OutlineIconButton loading {...props} icon="Alert" />);
    const button = getByTestId('OutlineIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: colors.uranus500,
      })
    );

    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.uranus500);

    // loading and Earth color
    rerender(<OutlineIconButton color="earth" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.earth600);

    // loading and Venus color
    rerender(<OutlineIconButton color="venus" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.venus400);

    // loading and Mars color
    rerender(<OutlineIconButton color="mars" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.mars500);
  });

  it('renders correctly when disabled is true', () => {
    const { getByTestId } = render(<OutlineIconButton disabled {...props} icon="Alert" />);
    const button = getByTestId('OutlineIconButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 40,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: colors.moon300,
      })
    );
  });

  it('fires onPress prop when pressed', () => {
    const { getByTestId } = render(<OutlineIconButton color="earth" {...props} icon="Alert" />);
    const button = getByTestId('OutlineIconButton');

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
