import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-tokens';

import PrimaryButton from '../PrimaryButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'PrimaryButton',
};

describe('Primary Button', () => {
  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(<PrimaryButton text="MyButton" {...props} />);
    const button = getByTestId('PrimaryButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 24,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 46,
        backgroundColor: colors.uranus500,
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
        color: colors.space100,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly with color Mars', () => {
    const { getByText, getByTestId } = render(<PrimaryButton color="mars" text="MyButton" {...props} />);
    const button = getByTestId('PrimaryButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 24,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 46,
        backgroundColor: colors.mars500,
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
        color: colors.space100,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly with color Venus', () => {
    const { getByText, getByTestId } = render(<PrimaryButton color="venus" text="MyButton" {...props} />);
    const button = getByTestId('PrimaryButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 24,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 46,
        backgroundColor: colors.venus400,
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
        color: colors.space100,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly with color Uranus', () => {
    const { getByText, getByTestId } = render(<PrimaryButton color="uranus" text="MyButton" {...props} />);
    const button = getByTestId('PrimaryButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 24,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 46,
        backgroundColor: colors.uranus500,
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
        color: colors.space100,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly with color Earth', () => {
    const { getByText, getByTestId } = render(<PrimaryButton color="earth" text="MyButton" {...props} />);
    const button = getByTestId('PrimaryButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 24,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 46,
        backgroundColor: colors.earth400,
        borderColor: colors.earth400,
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
        color: colors.moon900,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly when loading is true', () => {
    const { getByTestId, rerender } = render(<PrimaryButton text="MyButton" loading {...props} />);
    const button = getByTestId('PrimaryButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 24,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 46,
        backgroundColor: colors.uranus500,
        borderColor: colors.uranus500,
      })
    );

    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);

    // loading and Earth color
    rerender(<PrimaryButton text="MyButton" color="earth" loading {...props} />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.moon900);

    // loading and Venus color
    rerender(<PrimaryButton text="MyButton" color="venus" loading {...props} />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);

    // loading and Mars color
    rerender(<PrimaryButton text="MyButton" color="mars" loading {...props} />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);
  });

  it('renders correctly when disabled is true', () => {
    const { getByTestId, getByText } = render(<PrimaryButton text="MyButton" disabled {...props} />);
    const button = getByTestId('PrimaryButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        borderRadius: 24,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 46,
        backgroundColor: colors.moon300,
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
        color: colors.space100,
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('fires onPress prop when pressed', () => {
    const { getByTestId } = render(<PrimaryButton color="earth" text="MyButton" {...props} />);
    const button = getByTestId('PrimaryButton');

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
