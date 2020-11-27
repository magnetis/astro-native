import { render } from '@testing-library/react-native';
import React from 'react';

afterEach(() => {
  jest.clearAllMocks();
});

const onPress = jest.fn();

import InputEyeToggle from '../InputEyeToggle';
describe('InputEyeToggle', () => {
  it('renders correctly when visible is true', () => {
    const { getByTestId, queryByTestId } = render(<InputEyeToggle visible onPress={onPress} large={false} />);

    expect(getByTestId('InputEyeToggle.EyeOpen').props.style[0]).toEqual(
      expect.objectContaining({
        position: 'absolute',
        right: 16,
      })
    );
    expect(getByTestId('InputEyeToggle.EyeOpen').props.style[1]).toEqual(
      expect.objectContaining({
        top: 12,
      })
    );

    expect(queryByTestId('InputEyeToggle.EyeClosed')).toBeNull();
  });

  it('renders correctly when visible is false', () => {
    const { getByTestId, queryByTestId } = render(<InputEyeToggle visible={false} onPress={onPress} large={false} />);

    expect(getByTestId('InputEyeToggle.EyeClosed').props.style[0]).toEqual(
      expect.objectContaining({
        position: 'absolute',
        right: 16,
      })
    );
    expect(getByTestId('InputEyeToggle.EyeClosed').props.style[1]).toEqual(
      expect.objectContaining({
        top: 12,
      })
    );

    expect(queryByTestId('InputEyeToggle.EyeOpen')).toBeNull();
  });

  it('renders correctly when visible and large are true', () => {
    const { getByTestId, queryByTestId } = render(<InputEyeToggle visible onPress={onPress} large />);

    expect(getByTestId('InputEyeToggle.EyeOpen').props.style[0]).toEqual(
      expect.objectContaining({
        position: 'absolute',
        right: 16,
      })
    );
    expect(getByTestId('InputEyeToggle.EyeOpen').props.style[1]).toEqual(
      expect.objectContaining({
        top: 16,
      })
    );

    expect(queryByTestId('InputEyeToggle.EyeClosed')).toBeNull();
  });

  it('renders correctly when visible is false and large is true', () => {
    const { getByTestId, queryByTestId } = render(<InputEyeToggle visible={false} onPress={onPress} large />);

    expect(getByTestId('InputEyeToggle.EyeClosed').props.style[0]).toEqual(
      expect.objectContaining({
        position: 'absolute',
        right: 16,
      })
    );
    expect(getByTestId('InputEyeToggle.EyeClosed').props.style[1]).toEqual(
      expect.objectContaining({
        top: 16,
      })
    );

    expect(queryByTestId('InputEyeToggle.EyeOpen')).toBeNull();
  });
});
