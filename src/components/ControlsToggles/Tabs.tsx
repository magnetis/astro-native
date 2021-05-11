import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';

import { getSecondaryTextFromSize } from '@components/Text/utils';
import { getIcon } from '@components/Buttons/utils';

import useDidMount from '@hooks/useDidMount';
import sizes from '@tokens/sizes';
import { getFontSize } from '@tokens/utils';

import type { Size } from '@tokens/sizes';
import type { Color } from '@magnetis/astro-tokens';
import { IconID } from '@components/Icons/types';

interface TabItem {
  /** Text to be shown inside tab */
  label: string;
  /** Value that will be returned when tab is selected */
  value: string;
  /** When provided, shows Icon aside tab text. */
  icon?: IconID;
  /** Disables any user interaction with component. Defaults to `false`. */
  disabled?: boolean;
  /** Items' backgroundColor color when active */
  activeColor?: Color;
  /** Items' text color when active */
  activeTextColor?: Color;
}

interface TabsProps {
  /** List of tab items */
  items: TabItem[];
  /** Items' text color when not active */
  textColor: Color;
  /** Items' text color when disabled */
  disabledColor: Color;
  /** Items' text color when active */
  activeTextColor: Color;
  /** Items' backgroundColor color when active */
  activeItemColor?: Color | 'transparent';
  /** Items' backgroundColor color when not active */
  backgroundColor?: Color | 'transparent';
  /** Define items borderBottom if true */
  borderBottom?: boolean;
  /** Used to locate this component in end-to-end tests. Defaults to `"Tabs"`. */
  testID?: string;
  /** Disables any user interaction with component. Defaults to `false`. */
  disabled?: boolean;
  /** Define which size tab will have. Defaults to `"medium"`. */
  size?: Size;
  /** Tab border color */
  borderColor?: Color | 'transparent';
  /** Callback called when a tab is selected */
  onChange: (value: string) => void;
  /** When provided, defines which tab will be selected at first */
  defaultSelected?: string;
  /** When provided, defines tab alignemt */
  alignment?: 'left' | 'center' | 'right';
}

/**
 * Tabs are used when the user can quickly navigate and switch between views and states of the same context.
 */
function Tabs({
  disabled = false,
  activeItemColor = 'transparent',
  activeTextColor,
  backgroundColor = 'transparent',
  borderBottom = false,
  defaultSelected,
  disabledColor,
  textColor,
  onChange,
  items,
  borderColor = 'transparent',
  size = sizes.Medium,
  testID = 'Tabs',
  alignment = 'left',
}: TabsProps) {
  const didMount = useDidMount();
  const TextComponent = getSecondaryTextFromSize(size);
  const [selectedItem, setSelectedItem] = useState(defaultSelected || items[0].value);

  const scrollViewStyle = [
    styles.container,
    {
      backgroundColor,
      borderRadius: 24,
      borderWidth: 1,
      borderColor,
    },
  ];

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

  enum tabsAlignemt {
    left = 'flex-start',
    center = 'center',
    right = 'flex-end',
  }

  return (
    <ScrollView
      testID={testID}
      style={scrollViewStyle}
      horizontal
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: tabsAlignemt[alignment],
        paddingRight: items.length * 2 - 1,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {items.map((item) => {
        const Icon = getIcon(item.icon ?? '');
        const active = selectedItem === item.value;
        const itemBackgroundColor =
          item.disabled || disabled || borderBottom
            ? 'transparent'
            : active
            ? item.activeColor ?? activeItemColor
            : backgroundColor;
        const color =
          item.disabled || disabled ? disabledColor : active ? item.activeTextColor ?? activeTextColor : textColor;
        const iconSize = getFontSize(size) * 1.5;

        return (
          <Pressable
            testID={`Tabs.Item.Pressable-${item.value}`}
            key={item.value}
            style={[
              styles.item,
              borderBottom && styles.itemWithBorderBottom,
              {
                backgroundColor: itemBackgroundColor,
                paddingHorizontal: iconSize,
                borderBottomColor: color,
              },
            ]}
            onPress={handlePress(item.value)}
            disabled={item.disabled || disabled}
          >
            <Icon testID={`Tabs.Item.Icon-${item.value}`} color={color} width={iconSize} height={iconSize} />
            <TextComponent style={{ marginLeft: item.icon ? 8 : 0 }} color={color}>
              {item.label}
            </TextComponent>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', flex: 0, padding: 4 },
  item: {
    minWidth: 68,
    paddingVertical: 4,
    paddingBottom: 6,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
  },
  itemWithBorderBottom: {
    borderRadius: 0,
    paddingBottom: 12,
    paddingVertical: 0,
    borderBottomWidth: 2,
  },
});

export default Tabs;
export type { TabsProps, TabItem };
