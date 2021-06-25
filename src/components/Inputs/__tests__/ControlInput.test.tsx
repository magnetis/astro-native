import React from 'react';
import { act, create } from 'react-test-renderer';
import { colors } from '@magnetis/astro-tokens';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import ControlInput from '../ControlInput';

const onValueChange = jest.fn();
const onBlur = jest.fn();
const onFocus = jest.fn();

const props = {
  onValueChange,
  step: 10,
  initialValue: 0,
  label: 'Value (R$)',
  onFocus,
  onBlur,
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('ControlInput', () => {
  it('renders correctly with default props when blurred', () => {
    const { getByTestId } = render(<ControlInput {...props} />);

    act(() => {
      getByTestId('ControlInput.Input').props.onBlur();
    });

    expect(getByTestId('ControlInput').props.style).toEqual(
      expect.objectContaining({
        paddingBottom: 22,
      })
    );

    expect(getByTestId('ControlInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('ControlInput.Container').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.space100,
        borderColor: colors.moon900,
        paddingRight: 16,
      })
    );

    expect(getByTestId('ControlInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        flex: 1,
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('ControlInput.Input').props.style[1]).toEqual(
      expect.objectContaining({
        paddingLeft: 16,
        fontSize: 16,
      })
    );
    expect(getByTestId('ControlInput.Input').props.autoCompleteType).toEqual('off');
    expect(getByTestId('ControlInput.Input').props.keyboardType).toEqual('numeric');
    expect(getByTestId('ControlInput.Input').props.caretHidden).toBe(true);
  });

  it('renders correctly when focused', () => {
    const { getByTestId } = render(<ControlInput {...props} />);

    act(() => {
      getByTestId('ControlInput.Input').props.onFocus();
    });

    expect(getByTestId('ControlInput').props.style).toEqual(
      expect.objectContaining({
        paddingBottom: 22,
      })
    );

    expect(getByTestId('ControlInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('ControlInput.Container').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.space100,
        borderColor: colors.uranus500,
        paddingRight: 16,
      })
    );

    expect(getByTestId('ControlInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        flex: 1,
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('ControlInput.Input').props.style[1]).toEqual(
      expect.objectContaining({
        paddingLeft: 16,
        fontSize: 16,
      })
    );
    expect(getByTestId('ControlInput.Input').props.autoCompleteType).toEqual('off');
    expect(getByTestId('ControlInput.Input').props.keyboardType).toEqual('numeric');
    expect(getByTestId('ControlInput.Input').props.caretHidden).toBe(true);
  });

  it('renders correctly when large is true', () => {
    const { getByTestId } = render(<ControlInput {...props} large />);

    expect(getByTestId('ControlInput').props.style).toEqual(
      expect.objectContaining({
        paddingBottom: 22,
      })
    );

    expect(getByTestId('ControlInput.Container').props.style[0]).toEqual(
      expect.objectContaining({
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
      })
    );
    expect(getByTestId('ControlInput.Container').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.space100,
        borderColor: colors.moon900,
        paddingRight: 24,
      })
    );

    expect(getByTestId('ControlInput.Input').props.style[0]).toEqual(
      expect.objectContaining({
        flex: 1,
        fontFamily: 'Lato-Regular',
        paddingBottom: 8,
        paddingTop: 28,
      })
    );
    expect(getByTestId('ControlInput.Input').props.style[1]).toEqual(
      expect.objectContaining({
        paddingLeft: 24,
        fontSize: 24,
      })
    );
    expect(getByTestId('ControlInput.Input').props.autoCompleteType).toEqual('off');
    expect(getByTestId('ControlInput.Input').props.keyboardType).toEqual('numeric');
    expect(getByTestId('ControlInput.Input').props.caretHidden).toBe(true);
  });

  it('renders correctly when error is truthy and touched is true', () => {
    const { getByTestId, getByText } = render(<ControlInput {...props} touched error="Error" />);

    expect(getByText('Error')).toBeDefined();

    expect(getByTestId('ControlInput.Container').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.space100,
        borderColor: colors.mars500,
        paddingRight: 16,
      })
    );
  });

  it('renders correctly when validated is true', () => {
    const { getByTestId } = render(<ControlInput {...props} touched validated />);

    expect(getByTestId('ControlInput.Container').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.space100,
        borderColor: colors.earth400,
        paddingRight: 16,
      })
    );
  });

  it('renders correctly when disabled is true', () => {
    const { getByTestId } = render(<ControlInput {...props} disabled />);

    expect(getByTestId('ControlInput.Container').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.moon100,
        borderColor: colors.moon200,
        paddingRight: 16,
      })
    );

    expect(getByTestId('ControlInput.Input').props.editable).toBe(false);

    fireEvent.press(getByTestId('ControlInput.Container'));
    expect(onFocus).not.toHaveBeenCalled();

    fireEvent.press(getByTestId('ControlInput.Increment'));
    expect(getByTestId('ControlInput.Input').props.value).toEqual('');

    fireEvent.press(getByTestId('ControlInput.Decrement'));
    expect(getByTestId('ControlInput.Input').props.value).toEqual('');
  });

  it('focus input when container is pressed', async () => {
    const wrapper = create(<ControlInput {...props} touched={false} />);
    const container = wrapper.root.findByProps({ testID: 'ControlInput.Container' });
    const input = wrapper.root.findByProps({ testID: 'ControlInput.Input' });
    const spy = jest.spyOn(input.instance, 'focus');

    fireEvent.press(container);
    waitFor(() => expect(spy).toHaveBeenCalled());
  });

  it('calls onBlur when blurred', () => {
    const { getByTestId } = render(<ControlInput {...props} />);

    act(() => {
      getByTestId('ControlInput.Input').props.onBlur();
    });

    expect(onBlur).toHaveBeenCalled();
  });

  describe('when enableCents is false', () => {
    it('increases value when increment is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0');

      fireEvent.press(getByTestId('ControlInput.Increment'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('10');
    });

    it('increases value to maxValue when next step is bigger than maxValue and increment is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} initialValue={10} maxValue={15} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('10');

      fireEvent.press(getByTestId('ControlInput.Increment'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('15');
    });

    it('changes value to maxValue when current value is bigger and increment is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} initialValue={1000} maxValue={15} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('1.000');

      fireEvent.press(getByTestId('ControlInput.Increment'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('15');
    });

    it('changes value to minValue when next step is smaller than minValue and increment is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} initialValue={0} maxValue={1000} minValue={100} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0');

      fireEvent.press(getByTestId('ControlInput.Increment'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('100');
    });

    it('decreases value when decrement is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} initialValue={10} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('10');

      fireEvent.press(getByTestId('ControlInput.Decrement'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0');
    });

    it('decreases value to minValue when next step is smaller than minValue and  decrement is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} initialValue={10} minValue={5} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('10');

      fireEvent.press(getByTestId('ControlInput.Decrement'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('5');
    });

    it('changes value to minValue when current value is smaller and decrement is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} initialValue={0} minValue={15} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0');

      fireEvent.press(getByTestId('ControlInput.Decrement'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('15');
    });

    it('changes value to maxValue when next step is bigger than maxValue and decrement is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} initialValue={2000} maxValue={1000} minValue={100} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('2.000');

      fireEvent.press(getByTestId('ControlInput.Decrement'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('1.000');
    });

    it('changes value when user types in', () => {
      const { getByTestId } = render(<ControlInput {...props} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0');

      fireEvent.changeText(getByTestId('ControlInput.Input'), '1234');

      expect(getByTestId('ControlInput.Input').props.value).toEqual('1.234');
    });

    it('changes value to 0 when user clears input', () => {
      const { getByTestId } = render(<ControlInput {...props} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0');

      fireEvent.changeText(getByTestId('ControlInput.Input'), '');

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0');
    });
  });

  describe('when enableCents is true', () => {
    it('increases value when increment is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} enableCents />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0,00');

      fireEvent.press(getByTestId('ControlInput.Increment'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('10,00');
    });

    it('increases value to maxValue when next step is bigger than maxValue', () => {
      const { getByTestId } = render(<ControlInput {...props} enableCents initialValue={10} maxValue={15} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('10,00');

      fireEvent.press(getByTestId('ControlInput.Increment'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('15,00');
    });

    it('changes value to maxValue when current value is bigger and increment is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} enableCents initialValue={1000} maxValue={15} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('1.000,00');

      fireEvent.press(getByTestId('ControlInput.Increment'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('15,00');
    });

    it('changes value to minValue when next step is smaller than minValue and increment is pressed', () => {
      const { getByTestId } = render(
        <ControlInput {...props} initialValue={0} maxValue={1000} minValue={100} enableCents />
      );

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0,00');

      fireEvent.press(getByTestId('ControlInput.Increment'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('100,00');
    });

    it('decreases value when decrement is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} enableCents initialValue={10} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('10,00');

      fireEvent.press(getByTestId('ControlInput.Decrement'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0,00');
    });

    it('decreases value to minValue when next step is smaller than minValue', () => {
      const { getByTestId } = render(<ControlInput {...props} enableCents initialValue={10} minValue={5} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('10,00');

      fireEvent.press(getByTestId('ControlInput.Decrement'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('5,00');
    });

    it('changes value to minValue when current value is smaller and decrement is pressed', () => {
      const { getByTestId } = render(<ControlInput {...props} enableCents initialValue={0} minValue={15} />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0,00');

      fireEvent.press(getByTestId('ControlInput.Decrement'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('15,00');
    });

    it('changes value to maxValue when next step is bigger than maxValue and decrement is pressed', () => {
      const { getByTestId } = render(
        <ControlInput {...props} initialValue={2000} maxValue={1000} minValue={100} enableCents />
      );

      expect(getByTestId('ControlInput.Input').props.value).toEqual('2.000,00');

      fireEvent.press(getByTestId('ControlInput.Decrement'));

      expect(getByTestId('ControlInput.Input').props.value).toEqual('1.000,00');
    });

    it('changes value when user types in', () => {
      const { getByTestId } = render(<ControlInput {...props} enableCents />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0,00');

      fireEvent.changeText(getByTestId('ControlInput.Input'), '1234,00');

      expect(getByTestId('ControlInput.Input').props.value).toEqual('1.234,00');
    });

    it('changes value to 0 when user clears input', () => {
      const { getByTestId } = render(<ControlInput {...props} enableCents />);

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0,00');

      fireEvent.changeText(getByTestId('ControlInput.Input'), '');

      expect(getByTestId('ControlInput.Input').props.value).toEqual('0,00');
    });
  });
});
