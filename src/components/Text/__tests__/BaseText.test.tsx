import { render } from '@testing-library/react-native';
import React from 'react';
import BaseText from '../BaseText';

const props = {
  color: 'red',
  fontFamily: 'Poppins-Regular',
  fontSize: 16,
};

describe('BaseText', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <BaseText align="right" {...props}>
        Sample Text
      </BaseText>
    );

    expect(getByText('Sample Text').props.style).toEqual(
      expect.objectContaining({
        color: 'red',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        textAlign: 'right',
      })
    );
  });

  it('forwards valid Text props', () => {
    const { getByText } = render(
      <BaseText accessibilityLabel="label test" align="right" {...props}>
        Sample Text
      </BaseText>
    );

    expect(getByText('Sample Text').props.accessibilityLabel).toEqual('label test');
  });
});
