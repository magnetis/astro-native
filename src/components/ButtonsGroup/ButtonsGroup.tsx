import React, { useState } from 'react';
import { FlatList, PressableProps, StyleSheet, View } from 'react-native';
import { sizes } from '@magnetis/astro-tokens';

import Button from '@components/Buttons/Button';

import type { ButtonVariant } from '@components/Buttons/types';

type Item = {
  value: string;
  onPressItem: () => void;
};

export interface ButtonsGroupProps extends PressableProps {
  items: Item[];
  inversed?: boolean;
  rounded?: boolean;
  legacy?: boolean;
}

function ButtonsGroup({ testID, items, inversed, legacy, rounded, ...props }: ButtonsGroupProps) {
  const [activeItem, setActiveItem] = useState(0);

  function getButtonGroupVariant(index: number): ButtonVariant {
    if (activeItem === index && legacy) return 'legacy';
    if (activeItem === index && !legacy) return 'primary';
    if (inversed) return 'inversed';
    return 'secondary';
  }

  return (
    <FlatList
      testID={testID}
      data={items}
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
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
  itemContainer: {
    marginLeft: sizes.nano,
  },
});

export default ButtonsGroup;
