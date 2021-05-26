import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { colors } from '@magnetis/astro-galaxy-tokens';

import Selection, { SelectionItem } from '../Selection';

afterEach(() => jest.clearAllMocks());

const items: SelectionItem[] = [
  { label: 'Item #1', value: 'item-1', icon: 'Cake' },
  { label: 'Item #2', value: 'item-2', activeColor: colors.mars500, activeTextColor: colors.space700 },
  { label: 'Item #3', value: 'item-3', disabled: true },
  { label: 'Item #4', value: 'item-4', activeColor: colors.venus500 },
  { label: 'Item #5', value: 'item-5', activeTextColor: colors.earth500 },
  { label: 'Item #6', value: 'item-6' },
];

const onChange = jest.fn();

const props = {
  items,
  onChange,
  backgroundColor: colors.space100,
  textColor: colors.moon900,
  activeItemColor: colors.uranus500,
  activeTextColor: colors.space100,
  disabledColor: colors.moon200,
};

describe('Selection', () => {
  it('renders correctly with default props', () => {
    const { getByTestId, getByText } = render(<Selection {...props} />);

    // Check Container styles
    expect(getByTestId('Selection').props.style).toEqual(
      expect.objectContaining({
        width: '100%',
        flex: 0,
        padding: 4,
      })
    );

    // Check Pressable styles
    expect(getByTestId('Selection.Item.Pressable-item-1').props.style[0]).toEqual(
      expect.objectContaining({
        alignItems: 'center',
        borderRadius: 8,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        minWidth: '80%',
        paddingVertical: 8,
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.uranus500,
        paddingHorizontal: 16 * 1.5,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        color: colors.space100,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-2').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.space100,
      })
    );
    expect(getByText('Item #2').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-3').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.moon100,
      })
    );
    expect(getByText('Item #3').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-4').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.space100,
      })
    );
    expect(getByText('Item #4').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-5').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.space100,
      })
    );
    expect(getByText('Item #5').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-6').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.space100,
      })
    );
    expect(getByText('Item #6').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
        fontFamily: 'Lato-Regular',
      })
    );
  });

  it('renders correctly when backgroundColor and activeItemColor are not passed', () => {
    const { getByTestId, getByText } = render(
      <Selection
        items={props.items}
        onChange={props.onChange}
        textColor={props.textColor}
        activeTextColor={props.activeTextColor}
        disabledColor={props.disabledColor}
      />
    );

    // Check container styles
    expect(getByTestId('Selection').props.style).toEqual(
      expect.objectContaining({
        width: '100%',
        flex: 0,
        padding: 4,
      })
    );

    // Check Pressable styles
    expect(getByTestId('Selection.Item.Pressable-item-1').props.style[0]).toEqual(
      expect.objectContaining({
        minWidth: '80%',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0,
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.uranus500,
        paddingHorizontal: 24,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        color: colors.space100,
        fontFamily: 'Lato-Regular',
      })
    );
  });

  it('renders icon aside when option has it', () => {
    const { queryByTestId } = render(<Selection {...props} />);

    expect(queryByTestId('Selection.Item.Icon-item-1')).not.toBeNull();
  });

  it('changes color of active items', () => {
    const { getByTestId, getByText } = render(<Selection {...props} />);

    expect(getByTestId('Selection.Item.Pressable-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.uranus500,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        color: colors.space100,
      })
    );

    fireEvent.press(getByTestId('Selection.Item.Pressable-item-2'));
    expect(getByTestId('Selection.Item.Pressable-item-2').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.mars500,
      })
    );
    expect(getByText('Item #2').props.style).toEqual(
      expect.objectContaining({
        color: colors.space700,
      })
    );

    fireEvent.press(getByTestId('Selection.Item.Pressable-item-3'));
    expect(getByTestId('Selection.Item.Pressable-item-3').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.moon100,
      })
    );
    expect(getByText('Item #3').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
      })
    );

    fireEvent.press(getByTestId('Selection.Item.Pressable-item-4'));
    expect(getByTestId('Selection.Item.Pressable-item-4').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.venus500,
      })
    );
    expect(getByText('Item #4').props.style).toEqual(
      expect.objectContaining({
        color: colors.space100,
      })
    );

    fireEvent.press(getByTestId('Selection.Item.Pressable-item-5'));
    expect(getByTestId('Selection.Item.Pressable-item-5').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.uranus500,
      })
    );
    expect(getByText('Item #5').props.style).toEqual(
      expect.objectContaining({
        color: colors.earth500,
      })
    );

    fireEvent.press(getByTestId('Selection.Item.Pressable-item-6'));
    expect(getByTestId('Selection.Item.Pressable-item-6').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.uranus500,
      })
    );
    expect(getByText('Item #6').props.style).toEqual(
      expect.objectContaining({
        color: colors.space100,
      })
    );
  });

  it('renders correctly in every size', () => {
    const { getByTestId, getByText, update } = render(<Selection size="very-small" {...props} />);

    expect(getByTestId('Selection.Item.Pressable-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        paddingHorizontal: 12 * 1.5,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        fontSize: 12,
      })
    );
    expect(getByTestId('Selection.Item.Icon-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        width: 12 * 1.5,
        height: 12 * 1.5,
      })
    );

    update(<Selection {...props} size="small" />);
    expect(getByTestId('Selection.Item.Pressable-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        paddingHorizontal: 14 * 1.5,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        fontSize: 14,
      })
    );
    expect(getByTestId('Selection.Item.Icon-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        width: 14 * 1.5,
        height: 14 * 1.5,
      })
    );

    update(<Selection {...props} size="medium" />);
    expect(getByTestId('Selection.Item.Pressable-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        paddingHorizontal: 16 * 1.5,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        fontSize: 16,
      })
    );
    expect(getByTestId('Selection.Item.Icon-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        width: 16 * 1.5,
        height: 16 * 1.5,
      })
    );

    update(<Selection {...props} size="large" />);
    expect(getByTestId('Selection.Item.Pressable-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        paddingHorizontal: 24 * 1.5,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        fontSize: 24,
      })
    );
    expect(getByTestId('Selection.Item.Icon-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        width: 24 * 1.5,
        height: 24 * 1.5,
      })
    );
  });

  it('renders correctly when disabled is true', () => {
    const { getByTestId, getByText } = render(<Selection disabled {...props} />);

    // Check ScrolView styles
    expect(getByTestId('Selection').props.style).toEqual(
      expect.objectContaining({
        width: '100%',
        flex: 0,
        padding: 4,
      })
    );

    // Check Pressable styles
    expect(getByTestId('Selection.Item.Pressable-item-1').props.style[0]).toEqual(
      expect.objectContaining({
        minWidth: '80%',
        marginVertical: 10,
        paddingVertical: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0,
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.moon100,
        paddingHorizontal: 16 * 1.5,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-2').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.moon100,
      })
    );
    expect(getByText('Item #2').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-3').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.moon100,
      })
    );
    expect(getByText('Item #3').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-4').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.moon100,
      })
    );
    expect(getByText('Item #4').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-5').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.moon100,
      })
    );
    expect(getByText('Item #5').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Selection.Item.Pressable-item-6').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.moon100,
      })
    );
    expect(getByText('Item #6').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );
  });

  it('does not call onChange if item is already selected', () => {
    const { getByTestId } = render(<Selection {...props} />);

    fireEvent.press(getByTestId('Selection.Item.Pressable-item-1'));
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('does not call onChange if item is disabled', () => {
    const { getByTestId } = render(<Selection {...props} />);

    fireEvent.press(getByTestId('Selection.Item.Pressable-item-3'));
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('does not call onChange when tab is disabled', () => {
    const { getByTestId } = render(<Selection disabled {...props} />);

    fireEvent.press(getByTestId('Selection.Item.Pressable-item-3'));
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('calls onChange with pressed item value', () => {
    const { getByTestId } = render(<Selection {...props} />);

    fireEvent.press(getByTestId('Selection.Item.Pressable-item-2'));
    expect(onChange).toHaveBeenCalledWith('item-2');
  });
});
