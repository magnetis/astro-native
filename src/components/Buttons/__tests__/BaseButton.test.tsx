import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
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
      <BaseButton {...props}>
        <ButtonText />
      </BaseButton>
    );
    const baseButton = getByTestId('BaseButton');
    const baseButtonStyle = Object.assign({}, ...baseButton.props.style);

    expect(baseButtonStyle).toEqual(
      expect.objectContaining({
        backgroundColor: colors.uranus500,
        borderColor: colors.uranus500,
        borderRadius: 31,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 38,
        height: 48,
        alignSelf: 'center',
      })
    );
  });

  it('has no interaction when disabled is true', () => {
    const { getByTestId } = render(
      <BaseButton {...props} disabled>
        <ButtonText />
      </BaseButton>
    );
    const baseButton = getByTestId('BaseButton');

    fireEvent.press(baseButton);
    expect(onPress).toHaveBeenCalledTimes(0);
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
});
