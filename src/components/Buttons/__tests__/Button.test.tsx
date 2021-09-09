import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors, typography } from '@magnetis/astro-tokens';

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
  it('renders correctly with default props', () => {
    const { getByText } = render(<Button {...initialProps} />);

    const button = getByText('text');

    expect(button).toHaveStyle({
      fontFamily: typography.fontFamilyBase,
      alignItems: 'center',
    });

    expect(button).toHaveStyle({
      fontSize: typography.fontSizeMini,
      lineHeight: typography.fontSizeMini * 1.5,
      color: colors.solidBrightLightest,
    });
  });

  it('renders correctly with icons', () => {
    const { getByText, getByTestId } = render(<Button {...initialProps} iconLeft="DropLeft" iconRight="DropRight" />);

    const button = getByText('text');

    expect(button).toHaveStyle({ fontFamily: typography.fontFamilyBase, alignItems: 'center' });

    expect(button).toHaveStyle({
      fontSize: typography.fontSizeMini,
      lineHeight: typography.fontSizeMini * 1.5,
      color: colors.solidBrightLightest,
    });

    expect(getByTestId('Button.IconLeft')).toHaveStyle({
      marginRight: 4,
    });

    expect(getByTestId('Button.IconRight')).toHaveStyle({
      marginLeft: 4,
    });
  });

  it('will call onPress handler when button is pressed', () => {
    const { getByText } = render(<Button {...initialProps} />);

    const button = getByText('text');
    fireEvent.press(button);

    expect(initialProps.onPress).toHaveBeenCalledTimes(1);
  });
});
