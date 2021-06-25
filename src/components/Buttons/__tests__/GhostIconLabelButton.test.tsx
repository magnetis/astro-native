import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-tokens';

import GhostIconLabelButton from '../GhostIconLabelButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'GhostIconLabelButton',
};

describe('Ghost Icon Label Button', () => {
  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(<GhostIconLabelButton text="MyButton" {...props} icon="Alert" />);
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');
    const icon = getByTestId('GhostIconLabelButton.Icon');

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
      <GhostIconLabelButton color="mars" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

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
      <GhostIconLabelButton color="venus" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

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
      <GhostIconLabelButton color="uranus" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

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
      <GhostIconLabelButton color="earth" text="MyButton" {...props} icon="Alert" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

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

  it('renders correctly when loading is true', () => {
    const { getByTestId, rerender } = render(<GhostIconLabelButton text="MyButton" loading {...props} icon="Alert" />);
    const button = getByTestId('GhostIconLabelButton');
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
    rerender(<GhostIconLabelButton text="MyButton" color="earth" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.earth600);

    // loading and Venus color
    rerender(<GhostIconLabelButton text="MyButton" color="venus" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.venus400);

    // loading and Mars color
    rerender(<GhostIconLabelButton text="MyButton" color="mars" loading {...props} icon="Alert" />);
    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.mars500);
  });

  it('renders correctly when disabled is true', () => {
    const { getByTestId, getByText } = render(
      <GhostIconLabelButton text="MyButton" disabled {...props} icon="Alert" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');

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
      <GhostIconLabelButton text="MyButton" disabled {...props} icon="Alert" iconPosition="right" />
    );
    const button = getByTestId('GhostIconLabelButton');
    const buttonStyle = Object.assign({}, ...button.props.style);
    const text = getByText('MyButton');
    const icon = getByTestId('GhostIconLabelButton.Icon');

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
    const { getByTestId } = render(<GhostIconLabelButton color="earth" text="MyButton" {...props} icon="Alert" />);
    const button = getByTestId('GhostIconLabelButton');

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
