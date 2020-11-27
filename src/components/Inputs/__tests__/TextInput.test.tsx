import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import TextInput from '../TextInput';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { act } from 'react-test-renderer';

const onChangeText = jest.fn();
const onFocus = jest.fn();
const onBlur = jest.fn();

const props = {
  onChangeText,
  label: 'Label',
  touched: true,
  onFocus,
  onBlur,
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('TextInput', () => {
  it('renders correctly on blur state', () => {
    const { getByTestId } = render(<TextInput {...props} />);

    act(() => {
      getByTestId('TextInput.Input').props.onBlur();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 22 }));

    expect(getByTestId('TextInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('TextInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.moon900 })
    );

    expect(getByTestId('TextInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('TextInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 16, fontSize: 16, paddingRight: 16 })
    );
  });

  it('renders correctly on focus state', async () => {
    const { getByTestId } = render(<TextInput {...props} />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 22 }));
    expect(getByTestId('TextInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('TextInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.uranus500 })
    );

    expect(getByTestId('TextInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('TextInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 16, fontSize: 16, paddingRight: 16 })
    );
  });

  it('renders correctly when validated is true', async () => {
    const { getByTestId } = render(<TextInput {...props} validated />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 22 }));
    expect(getByTestId('TextInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('TextInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.earth400 })
    );

    expect(getByTestId('TextInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('TextInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 16, fontSize: 16, paddingRight: 56 })
    );
  });

  it('renders correctly when error is truthy', async () => {
    const { getByTestId } = render(<TextInput {...props} error="error" />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 22 }));
    expect(getByTestId('TextInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('TextInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.mars500 })
    );

    expect(getByTestId('TextInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('TextInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 16, fontSize: 16, paddingRight: 56 })
    );
  });

  it('renders correctly on blur state when large is true', async () => {
    const { getByTestId } = render(<TextInput {...props} large />);

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 22 }));
    expect(getByTestId('TextInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('TextInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.moon900 })
    );

    expect(getByTestId('TextInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('TextInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 24, fontSize: 24, paddingRight: 24 })
    );
  });

  it('renders correctly on focus state  when large is true', async () => {
    const { getByTestId } = render(<TextInput {...props} large />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 22 }));
    expect(getByTestId('TextInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('TextInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.uranus500 })
    );

    expect(getByTestId('TextInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('TextInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 24, fontSize: 24, paddingRight: 24 })
    );
  });

  it('renders correctly when validated and large are true', async () => {
    const { getByTestId } = render(<TextInput {...props} validated large />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 22 }));
    expect(getByTestId('TextInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('TextInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.earth400 })
    );

    expect(getByTestId('TextInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('TextInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 24, fontSize: 24, paddingRight: 56 })
    );
  });

  it('renders correctly when error is truthy and large is true', async () => {
    const { getByTestId } = render(<TextInput {...props} error="error" large />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 22 }));
    expect(getByTestId('TextInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('TextInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.mars500 })
    );

    expect(getByTestId('TextInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('TextInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 24, fontSize: 24, paddingRight: 56 })
    );
  });

  it('calls onChangeText when input text changes', () => {
    const { getByTestId } = render(<TextInput {...props} />);

    fireEvent.changeText(getByTestId('TextInput.Input'), 'any text');

    expect(props.onChangeText).toHaveBeenCalledWith('any text');
  });

  it('hides value when password is set to true and renders eye toggle', () => {
    const { getByTestId, queryByTestId, update } = render(<TextInput {...props} />);

    expect(queryByTestId('InputEyeToggle.EyeClosed')).toBeNull();

    update(<TextInput {...props} password />);

    expect(queryByTestId('InputEyeToggle.EyeClosed')).not.toBeNull();
    expect(getByTestId('TextInput.Input').props.secureTextEntry).toBe(true);

    fireEvent.press(getByTestId('InputEyeToggle.EyeClosed'));

    expect(queryByTestId('InputEyeToggle.EyeOpen')).not.toBeNull();
    expect(getByTestId('TextInput.Input').props.secureTextEntry).toBe(false);
  });
});
