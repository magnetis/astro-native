import React from 'react';
import { render } from '@testing-library/react-native';

import {
  PrimaryTextVerySmall,
  PrimaryTextSmall,
  PrimaryTextMedium,
  PrimaryTextLarge,
  SecondaryTextVerySmall,
  SecondaryTextSmall,
  SecondaryTextMedium,
  SecondaryTextLarge,
} from '../Text';

describe('Text', () => {
  describe('PrimaryTextVerySmall', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <PrimaryTextVerySmall>The quick brown fox jumps over the lazy dog</PrimaryTextVerySmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-Regular');
      expect(style.fontSize).toBe(12);
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <PrimaryTextVerySmall bold>The quick brown fox jumps over the lazy dog</PrimaryTextVerySmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-Bold');
      expect(style.fontSize).toBe(12);
    });

    it('renders with semibold', () => {
      const { getByText } = render(
        <PrimaryTextVerySmall semiBold>The quick brown fox jumps over the lazy dog</PrimaryTextVerySmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-SemiBold');
      expect(style.fontSize).toBe(12);
    });
  });
  describe('PrimaryTextSmall', () => {
    it('renders correctly', () => {
      const { getByText } = render(<PrimaryTextSmall>The quick brown fox jumps over the lazy dog</PrimaryTextSmall>);

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-Regular');
      expect(style.fontSize).toBe(14);
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <PrimaryTextSmall bold>The quick brown fox jumps over the lazy dog</PrimaryTextSmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-Bold');
      expect(style.fontSize).toBe(14);
    });

    it('renders with semibold', () => {
      const { getByText } = render(
        <PrimaryTextSmall semiBold>The quick brown fox jumps over the lazy dog</PrimaryTextSmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-SemiBold');
      expect(style.fontSize).toBe(14);
    });
  });
  describe('PrimaryTextMedium', () => {
    it('renders correctly', () => {
      const { getByText } = render(<PrimaryTextMedium>The quick brown fox jumps over the lazy dog</PrimaryTextMedium>);

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-Regular');
      expect(style.fontSize).toBe(16);
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <PrimaryTextMedium bold>The quick brown fox jumps over the lazy dog</PrimaryTextMedium>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-Bold');
      expect(style.fontSize).toBe(16);
    });

    it('renders with semibold', () => {
      const { getByText } = render(
        <PrimaryTextMedium semiBold>The quick brown fox jumps over the lazy dog</PrimaryTextMedium>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-SemiBold');
      expect(style.fontSize).toBe(16);
    });
  });
  describe('PrimaryTextLarge', () => {
    it('renders correctly', () => {
      const { getByText } = render(<PrimaryTextLarge>The quick brown fox jumps over the lazy dog</PrimaryTextLarge>);

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-Regular');
      expect(style.fontSize).toBe(24);
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <PrimaryTextLarge bold>The quick brown fox jumps over the lazy dog</PrimaryTextLarge>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-Bold');
      expect(style.fontSize).toBe(24);
    });

    it('renders with semibold', () => {
      const { getByText } = render(
        <PrimaryTextLarge semiBold>The quick brown fox jumps over the lazy dog</PrimaryTextLarge>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Poppins-SemiBold');
      expect(style.fontSize).toBe(24);
    });
  });

  describe('SecondaryTextVerySmall', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <SecondaryTextVerySmall>The quick brown fox jumps over the lazy dog</SecondaryTextVerySmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Lato-Regular');
      expect(style.fontSize).toBe(12);
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <SecondaryTextVerySmall bold>The quick brown fox jumps over the lazy dog</SecondaryTextVerySmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Lato-Bold');
      expect(style.fontSize).toBe(12);
    });
  });
  describe('SecondaryTextSmall', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <SecondaryTextSmall>The quick brown fox jumps over the lazy dog</SecondaryTextSmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Lato-Regular');
      expect(style.fontSize).toBe(14);
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <SecondaryTextSmall bold>The quick brown fox jumps over the lazy dog</SecondaryTextSmall>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Lato-Bold');
      expect(style.fontSize).toBe(14);
    });
  });
  describe('SecondaryTextMedium', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <SecondaryTextMedium>The quick brown fox jumps over the lazy dog</SecondaryTextMedium>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Lato-Regular');
      expect(style.fontSize).toBe(16);
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <SecondaryTextMedium bold>The quick brown fox jumps over the lazy dog</SecondaryTextMedium>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Lato-Bold');
      expect(style.fontSize).toBe(16);
    });
  });
  describe('SecondaryTextLarge', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <SecondaryTextLarge>The quick brown fox jumps over the lazy dog</SecondaryTextLarge>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Lato-Regular');
      expect(style.fontSize).toBe(24);
    });

    it('renders with bold', () => {
      const { getByText } = render(
        <SecondaryTextLarge bold>The quick brown fox jumps over the lazy dog</SecondaryTextLarge>
      );

      const text = getByText('The quick brown fox jumps over the lazy dog');
      const [style] = text.props.style;

      expect(style.fontFamily).toEqual('Lato-Bold');
      expect(style.fontSize).toBe(24);
    });
  });
});
