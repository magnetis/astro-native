import React from 'react';
import { render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-tokens';

import BaseButtonText from '../BaseButtonText';

describe('BaseButtonText', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<BaseButtonText color={colors.uranus500}>text</BaseButtonText>);

    expect(getByText('text').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
      })
    );

    expect(getByText('text').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 16,
        lineHeight: 16 * 1.5,
        color: colors.uranus500,
      })
    );
  });
});
