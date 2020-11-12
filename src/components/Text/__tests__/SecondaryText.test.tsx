import React from 'react';
import { render } from '@testing-library/react-native';

import { SecondaryTextVerySmall, SecondaryTextSmall, SecondaryTextMedium, SecondaryTextLarge } from '../SecondaryText';

describe('Text', () => {
  describe('SecondaryTextVerySmall', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <SecondaryTextVerySmall>The quick brown fox jumps over the lazy dog</SecondaryTextVerySmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Lato-Regular',
          fontSize: 12,
        })
      );
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <SecondaryTextVerySmall bold>The quick brown fox jumps over the lazy dog</SecondaryTextVerySmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Lato-Bold',
          fontSize: 12,
        })
      );
    });
  });

  describe('SecondaryTextSmall', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <SecondaryTextSmall>The quick brown fox jumps over the lazy dog</SecondaryTextSmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Lato-Regular',
          fontSize: 14,
        })
      );
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <SecondaryTextSmall bold>The quick brown fox jumps over the lazy dog</SecondaryTextSmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Lato-Bold',
          fontSize: 14,
        })
      );
    });
  });

  describe('SecondaryTextMedium', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <SecondaryTextMedium>The quick brown fox jumps over the lazy dog</SecondaryTextMedium>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Lato-Regular',
          fontSize: 16,
        })
      );
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <SecondaryTextMedium bold>The quick brown fox jumps over the lazy dog</SecondaryTextMedium>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Lato-Bold',
          fontSize: 16,
        })
      );
    });
  });

  describe('SecondaryTextLarge', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <SecondaryTextLarge>The quick brown fox jumps over the lazy dog</SecondaryTextLarge>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Lato-Regular',
          fontSize: 24,
        })
      );
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <SecondaryTextLarge bold>The quick brown fox jumps over the lazy dog</SecondaryTextLarge>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Lato-Bold',
          fontSize: 24,
        })
      );
    });
  });
});
