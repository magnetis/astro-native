import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import RadioGroup from '../RadioGroup';

const onOptionChange = jest.fn();
const options = [
  { label: 'Pizza', value: 'pizza' },
  { label: 'Hamburguer', value: 'hamburguer' },
  { label: 'Salad', value: 'salad', disabled: true },
];

afterEach(() => {
  jest.clearAllMocks();
});

describe('RadioGroup', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<RadioGroup options={options} onOptionChange={onOptionChange} />);

    expect(getByTestId('RadioGroup').props.style).toEqual(expect.objectContaining({ flexDirection: 'column' }));

    expect(getByTestId('RadioGroup.Pizza'));
    expect(getByTestId('RadioGroup.Hamburguer'));
    expect(getByTestId('RadioGroup.Salad'));

    expect(getByTestId('RadioGroup.Wrapper.Pizza').props.style).toEqual(
      expect.objectContaining({ marginVertical: 12 })
    );
    expect(getByTestId('RadioGroup.Wrapper.Hamburguer').props.style).toEqual(
      expect.objectContaining({ marginVertical: 12 })
    );
    expect(getByTestId('RadioGroup.Wrapper.Salad').props.style).toEqual(
      expect.objectContaining({ marginVertical: 12 })
    );
  });

  it('renders correctly with inline as true', () => {
    const { getByTestId } = render(<RadioGroup inline options={options} onOptionChange={onOptionChange} />);

    expect(getByTestId('RadioGroup').props.style).toEqual(expect.objectContaining({ flexDirection: 'row' }));

    expect(getByTestId('RadioGroup.Pizza'));
    expect(getByTestId('RadioGroup.Hamburguer'));
    expect(getByTestId('RadioGroup.Salad'));

    expect(getByTestId('RadioGroup.Wrapper.Pizza').props.style).toEqual(
      expect.objectContaining({ marginHorizontal: 12 })
    );
    expect(getByTestId('RadioGroup.Wrapper.Hamburguer').props.style).toEqual(
      expect.objectContaining({ marginHorizontal: 12 })
    );
    expect(getByTestId('RadioGroup.Wrapper.Salad').props.style).toEqual(
      expect.objectContaining({ marginHorizontal: 12 })
    );
  });

  it('calls onOptionChange when a diferent option is selected', () => {
    const { getByTestId } = render(
      <RadioGroup defaultOption="pizza" options={options} onOptionChange={onOptionChange} />
    );

    fireEvent.press(getByTestId('RadioGroup.Hamburguer'));
    expect(onOptionChange).toHaveBeenCalledWith({ label: 'Hamburguer', value: 'hamburguer' });
  });

  it('does nothing when a already selected option is pressed', () => {
    const { getByTestId } = render(
      <RadioGroup defaultOption="pizza" options={options} onOptionChange={onOptionChange} />
    );

    fireEvent.press(getByTestId('RadioGroup.Pizza'));
    expect(onOptionChange).toHaveBeenCalledTimes(0);
  });

  it('does nothing when a disabled option is pressed', () => {
    const { getByTestId } = render(
      <RadioGroup testID="RadioGroup" defaultOption="pizza" options={options} onOptionChange={onOptionChange} />
    );

    fireEvent.press(getByTestId('RadioGroup.Salad'));
    expect(onOptionChange).toHaveBeenCalledTimes(0);
  });
});
