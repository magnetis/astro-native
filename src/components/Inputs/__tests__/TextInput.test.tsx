import React from 'react';
import { act } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';

import TextInput from '../TextInput';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { setupTimeTravel, timeTravel } from '@root/timeTravel';

const onChangeText = jest.fn();
const onFocus = jest.fn();
const onBlur = jest.fn();

const props = {
  onChangeText,
  label: 'Label',
  onFocus,
  onBlur,
};
beforeEach(setupTimeTravel);
afterEach(() => {
  jest.clearAllMocks();
});

describe('TextInput', () => {
  it('renders correctly on blur state', () => {
    const { getByTestId } = render(<TextInput {...props} />);

    act(() => {
      getByTestId('TextInput.Input').props.onBlur();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));

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

    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        backgroundColor: '#ffffff',
        left: 16,
        overflow: 'hidden',
        paddingBottom: 4,
        paddingTop: 8,
        position: 'absolute',
        top: -6,
        transform: [{ translateY: 16 }],
      })
    );
  });

  it('renders correctly on blur state and has value', () => {
    const { getByTestId } = render(<TextInput {...props} value="some value" />);

    act(() => {
      getByTestId('TextInput.Input').props.onBlur();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));

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
    expect(getByTestId('TextInput.Input').props.value).toEqual('some value');

    timeTravel(200);
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        backgroundColor: '#ffffff',
        left: 16,
        overflow: 'hidden',
        paddingBottom: 4,
        paddingTop: 8,
        position: 'absolute',
        top: -6,
        transform: [{ translateY: 6 }],
      })
    );
  });

  it('renders correctly on blur state and the value changes', () => {
    const { getByTestId, rerender } = render(<TextInput {...props} value="" />);

    act(() => {
      getByTestId('TextInput.Input').props.onBlur();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));

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
    expect(getByTestId('TextInput.Input').props.value).toEqual('');

    timeTravel(200);
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        backgroundColor: '#ffffff',
        left: 16,
        overflow: 'hidden',
        paddingBottom: 4,
        paddingTop: 8,
        position: 'absolute',
        top: -6,
        transform: [{ translateY: 16 }],
      })
    );

    rerender(<TextInput {...props} value="some value" />);
    expect(getByTestId('TextInput.Input').props.value).toEqual('some value');
    timeTravel(200);
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        backgroundColor: '#ffffff',
        left: 16,
        overflow: 'hidden',
        paddingBottom: 4,
        paddingTop: 8,
        position: 'absolute',
        top: -6,
        transform: [{ translateY: 6 }],
      })
    );
  });

  it('renders correctly on focus state', () => {
    const { getByTestId } = render(<TextInput {...props} />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
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

    timeTravel(200);
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        backgroundColor: '#ffffff',
        left: 16,
        overflow: 'hidden',
        paddingBottom: 4,
        paddingTop: 8,
        position: 'absolute',
        top: -6,
        transform: [{ translateY: 6 }],
      })
    );
  });

  it('renders correctly on focus state when has value', () => {
    const { getByTestId } = render(<TextInput {...props} value="some value" />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
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

    expect(getByTestId('TextInput.Input').props.value).toEqual('some value');

    timeTravel(200);
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        backgroundColor: '#ffffff',
        left: 16,
        overflow: 'hidden',
        paddingBottom: 4,
        paddingTop: 8,
        position: 'absolute',
        top: -6,
        transform: [{ translateY: 6 }],
      })
    );
  });

  it('renders correctly when validated is true', () => {
    const { getByTestId } = render(<TextInput {...props} validated />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
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

  it('renders correctly when error is truthy', () => {
    const { getByTestId } = render(<TextInput {...props} error="error" touched />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
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

  it('renders correctly on blur state when large is true', () => {
    const { getByTestId } = render(<TextInput {...props} large />);

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
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

  it('renders correctly on focus state when large is true', () => {
    const { getByTestId } = render(<TextInput {...props} large />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
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

  it('renders correctly when validated and large are true', () => {
    const { getByTestId } = render(<TextInput {...props} validated large />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
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

  it('renders correctly when error is truthy and large is true', () => {
    const { getByTestId } = render(<TextInput {...props} error="error" large touched />);

    act(() => {
      getByTestId('TextInput.Input').props.onFocus();
    });

    expect(getByTestId('TextInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
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

    expect(queryByTestId('InputEyeToggle.EyeOpen')).toBeNull();

    update(<TextInput {...props} password />);

    expect(queryByTestId('InputEyeToggle.EyeClosed')).not.toBeNull();
    expect(getByTestId('TextInput.Input').props.secureTextEntry).toBe(false);

    fireEvent.press(getByTestId('InputEyeToggle.EyeClosed'));

    expect(queryByTestId('InputEyeToggle.EyeOpen')).not.toBeNull();
    expect(getByTestId('TextInput.Input').props.secureTextEntry).toBe(true);
  });

  it('does not render error state when touched is false', () => {
    const { getByTestId } = render(<TextInput {...props} touched={false} error="Error" />);

    expect(getByTestId('TextInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.moon900 })
    );
  });
});
