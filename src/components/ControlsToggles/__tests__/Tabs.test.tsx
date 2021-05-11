import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Tabs, { TabItem } from '../Tabs';
import { colors } from '@magnetis/astro-tokens';

beforeEach(() => {
  jest.clearAllMocks();
});

const items: TabItem[] = [
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

describe('Tabs', () => {
  it('renders correctly with default props', () => {
    const { getByTestId, getByText } = render(<Tabs {...props} />);

    // Check ScrolView styles
    expect(getByTestId('Tabs').props.style[0]).toEqual(
      expect.objectContaining({
        width: '100%',
        flex: 0,
        padding: 4,
      })
    );
    expect(getByTestId('Tabs').props.style[1]).toEqual(
      expect.objectContaining({
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: colors.space100,
      })
    );

    // Check Pressable styles
    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[0]).toEqual(
      expect.objectContaining({
        minWidth: 68,
        paddingVertical: 4,
        paddingBottom: 6,
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0,
      })
    );

    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[2]).toEqual(
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

    expect(getByTestId('Tabs.Item.Pressable-item-2').props.style[2]).toEqual(
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

    expect(getByTestId('Tabs.Item.Pressable-item-3').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
      })
    );
    expect(getByText('Item #3').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Tabs.Item.Pressable-item-4').props.style[2]).toEqual(
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

    expect(getByTestId('Tabs.Item.Pressable-item-5').props.style[2]).toEqual(
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

    expect(getByTestId('Tabs.Item.Pressable-item-6').props.style[2]).toEqual(
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
      <Tabs
        items={props.items}
        onChange={props.onChange}
        textColor={props.textColor}
        activeTextColor={props.activeTextColor}
        disabledColor={props.disabledColor}
      />
    );

    // Check ScrolView styles
    expect(getByTestId('Tabs').props.style[0]).toEqual(
      expect.objectContaining({
        width: '100%',
        flex: 0,
        padding: 4,
      })
    );
    expect(getByTestId('Tabs').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'transparent',
      })
    );

    // Check Pressable styles
    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[0]).toEqual(
      expect.objectContaining({
        minWidth: 68,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0,
      })
    );

    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
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
    const { queryByTestId } = render(<Tabs {...props} />);

    expect(queryByTestId('Tabs.Item.Icon-item-1')).not.toBeNull();
  });

  it('changes color of active items', () => {
    const { getByTestId, getByText } = render(<Tabs {...props} />);

    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.uranus500,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        color: colors.space100,
      })
    );

    fireEvent.press(getByTestId('Tabs.Item.Pressable-item-2'));
    expect(getByTestId('Tabs.Item.Pressable-item-2').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.mars500,
      })
    );
    expect(getByText('Item #2').props.style).toEqual(
      expect.objectContaining({
        color: colors.space700,
      })
    );

    fireEvent.press(getByTestId('Tabs.Item.Pressable-item-3'));
    expect(getByTestId('Tabs.Item.Pressable-item-3').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
      })
    );
    expect(getByText('Item #3').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
      })
    );

    fireEvent.press(getByTestId('Tabs.Item.Pressable-item-4'));
    expect(getByTestId('Tabs.Item.Pressable-item-4').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.venus500,
      })
    );
    expect(getByText('Item #4').props.style).toEqual(
      expect.objectContaining({
        color: colors.space100,
      })
    );

    fireEvent.press(getByTestId('Tabs.Item.Pressable-item-5'));
    expect(getByTestId('Tabs.Item.Pressable-item-5').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: colors.uranus500,
      })
    );
    expect(getByText('Item #5').props.style).toEqual(
      expect.objectContaining({
        color: colors.earth500,
      })
    );

    fireEvent.press(getByTestId('Tabs.Item.Pressable-item-6'));
    expect(getByTestId('Tabs.Item.Pressable-item-6').props.style[2]).toEqual(
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
    const { getByTestId, getByText, update } = render(<Tabs size="very-small" {...props} />);

    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[2]).toEqual(
      expect.objectContaining({
        paddingHorizontal: 12 * 1.5,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        fontSize: 12,
      })
    );
    expect(getByTestId('Tabs.Item.Icon-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        width: 12 * 1.5,
        height: 12 * 1.5,
      })
    );

    update(<Tabs {...props} size="small" />);
    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[2]).toEqual(
      expect.objectContaining({
        paddingHorizontal: 14 * 1.5,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        fontSize: 14,
      })
    );
    expect(getByTestId('Tabs.Item.Icon-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        width: 14 * 1.5,
        height: 14 * 1.5,
      })
    );

    update(<Tabs {...props} size="medium" />);
    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[2]).toEqual(
      expect.objectContaining({
        paddingHorizontal: 16 * 1.5,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        fontSize: 16,
      })
    );
    expect(getByTestId('Tabs.Item.Icon-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        width: 16 * 1.5,
        height: 16 * 1.5,
      })
    );

    update(<Tabs {...props} size="large" />);
    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[2]).toEqual(
      expect.objectContaining({
        paddingHorizontal: 24 * 1.5,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        fontSize: 24,
      })
    );
    expect(getByTestId('Tabs.Item.Icon-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        width: 24 * 1.5,
        height: 24 * 1.5,
      })
    );
  });

  it('renders correctly when disabled is true', () => {
    const { getByTestId, getByText } = render(<Tabs disabled {...props} />);

    // Check ScrolView styles
    expect(getByTestId('Tabs').props.style[0]).toEqual(
      expect.objectContaining({
        width: '100%',
        flex: 0,
        padding: 4,
      })
    );
    expect(getByTestId('Tabs').props.style[1]).toEqual(
      expect.objectContaining({
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'transparent',
      })
    );

    // Check Pressable styles
    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[0]).toEqual(
      expect.objectContaining({
        minWidth: 68,
        paddingVertical: 4,
        paddingBottom: 6,
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0,
      })
    );

    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
        paddingHorizontal: 16 * 1.5,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Tabs.Item.Pressable-item-2').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
      })
    );
    expect(getByText('Item #2').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Tabs.Item.Pressable-item-3').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
      })
    );
    expect(getByText('Item #3').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Tabs.Item.Pressable-item-4').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
      })
    );
    expect(getByText('Item #4').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Tabs.Item.Pressable-item-5').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
      })
    );
    expect(getByText('Item #5').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Tabs.Item.Pressable-item-6').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
      })
    );
    expect(getByText('Item #6').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );
  });

  it('renders correctly when borderBottom is true', () => {
    const { getByTestId, getByText } = render(<Tabs {...props} disabledColor={colors.uranus600} borderBottom={true} />);

    // Check ScrolView styles
    expect(getByTestId('Tabs').props.style[0]).toEqual(
      expect.objectContaining({
        width: '100%',
        flex: 0,
        padding: 4,
      })
    );
    expect(getByTestId('Tabs').props.style[1]).toEqual(
      expect.objectContaining({
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'transparent',
      })
    );

    // Check Pressable styles
    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[0]).toEqual(
      expect.objectContaining({
        minWidth: 68,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0,
      })
    );

    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
        paddingHorizontal: 24,
        borderBottomColor: colors.space100,
      })
    );
    expect(getByTestId('Tabs.Item.Pressable-item-1').props.style[1]).toEqual(
      expect.objectContaining({
        borderRadius: 0,
        paddingBottom: 12,
        paddingVertical: 0,
        borderBottomWidth: 2,
      })
    );
    expect(getByText('Item #1').props.style).toEqual(
      expect.objectContaining({
        color: colors.space100,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Tabs.Item.Pressable-item-3').props.style[2]).toEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
        paddingHorizontal: 24,
        borderBottomColor: colors.uranus600,
      })
    );
    expect(getByTestId('Tabs.Item.Pressable-item-3').props.style[1]).toEqual(
      expect.objectContaining({
        borderRadius: 0,
        paddingBottom: 12,
        paddingVertical: 0,
        borderBottomWidth: 2,
      })
    );
    expect(getByText('Item #3').props.style).toEqual(
      expect.objectContaining({
        color: colors.uranus600,
        fontFamily: 'Lato-Regular',
      })
    );
  });

  it('does not call onChange if item is already selected', () => {
    const { getByTestId } = render(<Tabs {...props} />);

    fireEvent.press(getByTestId('Tabs.Item.Pressable-item-1'));
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('does not call onChange if item is disabled', () => {
    const { getByTestId } = render(<Tabs {...props} />);

    fireEvent.press(getByTestId('Tabs.Item.Pressable-item-3'));
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('does not call onChange when tab is disabled', () => {
    const { getByTestId } = render(<Tabs disabled {...props} />);

    fireEvent.press(getByTestId('Tabs.Item.Pressable-item-3'));
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('calls onChange with pressed item value', () => {
    const { getByTestId } = render(<Tabs {...props} />);

    fireEvent.press(getByTestId('Tabs.Item.Pressable-item-2'));
    expect(onChange).toHaveBeenCalledWith('item-2');
  });
});
