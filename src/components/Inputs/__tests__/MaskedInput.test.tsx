import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { act, create } from 'react-test-renderer';

import MaskedInput from '../MaskedInput';

const onChangeText = jest.fn();
const onFocus = jest.fn();
const onBlur = jest.fn();

const props = {
  onChangeText,
  label: 'Label',
  placeholder: 'DD/MM/AAAA',
  onFocus,
  onBlur,
};

describe('MaskedInput', () => {
  it('renders correctly on blur state', () => {
    const { getByTestId } = render(<MaskedInput {...props} />);

    act(() => {
      getByTestId('MaskedInput.Input').props.onBlur();
    });

    expect(getByTestId('MaskedInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));

    expect(getByTestId('MaskedInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('MaskedInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.moon900 })
    );

    expect(getByTestId('MaskedInput.Input').props.placeholderTextColor).toEqual(colors.moon300);
    expect(getByTestId('MaskedInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('MaskedInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 16, fontSize: 16, paddingRight: 16, textAlign: 'left' })
    );
  });

  it('renders correctly on focus state', () => {
    const { getByTestId } = render(<MaskedInput {...props} />);

    act(() => {
      getByTestId('MaskedInput.Input').props.onFocus();
    });

    expect(getByTestId('MaskedInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));

    expect(getByTestId('MaskedInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('MaskedInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.uranus500 })
    );

    expect(getByTestId('MaskedInput.Input').props.placeholderTextColor).toEqual(colors.moon300);
    expect(getByTestId('MaskedInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('MaskedInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 16, fontSize: 16, paddingRight: 16, textAlign: 'left' })
    );
  });

  it('renders correctly when validated is true', () => {
    const { getByTestId } = render(<MaskedInput {...props} validated />);

    act(() => {
      getByTestId('MaskedInput.Input').props.onFocus();
    });

    expect(getByTestId('MaskedInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
    expect(getByTestId('MaskedInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('MaskedInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.earth400 })
    );

    expect(getByTestId('MaskedInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('MaskedInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 16, fontSize: 16, paddingRight: 56, textAlign: 'left' })
    );
  });

  it('renders correctly when error is truthy', () => {
    const { getByTestId } = render(<MaskedInput {...props} error="error" touched />);

    act(() => {
      getByTestId('MaskedInput.Input').props.onFocus();
    });

    expect(getByTestId('MaskedInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
    expect(getByTestId('MaskedInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('MaskedInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.mars500 })
    );

    expect(getByTestId('MaskedInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('MaskedInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 16, fontSize: 16, paddingRight: 56, textAlign: 'left' })
    );
  });

  it('renders correctly on blur state when large is true', () => {
    const { getByTestId } = render(<MaskedInput {...props} large />);

    expect(getByTestId('MaskedInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
    expect(getByTestId('MaskedInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('MaskedInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.moon900 })
    );

    expect(getByTestId('MaskedInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('MaskedInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 24, fontSize: 24, paddingRight: 24, textAlign: 'left' })
    );
  });

  it('renders correctly on focus state when large is true', () => {
    const { getByTestId } = render(<MaskedInput {...props} large />);

    act(() => {
      getByTestId('MaskedInput.Input').props.onFocus();
    });

    expect(getByTestId('MaskedInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
    expect(getByTestId('MaskedInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('MaskedInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.uranus500 })
    );

    expect(getByTestId('MaskedInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('MaskedInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 24, fontSize: 24, paddingRight: 24, textAlign: 'left' })
    );
  });

  it('renders correctly when validated and large are true', () => {
    const { getByTestId } = render(<MaskedInput {...props} validated large />);

    act(() => {
      getByTestId('MaskedInput.Input').props.onFocus();
    });

    expect(getByTestId('MaskedInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
    expect(getByTestId('MaskedInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('MaskedInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.earth400 })
    );

    expect(getByTestId('MaskedInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('MaskedInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 24, fontSize: 24, paddingRight: 56, textAlign: 'left' })
    );
  });

  it('renders correctly when error is truthy and large is true', () => {
    const { getByText, getByTestId } = render(<MaskedInput {...props} error="error" large touched />);

    act(() => {
      getByTestId('MaskedInput.Input').props.onFocus();
    });

    expect(getByTestId('MaskedInput').props.style).toEqual(expect.objectContaining({ paddingBottom: 12 }));
    expect(getByTestId('MaskedInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('MaskedInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.mars500 })
    );

    expect(getByTestId('MaskedInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('MaskedInput.Input').props.style[1]).toEqual(
      expect.objectContaining({ paddingLeft: 24, fontSize: 24, paddingRight: 56, textAlign: 'left' })
    );

    expect(getByText('error')).toBeTruthy();
  });

  it('calls onChangeText when input text changes', () => {
    const { getByTestId } = render(<MaskedInput {...props} />);

    fireEvent.changeText(getByTestId('MaskedInput.Input'), 'any text');

    expect(props.onChangeText).toHaveBeenCalledWith('any text');
  });

  it('disables caret when blockCursor is true', () => {
    const { getByTestId } = render(<MaskedInput blockCursor {...props} touched={false} />);

    expect(getByTestId('MaskedInput.Input').props.caretHidden).toEqual(true);
    expect(getByTestId('MaskedInput.Input').props.style[1]).toEqual(expect.objectContaining({ textAlign: 'left' }));
  });

  it('does not render error state when touched is false', () => {
    const { getByTestId } = render(<MaskedInput {...props} touched={false} error="Error" />);

    expect(getByTestId('MaskedInput.Container').props.style[1]).toEqual(
      expect.objectContaining({ backgroundColor: colors.space100, borderColor: colors.moon900 })
    );
  });

  it('focus input when container is pressed', async () => {
    const wrapper = create(<MaskedInput blockCursor {...props} touched={false} />);
    const container = wrapper.root.findByProps({ testID: 'MaskedInput.Container' });
    const input = wrapper.root.findByProps({ testID: 'MaskedInput.Input' });
    const spy = jest.spyOn(input.instance, 'focus');

    fireEvent.press(container);
    waitFor(() => expect(spy).toHaveBeenCalled());
  });
});
