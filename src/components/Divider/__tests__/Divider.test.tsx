import React from 'react';
import { render } from '@testing-library/react-native';

import { colors } from '@magnetis/astro-tokens';

import Divider from '../Divider';
import type { DividerProps } from '../Divider';

const initialProps: DividerProps = {
  orientation: 'horizontal',
  thickness: 'hairline',
  type: 'neutral',
  testID: 'divider.line',
};

describe('Divider', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Divider thickness="hairline" />);

    expect(getByTestId('Divider')).toHaveStyle({
      backgroundColor: colors.transparentFaintClear,
      height: 1,
      width: '100%',
    });
  });

  it('renders properly when the orientation is vertical', () => {
    const { getByTestId } = render(<Divider {...initialProps} orientation="vertical" />);

    expect(getByTestId('divider.line')).toHaveStyle({
      backgroundColor: colors.transparentFaintClear,
      height: '100%',
      width: 1,
    });
  });

  it('renders properly when the orientation is horizontal', () => {
    const { getByTestId } = render(<Divider {...initialProps} orientation="horizontal" />);

    expect(getByTestId('divider.line')).toHaveStyle({
      backgroundColor: colors.transparentFaintClear,
      height: 1,
      width: '100%',
    });
  });

  it('renders properly when the type is inverse', () => {
    const { getByTestId } = render(<Divider {...initialProps} type="inverse" />);

    expect(getByTestId('divider.line')).toHaveStyle({
      backgroundColor: colors.transparentBrightClear,
      height: 1,
      width: '100%',
    });
  });

  it('renders properly when the type is neutral', () => {
    const { getByTestId } = render(<Divider {...initialProps} type="neutral" />);

    expect(getByTestId('divider.line')).toHaveStyle({
      backgroundColor: colors.transparentFaintClear,
      height: 1,
      width: '100%',
    });
  });

  it('renders properly when the thickness is thin', () => {
    const { getByTestId } = render(<Divider {...initialProps} thickness="thin" />);

    expect(getByTestId('divider.line')).toHaveStyle({
      backgroundColor: colors.transparentFaintClear,
      height: 2,
      width: '100%',
    });
  });

  it('renders properly when the thickness is thick', () => {
    const { getByTestId } = render(<Divider {...initialProps} thickness="thick" />);

    expect(getByTestId('divider.line')).toHaveStyle({
      backgroundColor: colors.transparentFaintClear,
      height: 4,
      width: '100%',
    });
  });

  it('renders properly when the thickness is heavy', () => {
    const { getByTestId } = render(<Divider {...initialProps} thickness="heavy" />);

    expect(getByTestId('divider.line')).toHaveStyle({
      backgroundColor: colors.transparentFaintClear,
      height: 8,
      width: '100%',
    });
  });
});
