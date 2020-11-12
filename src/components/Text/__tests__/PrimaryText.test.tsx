import React from 'react';
import { render } from '@testing-library/react-native';

import { PrimaryTextVerySmall, PrimaryTextSmall, PrimaryTextMedium, PrimaryTextLarge } from '../PrimaryText';

describe('Text', () => {
  describe('PrimaryTextVerySmall', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <PrimaryTextVerySmall>The quick brown fox jumps over the lazy dog</PrimaryTextVerySmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-Regular',
          fontSize: 12,
        })
      );
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <PrimaryTextVerySmall bold>The quick brown fox jumps over the lazy dog</PrimaryTextVerySmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-Bold',
          fontSize: 12,
        })
      );
    });

    it('renders with semibold', () => {
      const { getByText } = render(
        <PrimaryTextVerySmall semiBold>The quick brown fox jumps over the lazy dog</PrimaryTextVerySmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-SemiBold',
          fontSize: 12,
        })
      );
    });
  });

  describe('PrimaryTextSmall', () => {
    it('renders correctly', () => {
      const { getByText } = render(<PrimaryTextSmall>The quick brown fox jumps over the lazy dog</PrimaryTextSmall>);

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
        })
      );
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <PrimaryTextSmall bold>The quick brown fox jumps over the lazy dog</PrimaryTextSmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-Bold',
          fontSize: 14,
        })
      );
    });

    it('renders with semibold', () => {
      const { getByText } = render(
        <PrimaryTextSmall semiBold>The quick brown fox jumps over the lazy dog</PrimaryTextSmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-SemiBold',
          fontSize: 14,
        })
      );
    });
  });

  describe('PrimaryTextMedium', () => {
    it('renders correctly', () => {
      const { getByText } = render(<PrimaryTextMedium>The quick brown fox jumps over the lazy dog</PrimaryTextMedium>);

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-Regular',
          fontSize: 16,
        })
      );
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <PrimaryTextMedium bold>The quick brown fox jumps over the lazy dog</PrimaryTextMedium>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-Bold',
          fontSize: 16,
        })
      );
    });

    it('renders with semibold', () => {
      const { getByText } = render(
        <PrimaryTextMedium semiBold>The quick brown fox jumps over the lazy dog</PrimaryTextMedium>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-SemiBold',
          fontSize: 16,
        })
      );
    });
  });

  describe('PrimaryTextLarge', () => {
    it('renders correctly', () => {
      const { getByText } = render(<PrimaryTextLarge>The quick brown fox jumps over the lazy dog</PrimaryTextLarge>);

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-Regular',
          fontSize: 24,
        })
      );
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <PrimaryTextLarge bold>The quick brown fox jumps over the lazy dog</PrimaryTextLarge>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-Bold',
          fontSize: 24,
        })
      );
    });

    it('renders with semibold', () => {
      const { getByText } = render(
        <PrimaryTextLarge semiBold>The quick brown fox jumps over the lazy dog</PrimaryTextLarge>
      );
      const text = getByText('The quick brown fox jumps over the lazy dog');

      expect(text.props.style).toEqual(
        expect.objectContaining({
          fontFamily: 'Poppins-SemiBold',
          fontSize: 24,
        })
      );
    });
  });
});
