import React from 'react';
import { Text } from 'react-native';
import { render, act } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseButton from '../BaseButton';

const ButtonText = () => <Text testID="BaseButton.Text">MyBaseButton</Text>;

const onPress = jest.fn();

const props = {
  activityIndicatorColor: colors.space100,
  backgroundColor: colors.uranus500,
  borderColor: colors.uranus500,
  textColor: colors.space100,
  onPress,
  testID: 'BaseButton',
  style: {},
};

describe('BaseButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <BaseButton {...props} testOnly_pressed>
        <ButtonText />
      </BaseButton>
    );
    const baseButton = getByTestId('BaseButton');
    const baseButtonStyle = Object.assign({}, ...baseButton.props.style);

    expect(baseButtonStyle).toEqual(
      expect.objectContaining({
        alignSelf: 'center',
        backgroundColor: colors.uranus500,
        borderColor: colors.uranus500,
        borderRadius: 24,
        borderWidth: 2,
        opacity: 0.7,
        paddingVertical: 8,
        paddingHorizontal: 46,
      })
    );
  });

  it('has no interaction when disabled is true', () => {
    const { getByTestId } = render(
      <BaseButton {...props} disabled>
        <ButtonText />
      </BaseButton>
    );

    expect(getByTestId('BaseButton')).toBeDisabled();
  });

  it('has no interaction when loading is true', () => {
    const { getByTestId } = render(
      <BaseButton {...props} loading>
        <ButtonText />
      </BaseButton>
    );

    expect(getByTestId('BaseButton')).toBeDisabled();
  });

  it('renders correctly when loading is true', () => {
    const { getByTestId } = render(
      <BaseButton {...props} loading>
        <ButtonText />
      </BaseButton>
    );
    const button = getByTestId('BaseButton');
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
  });

  it('has width of 100% when fill is true', () => {
    const { getByTestId } = render(
      <BaseButton {...props} fill>
        <ButtonText />
      </BaseButton>
    );
    const baseButton = getByTestId('BaseButton');
    const baseButtonStyle = Object.assign({}, ...baseButton.props.style);

    expect(baseButtonStyle.width).toEqual('100%');
  });

  it('should renders with custom opacity when receive opacity prop', () => {
    const { getByTestId } = render(
      <BaseButton {...props} opacity={0.3} testOnly_pressed>
        <ButtonText />
      </BaseButton>
    );

    expect(getByTestId('BaseButton')).toHaveStyle({ opacity: 0.3 });
  });

  it('has min hit slop 50X48 when button width and height is small', () => {
    const { getByTestId } = render(
      <BaseButton {...props} fill>
        <ButtonText />
      </BaseButton>
    );

    const baseButton = getByTestId('BaseButton');
    act(() => {
      baseButton.props.onLayout({
        nativeEvent: {
          layout: {
            height: 20,
            width: 20,
          },
        },
      });
    });

    expect(baseButton.props.hitSlop).toStrictEqual({
      top: 14,
      bottom: 14,
      left: 14,
      right: 14,
    });
  });

  it('has min hit slop 48X48 when button width is small', () => {
    const { getByTestId } = render(
      <BaseButton {...props} fill>
        <ButtonText />
      </BaseButton>
    );

    const baseButton = getByTestId('BaseButton');
    act(() => {
      baseButton.props.onLayout({
        nativeEvent: {
          layout: {
            height: 50,
            width: 20,
          },
        },
      });
    });

    expect(baseButton.props.hitSlop).toStrictEqual({
      top: 0,
      bottom: 0,
      left: 14,
      right: 14,
    });
  });

  it('has min hit slop 48X50 when button height is small', () => {
    const { getByTestId } = render(
      <BaseButton {...props} fill>
        <ButtonText />
      </BaseButton>
    );

    const baseButton = getByTestId('BaseButton');
    act(() => {
      baseButton.props.onLayout({
        nativeEvent: {
          layout: {
            height: 20,
            width: 50,
          },
        },
      });
    });

    expect(baseButton.props.hitSlop).toStrictEqual({
      top: 14,
      bottom: 14,
      left: 0,
      right: 0,
    });
  });

  it('has min hit slop 60X50 when button height is bigger then minimum', () => {
    const { getByTestId } = render(
      <BaseButton {...props} fill>
        <ButtonText />
      </BaseButton>
    );

    const baseButton = getByTestId('BaseButton');
    act(() => {
      baseButton.props.onLayout({
        nativeEvent: {
          layout: {
            height: 50,
            width: 50,
          },
        },
      });
    });

    expect(baseButton.props.hitSlop).toStrictEqual({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    });
  });

  it('has hit slop passed when button width and height is small, but hit slop prop has been passed', () => {
    const { getByTestId } = render(
      <BaseButton {...props} fill hitSlop={0}>
        <ButtonText />
      </BaseButton>
    );

    const baseButton = getByTestId('BaseButton');
    act(() => {
      baseButton.props.onLayout({
        nativeEvent: {
          layout: {
            height: 20,
            width: 20,
          },
        },
      });
    });

    expect(baseButton.props.hitSlop).toStrictEqual({ bottom: 0, left: 0, right: 0, top: 0 });
  });

  it('has onLayout called if user set this prop', () => {
    const onLayout = jest.fn();
    const { getByTestId } = render(
      <BaseButton {...props} fill onLayout={onLayout}>
        <ButtonText />
      </BaseButton>
    );

    const baseButton = getByTestId('BaseButton');
    act(() => {
      baseButton.props.onLayout({
        nativeEvent: {
          layout: {
            height: 20,
            width: 20,
          },
        },
      });
    });

    expect(onLayout).toBeCalledTimes(1);
    expect(baseButton.props.hitSlop).toStrictEqual({
      top: 14,
      bottom: 14,
      left: 14,
      right: 14,
    });
  });
});
