import React from 'react';
import { render } from '@testing-library/react-native';

import { TitleSmall, TitleMedium, TitleLarge } from '../Title';

describe('Title', () => {
  describe('TitleSmall', () => {
    it('renders correctly', () => {
      const { getByText } = render(<TitleSmall>The quick brown fox jumps over the lazy dog</TitleSmall>);

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-SemiBold',
          fontSize: 32,
        })
      );
    });
  });

  describe('TitleMedium', () => {
    it('renders correctly', () => {
      const { getByText } = render(<TitleMedium>The quick brown fox jumps over the lazy dog</TitleMedium>);

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-SemiBold',
          fontSize: 40,
        })
      );
    });
  });

  describe('TitleLarge', () => {
    it('renders correctly', () => {
      const { getByText } = render(<TitleLarge>The quick brown fox jumps over the lazy dog</TitleLarge>);

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-SemiBold',
          fontSize: 48,
        })
      );
    });
  });
});
