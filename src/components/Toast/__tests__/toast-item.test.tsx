import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import ToastItem from '../toast-item';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'toast.view',
};

describe('Outline Icon Label Button', () => {
  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(<ToastItem text="MyButton" {...props} icon="Alert" />);
    const TouchableOpacity = getByTestId('toast.view');
    const buttonStyle = Object.assign({}, ...TouchableOpacity.props.style);
    const text = getByText('MyText');
    const icon = getByTestId('toast.view.Icon');
  });
});
