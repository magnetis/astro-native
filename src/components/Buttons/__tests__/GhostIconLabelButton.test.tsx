import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import GhostIconLabelButton from '../GhostIconLabelButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'GhostIconLabelButton',
};

describe('Outline Icon Label Button', () => {
  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(<GhostIconLabelButton text="MyButton" {...props} icon="Alert" />);
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');
    const icon = getByTestId('GhostIconLabelButton.Icon');

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

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        color: colors.uranus500,
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
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
    const { getByText, getByTestId } = render(
      <GhostIconLabelButton color="mars" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

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

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        color: colors.mars500,
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly with color Venus', () => {
    const { getByText, getByTestId } = render(
      <GhostIconLabelButton color="venus" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

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

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        color: colors.venus400,
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly with color Uranus', () => {
    const { getByText, getByTestId } = render(
      <GhostIconLabelButton color="uranus" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

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

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        color: colors.uranus500,
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly with color Earth', () => {
    const { getByText, getByTestId } = render(
      <GhostIconLabelButton color="earth" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

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

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        color: colors.earth600,
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly when isLoading is true', () => {
    const { getByTestId, rerender } = render(
      <GhostIconLabelButton text="MyButton" isLoading {...props} icon="Alert" />
    );
    const button = getByTestId('GhostIconLabelButton');
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
    rerender(<GhostIconLabelButton text="MyButton" color="earth" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.earth600);

    // isLoading and Venus color
    rerender(<GhostIconLabelButton text="MyButton" color="venus" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.venus400);

    // isLoading and Mars color
    rerender(<GhostIconLabelButton text="MyButton" color="mars" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.mars500);
  });

  it('renders correctly when isDisabled is true', () => {
    const { getByTestId, getByText } = render(
      <GhostIconLabelButton text="MyButton" isDisabled {...props} icon="Alert" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

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

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        color: colors.moon300,
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
        fontSize: 16,
        lineHeight: 24,
      })
    );
  });

  it('renders correctly when iconPosition is right', () => {
    const { getByTestId, getByText } = render(
      <GhostIconLabelButton text="MyButton" isDisabled {...props} icon="Alert" iconPosition="right" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');
    const icon = getByTestId('GhostIconLabelButton.Icon');

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

    expect(text.props.style[0]).toEqual(
      expect.objectContaining({
        color: colors.moon300,
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
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
    const { getByTestId } = render(<GhostIconLabelButton color="earth" text="MyButton" {...props} icon="Alert" />);
    const button = getByTestId('GhostIconLabelButton');

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
