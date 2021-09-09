import React from 'react';
import { render } from '@testing-library/react-native';
import { colors, typography } from '@magnetis/astro-tokens';

import BaseButtonText from '../BaseButtonText';

describe('BaseButtonText', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<BaseButtonText color={colors.solidPrimaryMedium}>text</BaseButtonText>);

    expect(getByText('text')).toHaveStyle({
      fontFamily: typography.fontFamilyBase,
      alignItems: 'center',
    });

    expect(getByText('text')).toHaveStyle({
      fontSize: typography.fontSizeMini,
      lineHeight: typography.fontSizeMini * 1.5,
      color: colors.solidPrimaryMedium,
    });
  });
});
