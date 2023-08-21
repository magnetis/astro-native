import React from 'react';
import { render } from '@testing-library/react-native';

import { colors, radius, sizes, typography } from '@magnetis/astro-tokens';

import Tag from '../Tag';
import { TAG_PROPERTIES } from '../constants';

import type { TagType, TagVariant } from '../types';

describe('Tag', () => {
  it('renders correctly with default props', () => {
    const { getByTestId, getByText } = render(<Tag text="some tag" testID="TagID" />);

    const tag = getByTestId('TagID');
    const tagLabel = getByText('some tag');

    expect(tag).toHaveStyle({
      backgroundColor: colors.solidBrightLight,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: sizes.vast,
      height: sizes.smaller,
      borderRadius: radius.mini,
      paddingHorizontal: sizes.nano,
    });

    expect(tagLabel).toHaveStyle({
      color: colors.solidFaintLight,
      fontSize: typography.fontSizeMini,
      fontFamily: 'Lato-Bold',
      includeFontPadding: false,
    });
  });

  it('renders tag correctly with an icon', () => {
    const { getByTestId } = render(<Tag text="some tag" testID="TagID" icon="Clock" />);

    const icon = getByTestId('TagID.Icon');

    expect(icon).toBeTruthy();
  });
});

const variants = Object.keys(TAG_PROPERTIES) as TagVariant[];

describe.each(variants)('renders correctly with %s variant', (variant) => {
  it.each(Object.keys(TAG_PROPERTIES[variant]) as TagType[])('renders correctly with %s type', (type) => {
    const { getByTestId, getByText } = render(
      <Tag variant={variant} type={type} text="another tag" testID="testing.tag" />
    );

    const tag = getByTestId('testing.tag');
    const tagLabel = getByText('another tag');

    expect(tag).toHaveStyle({
      backgroundColor: TAG_PROPERTIES[variant][type].backgroundColor,
    });

    expect(tagLabel).toHaveStyle({
      color: TAG_PROPERTIES[variant][type].color,
    });
  });
});
