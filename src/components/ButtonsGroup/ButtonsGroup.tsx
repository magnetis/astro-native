import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { sizes } from '@magnetis/astro-tokens';

import Button from '@components/Buttons/Button';

import type { ViewStyle, PressableProps } from 'react-native';
import type { ButtonVariant, ButtonType } from '@components/Buttons/types';

export type Item = PressableProps & {
  value: string;
  onPress: () => void;
};

export type ButtonsGroupProps = {
  testID?: string;
  contentContainerStyle?: ViewStyle;
  initialActiveItemIndex?: number;
  items: Item[];
  legacy?: boolean;
  rounded?: boolean;
  active?: {
    type: ButtonType;
    variant: ButtonVariant;
  };
  inactive?: {
    type: ButtonType;
    variant: ButtonVariant;
  };
};

function ButtonsGroup({
  contentContainerStyle = {},
  initialActiveItemIndex = 0,
  items,
  legacy,
  rounded = true,
  active = {
    type: 'solid',
    variant: 'primary',
  },
  inactive = {
    type: 'subtle',
    variant: 'inversed',
  },
  testID,
}: ButtonsGroupProps) {
  const [activeItem, setActiveItem] = useState(initialActiveItemIndex);

  return (
    <FlatList
      contentContainerStyle={{ ...styles.contentContainerStyle, ...contentContainerStyle }}
      testID={testID}
      data={items}
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.value}
      ItemSeparatorComponent={() => <View style={styles.itemContainer} />}
      renderItem={({ item, index }) => (
        <Button
          {...item}
          size="small"
          type={activeItem === index ? active.type : inactive.type}
          variant={activeItem === index ? active.variant : inactive.variant}
          text={item.value}
          rounded={legacy || rounded}
          onPress={() => {
            setActiveItem(index);
            item.onPress();
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    marginLeft: sizes.nano,
  },
});

export default ButtonsGroup;
