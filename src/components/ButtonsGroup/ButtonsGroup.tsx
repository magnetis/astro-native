import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { sizes } from '@magnetis/astro-tokens';

import Button from '@components/Buttons/Button';

import type { ViewStyle, PressableProps } from 'react-native';
import type { ButtonType, ButtonVariant } from '@components/Buttons/types';

export type Item = PressableProps & {
  value: string;
  onPress: () => void;
};

export type ButtonsGroupProps = {
  testID?: string;
  contentContainerStyle?: ViewStyle;
  initialActiveItemIndex?: number;
  items: Item[];
  rounded?: boolean;
  active?: {
    type: ButtonType;
    variant: ButtonVariant;
  };
  inactive?: {
    type: ButtonType;
    variant: ButtonVariant;
  };
  listKey?: string;
};

function ButtonsGroup({
  contentContainerStyle = {},
  initialActiveItemIndex = 0,
  items,
  rounded,
  testID = 'ButtonsGroup',
  active = { type: 'solid', variant: 'primary' },
  inactive = { type: 'subtle', variant: 'inversed' },
  listKey,
}: ButtonsGroupProps) {
  const [activeItem, setActiveItem] = useState(initialActiveItemIndex);

  return (
    <FlatList
      contentContainerStyle={{ ...styles.contentContainerStyle, ...contentContainerStyle }}
      testID={testID}
      data={items}
      listKey={listKey}
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.value}
      ItemSeparatorComponent={() => <View style={styles.itemContainer} />}
      renderItem={({ item, index }) => (
        <Button
          {...item}
          testID={`${testID}.Button.${index}`}
          size="small"
          type={activeItem === index ? active.type : inactive.type}
          variant={activeItem === index ? active.variant : inactive.variant}
          text={item.value}
          rounded={rounded}
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
    flexDirection: 'row',
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
