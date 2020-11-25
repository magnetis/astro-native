import React, { useEffect, useRef, useState } from 'react';
import { Colors } from '@magnetis/astro-galaxy-tokens';

import { IconID } from '@components/Icons/types';
import type { Size } from '@tokens/sizes';
import sizes from '@tokens/sizes';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { getSecondaryTextFromSize } from '@components/Text/utils';
import { getFontSize, getIcon } from '@components/Buttons/utils';

interface TabItem {
  label: string;
  value: string;
  icon?: IconID;
  disabled?: boolean;
  activeColor?: Colors[keyof Colors];
  activeTextColor?: Colors[keyof Colors];
}

interface TabsProps {
  items: TabItem[];
  textColor: Colors[keyof Colors];
  disabledColor: Colors[keyof Colors];
  activeTextColor: Colors[keyof Colors];
  activeItemColor: Colors[keyof Colors] | 'transparent';
  backgroundColor: Colors[keyof Colors] | 'transparent';
  testID?: string;
  disabled?: boolean;
  size?: Size;
  borderColor?: Colors[keyof Colors] | 'transparent';
  onChange: (value: string) => void;
  defaultSelected?: string;
}

function Tabs({
  disabled = false,
  activeItemColor,
  activeTextColor,
  backgroundColor,
  defaultSelected,
  disabledColor,
  textColor,
  onChange,
  items,
  borderColor = 'transparent',
  size = sizes.Medium,
  testID = 'Tabs',
}: TabsProps) {
  const didMountRef = useRef(false);
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
    if (didMountRef.current) {
      onChange(selectedItem);
    } else {
      didMountRef.current = true;
    }
  }, [selectedItem]);

  return (
    <ScrollView
      testID={testID}
      style={scrollViewStyle}
      horizontal
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'row',
        paddingRight: items.length * 2 - 1,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {items.map((item) => {
        const Icon = getIcon(item.icon ?? '');
        const active = selectedItem === item.value;
        const itemBackgroundColor =
          item.disabled || disabled ? 'transparent' : active ? item.activeColor ?? activeItemColor : backgroundColor;
        const color =
          item.disabled || disabled ? disabledColor : active ? item.activeTextColor ?? activeTextColor : textColor;
        const iconSize = getFontSize(size) * 1.5;

        return (
          <Pressable
            testID={`Tabs.Item.Pressable-${item.value}`}
            key={item.value}
            style={[styles.item, { backgroundColor: itemBackgroundColor, paddingHorizontal: iconSize }]}
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
    flex: 1,
  },
});

export default Tabs;
export type { TabsProps, TabItem };
