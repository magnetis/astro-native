import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Colors, colors } from '@magnetis/astro-galaxy-tokens';

import { IconID } from '@components/Icons/types';
import useDidMount from '@hooks/useDidMount';
import sizes from '@tokens/sizes';
import { getSecondaryTextFromSize } from '@components/Text/utils';
import { getIcon } from '@components/Buttons/utils';
import { getFontSize } from '@tokens/utils';
import type { Size } from '@tokens/sizes';

interface SelectionItem {
  /** Text to be shown inside selection */
  label: string;
  /** Value that will be returned when selection is selected */
  value: string;
  /** When provided, shows Icon aside selection text. */
  icon?: IconID;
  /** Disables any user interaction with component. Defaults to `false`. */
  disabled?: boolean;
  /** Items' backgroundColor color when active */
  activeColor?: Colors[keyof Colors];
  /** Items' text color when active */
  activeTextColor?: Colors[keyof Colors];
}

interface SelectionProps {
  /** List of selection items */
  items: SelectionItem[];
  /** Items' text color when not active */
  textColor: Colors[keyof Colors];
  /** Items' text color when disabled */
  disabledColor: Colors[keyof Colors];
  /** Items' text color when active */
  activeTextColor: Colors[keyof Colors];
  /** Items' backgroundColor color when active */
  activeItemColor?: Colors[keyof Colors] | 'transparent';
  /** Items' backgroundColor color when not active */
  backgroundColor?: Colors[keyof Colors] | 'transparent';
  /** Used to locate this component in end-to-end tests. Defaults to `"Selection"`. */
  testID?: string;
  /** Disables any user interaction with component. Defaults to `false`. */
  disabled?: boolean;
  /** Define which size selection will have. Defaults to `"medium"`. */
  size?: Size;
  /** Selection border color */
  borderColor?: Colors[keyof Colors] | 'transparent';
  /** Callback called when a selection is selected */
  onChange: (value: string) => void;
  /** When provided, defines which selection will be selected at first */
  defaultSelected?: string;
}

/**
 * Selection are used when the user wants to select and item in a short list.
 */
function Selection({
  disabled = false,
  activeItemColor = colors.uranus500,
  activeTextColor,
  backgroundColor = colors.moon100,
  defaultSelected,
  disabledColor,
  textColor = colors.uranus500,
  onChange,
  items,
  borderColor = colors.uranus500,
  size = sizes.Medium,
  testID = 'Selection',
}: SelectionProps) {
  const didMount = useDidMount();
  const TextComponent = getSecondaryTextFromSize(size);
  const [selectedItem, setSelectedItem] = useState(defaultSelected || items[0].value);

  function handlePress(value: string) {
    return function () {
      if (value !== selectedItem) {
        setSelectedItem(value);
      }
    };
  }

  useEffect(() => {
    if (didMount) {
      onChange(selectedItem);
    }
  }, [selectedItem]);

  return (
    <View testID={testID} style={styles.container}>
      {items.map((item) => {
        const Icon = getIcon(item.icon ?? '');
        const active = selectedItem === item.value;
        const itemBackgroundColor =
          item.disabled || disabled ? colors.moon100 : active ? item.activeColor ?? activeItemColor : backgroundColor;
        const color =
          item.disabled || disabled ? disabledColor : active ? item.activeTextColor ?? activeTextColor : textColor;
        const iconSize = getFontSize(size) * 1.5;
        const borderWidth = active ? 0 : 1;
        const itemBorderColor = item.disabled || disabled ? disabledColor : borderColor;

        return (
          <Pressable
            testID={`${testID}.Item.Pressable-${item.value}`}
            key={item.value}
            style={[
              styles.item,
              {
                backgroundColor: itemBackgroundColor,
                borderColor: itemBorderColor,
                borderWidth,
                paddingHorizontal: iconSize,
              },
            ]}
            onPress={handlePress(item.value)}
            disabled={item.disabled || disabled}
          >
            <Icon testID={`Selection.Item.Icon-${item.value}`} color={color} width={iconSize} height={iconSize} />
            <TextComponent style={{ marginLeft: item.icon ? 8 : 0 }} color={color}>
              {item.label}
            </TextComponent>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', flex: 0, padding: 4 },
  item: {
    alignItems: 'center',
    borderRadius: 8,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    minWidth: '80%',
    paddingVertical: 8,
  },
  itemWithBorderBottom: {
    borderBottomWidth: 2,
    borderRadius: 0,
    paddingBottom: 12,
    paddingVertical: 0,
  },
});

export default Selection;
export type { SelectionProps, SelectionItem };
