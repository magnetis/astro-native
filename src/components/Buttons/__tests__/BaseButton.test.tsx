import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render, act } from '@testing-library/react-native';
import { borders, colors, radius, sizes } from '@magnetis/astro-tokens';

import BaseButton from '../BaseButton';

import type { BaseButtonProps } from '../BaseButton';

const ButtonText = () => <Text testID="BaseButton.Text">MyBaseButton</Text>;

const initialProps: BaseButtonProps = {
  activityIndicatorColor: colors.solidBrightLightest,
  backgroundColor: colors.solidPrimaryMedium,
  borderColor: colors.solidPrimaryMedium,
  borderRadius: radius.small,
  textColor: colors.solidBrightLightest,
  testID: 'BaseButton',
  style: {},
  onPress: jest.fn(),
};

describe('BaseButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should renders correctly with default props', () => {
    const { getByTestId } = render(
      <BaseButton {...initialProps}>
        <ButtonText />
      </BaseButton>
    );

    expect(getByTestId('BaseButton')).toHaveStyle({
      backgroundColor: colors.solidPrimaryMedium,
      borderColor: colors.solidPrimaryMedium,
      borderRadius: radius.small,
      borderWidth: borders.hairline,
      paddingVertical: 17,
      paddingHorizontal: sizes.tiny,
      alignSelf: 'center',
    });
  });

  it('should renders with no interaction when disabled is true', () => {
    const { getByTestId } = render(
      <BaseButton {...initialProps} disabled>
        <ButtonText />
      </BaseButton>
    );
    const baseButton = getByTestId('BaseButton');

    fireEvent.press(baseButton);
    expect(initialProps.onPress).toHaveBeenCalledTimes(0);
  });

  it('should renders correctly when loading is true', () => {
    const { getByTestId } = render(
      <BaseButton {...initialProps} loading>
        <ButtonText />
      </BaseButton>
    );

    expect(getByTestId('BaseButton')).toHaveStyle({
      borderRadius: radius.small,
      borderWidth: borders.hairline,
      paddingVertical: 17,
      paddingHorizontal: sizes.tiny,
      backgroundColor: colors.solidPrimaryMedium,
      borderColor: colors.solidPrimaryMedium,
    });

    expect(getByTestId('BaseButton.ActivityIndicator').props.color).toEqual(colors.solidBrightLightest);
  });

  it('should renders with width of 100% when fill is true', () => {
    const { getByTestId } = render(
      <BaseButton {...initialProps} fill>
        <ButtonText />
      </BaseButton>
    );

    expect(getByTestId('BaseButton')).toHaveStyle({ width: '100%' });
  });

  it('should renders with min hit slop 50X48 when button width and height is small', () => {
    const { getByTestId } = render(
      <BaseButton {...initialProps} fill>
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

  it('should renders with min hit slop 48X48 when button width is small', () => {
    const { getByTestId } = render(
      <BaseButton {...initialProps} fill>
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

  it('should renders with min hit slop 48X50 when button height is small', () => {
    const { getByTestId } = render(
      <BaseButton {...initialProps} fill>
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

  it('should renders with min hit slop 60X50 when button height is bigger then minimum', () => {
    const { getByTestId } = render(
      <BaseButton {...initialProps} fill>
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

  it('should renders with hit slop passed when button width and height is small, but hit slop prop has been passed', () => {
    const { getByTestId } = render(
      <BaseButton {...initialProps} fill hitSlop={0}>
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

  it('should renders with onLayout called if user set this prop', () => {
    const onLayout = jest.fn();
    const { getByTestId } = render(
      <BaseButton {...initialProps} fill onLayout={onLayout}>
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
