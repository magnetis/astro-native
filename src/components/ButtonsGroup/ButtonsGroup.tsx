import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { sizes } from '@magnetis/astro-tokens';

import Button from '@components/Buttons/Button';

import type { ViewStyle, PressableProps } from 'react-native';
import type { ButtonVariant } from '@components/Buttons/types';

type Item = {
  value: string;
  onPressItem: () => void;
};

export interface ButtonsGroupProps extends PressableProps {
  contentContainerStyle?: ViewStyle;
  initialActiveItemIndex?: number;
  inversed?: boolean;
  items: Item[];
  legacy?: boolean;
  rounded?: boolean;
}

function ButtonsGroup({
  contentContainerStyle = {},
  initialActiveItemIndex = 0,
  inversed,
  items,
  legacy,
  rounded,
  testID,
  ...props
}: ButtonsGroupProps) {
  const [activeItem, setActiveItem] = useState(initialActiveItemIndex);

  function getButtonGroupVariant(index: number): ButtonVariant {
    if (activeItem === index && legacy) return 'legacy';
    if (activeItem === index && !legacy) return 'primary';
    if (inversed) return 'inversed';
    return 'secondary';
  }

  return (
    <FlatList
      contentContainerStyle={{
        ...styles.contentContainerStyle,
        ...contentContainerStyle,
      }}
      testID={testID}
      data={items}
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.value}
      ItemSeparatorComponent={() => <View style={styles.itemContainer} />}
      renderItem={({ item, index }) => (
        <Button
          {...props}
          size="small"
          type={activeItem === index ? 'solid' : 'subtle'}
          variant={getButtonGroupVariant(index)}
          text={item.value}
          rounded={legacy || rounded}
          onPress={() => {
            setActiveItem(index);
            item.onPressItem();
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
