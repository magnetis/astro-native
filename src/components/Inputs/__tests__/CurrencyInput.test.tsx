import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CurrencyInput from '../CurrencyInput';

const onValueChange = jest.fn();

const props = {
  onValueChange,
  placeholder: '0,00',
  label: 'Money (R$)',
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('CurrencyInput', () => {
  it('renders correctly with default props', () => {
    const { queryByTestId, getByTestId } = render(<CurrencyInput {...props} />);

    expect(queryByTestId('CurrencyInput')).toBeDefined();
    expect(getByTestId('CurrencyInput').props.value).toEqual('');
  });

  it('formats value correctly when changed with enableCents false', () => {
    const { getByTestId } = render(<CurrencyInput {...props} />);

    fireEvent.changeText(getByTestId('CurrencyInput'), '1234');
    expect(getByTestId('CurrencyInput').props.value).toEqual('1.234');
    expect(onValueChange).toHaveBeenCalledWith(1234, '1.234');
  });

  it('formats value correctly when changed with enableCents true', () => {
    const { getByTestId } = render(<CurrencyInput {...props} enableCents />);

    fireEvent.changeText(getByTestId('CurrencyInput'), '1234');
    expect(getByTestId('CurrencyInput').props.value).toEqual('12,34');
    expect(onValueChange).toHaveBeenCalledWith(12.34, '12,34');
  });

  it('renders correctly when empty', () => {
    const { getByTestId } = render(<CurrencyInput {...props} enableCents />);

    fireEvent.changeText(getByTestId('CurrencyInput'), '12324');
    fireEvent.changeText(getByTestId('CurrencyInput'), '');
    expect(getByTestId('CurrencyInput').props.value).toEqual('');
    expect(onValueChange).toHaveBeenCalledWith(null, '');
  });

  it('updates internal value when controlled', () => {
    const { getByTestId, update } = render(<CurrencyInput value={0} {...props} enableCents />);

    expect(getByTestId('CurrencyInput').props.value).toEqual('0,00');

    fireEvent.changeText(getByTestId('CurrencyInput'), '123240');
    expect(getByTestId('CurrencyInput').props.value).toEqual('1.232,40');
    expect(onValueChange).toHaveBeenCalledWith(1232.4, '1.232,40');

    update(<CurrencyInput value={1234.21} {...props} enableCents />);

    expect(getByTestId('CurrencyInput').props.value).toEqual('1.234,21');
    expect(onValueChange).toHaveBeenCalledWith(1234.21, '1.234,21');

    update(<CurrencyInput value={undefined} {...props} enableCents />);

    expect(getByTestId('CurrencyInput').props.value).toEqual('');
    expect(onValueChange).toHaveBeenCalledWith(null, '');
  });
});
