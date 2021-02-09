import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

import Link from '../Link';
import { PrimaryTextMedium } from '@components/Text';

const onPress = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Link', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <Link onPress={onPress}>
        <PrimaryTextMedium>this is a link</PrimaryTextMedium>
      </Link>
    );

    expect(getByText('this is a link').props.style).toEqual(
      expect.objectContaining({
        textDecorationLine: 'underline',
      })
    );
  });

  it('renders nothing when child is not valid', () => {
    const { queryByText } = render(
      <Link onPress={onPress}>
        <Text>this is a link</Text>
      </Link>
    );

    expect(queryByText('this is a link')).toBeNull();
  });
});
