import React from 'react';
import { render } from '@testing-library/react-native';
import InputErrorMessage from '../InputErrorMessage';
import { colors } from '@magnetis/astro-tokens';

describe('InputErrorMessage', () => {
  it('renders correctly when hasError is true', () => {
    const { getByText, getByTestId } = render(<InputErrorMessage error="Error" hasError />);

    expect(getByTestId('InputErrorMessage').props.style[0]).toEqual(expect.objectContaining({ margin: 5 }));
    expect(getByTestId('InputErrorMessage').props.style[1]).toEqual(expect.objectContaining({ opacity: 1 }));
    expect(getByText('Error').props.style).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        color: colors.mars500,
      })
    );
  });

  it('renders correctly when hasError is false', () => {
    const { getByText, getByTestId } = render(<InputErrorMessage error="Error" hasError={false} />);

    expect(getByTestId('InputErrorMessage').props.style[0]).toEqual(expect.objectContaining({ margin: 5 }));
    expect(getByTestId('InputErrorMessage').props.style[1]).toEqual(expect.objectContaining({ opacity: 0 }));
    expect(getByText('Error').props.style).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        color: colors.mars500,
      })
    );
  });
});
