import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import Checkbox from '../Checkbox';

const onPress = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe('Checkbox', () => {
  it('renders correctly with default props', () => {
    const { getByTestId, getByText } = render(<Checkbox label="check this" onPress={onPress} />);

    expect(getByTestId('Checkbox').props.style).toEqual(
      expect.objectContaining({ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' })
    );
    expect(getByTestId('Checkbox.Box').props.style[0]).toEqual(
      expect.objectContaining({
        width: 16,
        height: 16,
        borderRadius: 2,
        borderWidth: 2,
        marginRight: 8,
      })
    );
    expect(getByTestId('Checkbox.Box').props.style[1]).toEqual(
      expect.objectContaining({
        borderColor: colors.moon500,
        backgroundColor: colors.space100,
      })
    );
    expect(getByText('check this').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
      })
    );
  });

  it('renders correctly when startChecked is true and changes to unchecked when pressed', () => {
    const { getByTestId, getByText, queryByTestId } = render(
      <Checkbox startChecked testID="Checkbox" label="check this" onPress={onPress} />
    );

    expect(getByTestId('Checkbox').props.style).toEqual(
      expect.objectContaining({ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' })
    );
    expect(getByTestId('Checkbox.Box').props.style[0]).toEqual(
      expect.objectContaining({
        width: 16,
        height: 16,
        borderRadius: 2,
        borderWidth: 2,
        marginRight: 8,
      })
    );
    expect(getByTestId('Checkbox.Box').props.style[1]).toEqual(
      expect.objectContaining({
        borderColor: colors.uranus500,
        backgroundColor: colors.uranus500,
      })
    );
    expect(getByText('check this').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
      })
    );
    expect(queryByTestId('Checkbox.Indeterminate')).toBeNull();
    expect(queryByTestId('Checkbox.Check')).not.toBeNull();

    fireEvent.press(getByTestId('Checkbox'));
    expect(onPress).toHaveBeenCalledWith(false, false);

    expect(queryByTestId('Checkbox.Check')).toBeNull();
    expect(getByTestId('Checkbox.Box').props.style[1]).toEqual(
      expect.objectContaining({
        borderColor: colors.moon500,
        backgroundColor: colors.space100,
      })
    );

    fireEvent.press(getByTestId('Checkbox'));
    expect(onPress).toHaveBeenCalledWith(true, false);
  });

  it('renders correctly when isIndeterminate is true and changes to indeterminate checked when pressed', () => {
    const { getByTestId, getByText, queryByTestId } = render(
      <Checkbox isIndeterminate testID="Checkbox" label="check this" onPress={onPress} />
    );

    expect(getByTestId('Checkbox').props.style).toEqual(
      expect.objectContaining({ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' })
    );
    expect(getByTestId('Checkbox.Box').props.style[0]).toEqual(
      expect.objectContaining({
        width: 16,
        height: 16,
        borderRadius: 2,
        borderWidth: 2,
        marginRight: 8,
      })
    );
    expect(getByTestId('Checkbox.Box').props.style[1]).toEqual(
      expect.objectContaining({
        borderColor: colors.moon500,
        backgroundColor: colors.space100,
      })
    );
    expect(getByText('check this').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
      })
    );
    expect(queryByTestId('Checkbox.Check')).toBeNull();
    expect(queryByTestId('Checkbox.Indeterminate')).toBeNull();

    fireEvent.press(getByTestId('Checkbox'));
    expect(onPress).toHaveBeenCalledWith(true, true);

    expect(queryByTestId('Checkbox.Check')).toBeNull();
    expect(queryByTestId('Checkbox.Indeterminate')).not.toBeNull();
    expect(getByTestId('Checkbox.Box').props.style[1]).toEqual(
      expect.objectContaining({
        borderColor: colors.uranus500,
        backgroundColor: colors.uranus500,
      })
    );

    fireEvent.press(getByTestId('Checkbox'));
    expect(onPress).toHaveBeenCalledWith(false, true);
  });

  it('renders correctly when isDisabled is true and do nothing when pressed', () => {
    const { getByTestId, getByText, queryByTestId } = render(
      <Checkbox isDisabled testID="Checkbox" label="check this" onPress={onPress} />
    );

    expect(getByTestId('Checkbox').props.style).toEqual(
      expect.objectContaining({ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' })
    );
    expect(getByTestId('Checkbox.Box').props.style[0]).toEqual(
      expect.objectContaining({
        width: 16,
        height: 16,
        borderRadius: 2,
        borderWidth: 2,
        marginRight: 8,
      })
    );
    expect(getByTestId('Checkbox.Box').props.style[1]).toEqual(
      expect.objectContaining({
        borderColor: colors.moon200,
        backgroundColor: colors.space100,
      })
    );
    expect(getByText('check this').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
      })
    );
    expect(queryByTestId('Checkbox.Check')).toBeNull();
    expect(queryByTestId('Checkbox.Indeterminate')).toBeNull();

    fireEvent.press(getByTestId('Checkbox'));
    expect(onPress).toHaveBeenCalledTimes(0);

    expect(queryByTestId('Checkbox.Check')).toBeNull();
    expect(queryByTestId('Checkbox.Indeterminate')).toBeNull();
    expect(getByTestId('Checkbox.Box').props.style[1]).toEqual(
      expect.objectContaining({
        borderColor: colors.moon200,
        backgroundColor: colors.space100,
      })
    );
  });
});
