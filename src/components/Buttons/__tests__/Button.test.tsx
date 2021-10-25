import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors, radius, typography } from '@magnetis/astro-tokens';

import Button from '../Button';
import type { ButtonProps } from '..';

const initialProps: ButtonProps = {
  disabled: false,
  fill: false,
  loading: false,
  size: 'medium',
  text: 'text',
  type: 'solid',
  variant: 'primary',
  onPress: jest.fn(),
};

describe('Button', () => {
  it('should renders correctly with default props', () => {
    const { getByText, getByTestId, queryByTestId } = render(<Button {...initialProps} />);

    const button = getByTestId('Button');
    const buttonLabel = getByText('text');

    expect(button).toHaveStyle({
      alignItems: 'center',
      backgroundColor: colors.solidPrimaryMedium,
      borderRadius: radius.small,
    });

    expect(buttonLabel).toHaveStyle({
      color: colors.solidBrightLightest,
      fontFamily: typography.fontFamilyBase,
      fontSize: typography.fontSizeMini,
      lineHeight: typography.fontSizeMini * 1.5,
    });

    expect(queryByTestId('Button.IconLeftContainer')).toBeNull();
    expect(queryByTestId('Button.IconRightContainer')).toBeNull();
  });

  it('should renders correctly with icons', () => {
    const { getByText, getByTestId } = render(<Button {...initialProps} iconLeft="DropLeft" iconRight="DropRight" />);

    const button = getByTestId('Button');
    const buttonLabel = getByText('text');

    expect(button).toHaveStyle({
      alignItems: 'center',
      backgroundColor: colors.solidPrimaryMedium,
      borderRadius: radius.small,
    });

    expect(buttonLabel).toHaveStyle({
      color: colors.solidBrightLightest,
      fontFamily: typography.fontFamilyBase,
      fontSize: typography.fontSizeMini,
      lineHeight: typography.fontSizeMini * 1.5,
    });

    expect(getByTestId('Button.IconLeftContainer')).toHaveStyle({
      marginRight: 4,
    });

    expect(getByTestId('Button.IconRightContainer')).toHaveStyle({
      marginLeft: 4,
    });
  });

  it('should renders correctly with rounded layout', () => {
    const { getByText, getByTestId, queryByTestId } = render(<Button {...initialProps} rounded />);

    const button = getByTestId('Button');
    const buttonLabel = getByText('text');

    expect(button).toHaveStyle({
      alignItems: 'center',
      backgroundColor: colors.solidPrimaryMedium,
      borderRadius: radius.circular,
    });

    expect(buttonLabel).toHaveStyle({
      color: colors.solidBrightLightest,
      fontFamily: typography.fontFamilyBase,
      fontSize: typography.fontSizeMini,
      lineHeight: typography.fontSizeMini * 1.5,
    });

    expect(queryByTestId('Button.IconLeftContainer')).toBeNull();
    expect(queryByTestId('Button.IconRightContainer')).toBeNull();
  });

  it('should call onPress handler when button is pressed', () => {
    const { getByText } = render(<Button {...initialProps} />);

    const button = getByText('text');
    fireEvent.press(button);

    expect(initialProps.onPress).toHaveBeenCalledTimes(1);
  });
});
