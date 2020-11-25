import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import OutlineIconLabelButton from '../OutlineIconLabelButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'OutlineIconLabelButton',
};

describe('Outline Icon Label Button', () => {
  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(<OutlineIconLabelButton text="MyButton" {...props} icon="Alert" />);
    const button = getByTestId('OutlineIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');
    const icon = getByTestId('OutlineIconLabelButton.Icon');

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

    expect(icon.props.style).toEqual(
      expect.objectContaining({
        marginLeft: 0,
        marginRight: 9,
      })
    );
  });

  it('renders correctly with color Mars', () => {
    const { getByText, getByTestId } = render(
      <OutlineIconLabelButton color="mars" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('OutlineIconLabelButton');
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
    const { getByText, getByTestId } = render(
      <OutlineIconLabelButton color="venus" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('OutlineIconLabelButton');
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
    const { getByText, getByTestId } = render(
      <OutlineIconLabelButton color="uranus" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('OutlineIconLabelButton');
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
    const { getByText, getByTestId } = render(
      <OutlineIconLabelButton color="earth" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('OutlineIconLabelButton');
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
    const { getByTestId, rerender } = render(
      <OutlineIconLabelButton text="MyButton" isLoading {...props} icon="Alert" />
    );
    const button = getByTestId('OutlineIconLabelButton');
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
    rerender(<OutlineIconLabelButton text="MyButton" color="earth" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.earth600);

    // isLoading and Venus color
    rerender(<OutlineIconLabelButton text="MyButton" color="venus" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.venus400);

    // isLoading and Mars color
    rerender(<OutlineIconLabelButton text="MyButton" color="mars" isLoading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.mars500);
  });

  it('renders correctly when isDisabled is true', () => {
    const { getByTestId, getByText } = render(
      <OutlineIconLabelButton text="MyButton" isDisabled {...props} icon="Alert" />
    );
    const button = getByTestId('OutlineIconLabelButton');
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

  it('renders correctly when iconPosition is right', () => {
    const { getByTestId, getByText } = render(
      <OutlineIconLabelButton text="MyButton" isDisabled {...props} icon="Alert" iconPosition="right" />
    );
    const button = getByTestId('OutlineIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');
    const icon = getByTestId('OutlineIconLabelButton.Icon');

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

    expect(icon.props.style).toEqual(
      expect.objectContaining({
        marginLeft: 9,
        marginRight: 0,
      })
    );
  });

  it('fires onPress prop when pressed', () => {
    const { getByTestId } = render(<OutlineIconLabelButton color="earth" text="MyButton" {...props} icon="Alert" />);
    const button = getByTestId('OutlineIconLabelButton');

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
