import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import OutlineButton from '../OutlineButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'OutlineButton',
};

describe('Outline Button', () => {
  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(<OutlineButton text="MyButton" {...props} />);
    const button = getByTestId('OutlineButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
        backgroundColor: 'transparent',
        borderColor: colors.uranus500,
      })
    );

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
      })
    );
    expect(text.props.style[1]).toEqual(
      expect.objectContaining({
        color: colors.uranus500,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly with color Mars', () => {
    const { getByText, getByTestId } = render(<OutlineButton color="mars" text="MyButton" {...props} />);
    const button = getByTestId('OutlineButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
        backgroundColor: 'transparent',
        borderColor: colors.mars500,
      })
    );

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
      })
    );
    expect(text.props.style[1]).toEqual(
      expect.objectContaining({
        color: colors.mars500,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly with color Venus', () => {
    const { getByText, getByTestId } = render(<OutlineButton color="venus" text="MyButton" {...props} />);
    const button = getByTestId('OutlineButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
        backgroundColor: 'transparent',
        borderColor: colors.venus400,
      })
    );

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
      })
    );
    expect(text.props.style[1]).toEqual(
      expect.objectContaining({
        color: colors.venus400,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly with color Uranus', () => {
    const { getByText, getByTestId } = render(<OutlineButton color="uranus" text="MyButton" {...props} />);
    const button = getByTestId('OutlineButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
        backgroundColor: 'transparent',
        borderColor: colors.uranus500,
      })
    );

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
      })
    );
    expect(text.props.style[1]).toEqual(
      expect.objectContaining({
        color: colors.uranus500,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly with color Earth', () => {
    const { getByText, getByTestId } = render(<OutlineButton color="earth" text="MyButton" {...props} />);
    const button = getByTestId('OutlineButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
        backgroundColor: 'transparent',
        borderColor: colors.earth600,
      })
    );

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
      })
    );
    expect(text.props.style[1]).toEqual(
      expect.objectContaining({
        color: colors.earth600,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly when isLoading is true', () => {
    const { getByTestId, rerender } = render(<OutlineButton text="MyButton" isLoading {...props} />);
    const button = getByTestId('OutlineButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
        backgroundColor: 'transparent',
        borderColor: colors.uranus500,
      })
    );

    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.uranus500);

    // isLoading and Earth color
    rerender(<OutlineButton text="MyButton" color="earth" isLoading {...props} />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.earth600);

    // isLoading and Venus color
    rerender(<OutlineButton text="MyButton" color="venus" isLoading {...props} />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.venus400);

    // isLoading and Mars color
    rerender(<OutlineButton text="MyButton" color="mars" isLoading {...props} />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.mars500);
  });

  it('renders correctly when isDisabled is true', () => {
    const { getByTestId, getByText } = render(<OutlineButton text="MyButton" isDisabled {...props} />);
    const button = getByTestId('OutlineButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
        backgroundColor: 'transparent',
        borderColor: colors.moon300,
      })
    );

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
      })
    );
    expect(text.props.style[1]).toEqual(
      expect.objectContaining({
        color: colors.moon300,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('fires onPress prop when pressed', () => {
    const { getByTestId } = render(<OutlineButton color="earth" text="MyButton" {...props} />);
    const button = getByTestId('OutlineButton');

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
