import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import IconLabelButton from '../IconLabelButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'IconLabelButton',
};

describe('Icon Label Button', () => {
  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(<IconLabelButton text="MyButton" {...props} icon="Alert" />);
    const button = getByTestId('IconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');
    const icon = getByTestId('IconLabelButton.Icon');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
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

    expect(icon.props.style).toEqual(
      expect.objectContaining({
        marginLeft: 0,
        marginRight: 9,
      })
    );
  });

  it('renders correctly with color Mars', () => {
    const { getByText, getByTestId } = render(<IconLabelButton color="mars" text="MyButton" {...props} icon="Alert" />);
    const button = getByTestId('IconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
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
    const { getByText, getByTestId } = render(
      <IconLabelButton color="venus" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('IconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
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
    const { getByText, getByTestId } = render(
      <IconLabelButton color="uranus" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('IconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
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
    const { getByText, getByTestId } = render(
      <IconLabelButton color="earth" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('IconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
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
    const { getByTestId, rerender } = render(<IconLabelButton text="MyButton" loading {...props} icon="Alert" />);
    const button = getByTestId('IconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
        backgroundColor: colors.uranus500,
        borderColor: colors.uranus500,
      })
    );

    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);

    // loading and Earth color
    rerender(<IconLabelButton text="MyButton" color="earth" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.moon900);

    // loading and Venus color
    rerender(<IconLabelButton text="MyButton" color="venus" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);

    // loading and Mars color
    rerender(<IconLabelButton text="MyButton" color="mars" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.space100);
  });

  it('renders correctly when disabled is true', () => {
    const { getByTestId, getByText } = render(<IconLabelButton text="MyButton" disabled {...props} icon="Alert" />);
    const button = getByTestId('IconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
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

  it('renders correctly when iconPosition is right', () => {
    const { getByTestId, getByText } = render(
      <IconLabelButton text="MyButton" disabled {...props} icon="Alert" iconPosition="right" />
    );
    const button = getByTestId('IconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');
    const icon = getByTestId('IconLabelButton.Icon');

    expect(buttonStyle).toEqual(
      expect.objectContaining({
        height: 48,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
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

    expect(icon.props.style).toEqual(
      expect.objectContaining({
        marginLeft: 9,
        marginRight: 0,
      })
    );
  });

  it('fires onPress prop when pressed', () => {
    const { getByTestId } = render(<IconLabelButton color="earth" text="MyButton" {...props} icon="Alert" />);
    const button = getByTestId('IconLabelButton');

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
