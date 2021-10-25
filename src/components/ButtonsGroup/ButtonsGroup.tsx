import React, { useState } from 'react';
import { FlatList, PressableProps, StyleSheet, View } from 'react-native';
import { sizes } from '@magnetis/astro-tokens';

import Button from '@components/Buttons/Button';

type Item = {
  value: string;
  onPressItem: () => void;
};

export interface ButtonsGroupProps extends PressableProps {
  items: Item[];
  inversed?: boolean;
  rounded?: boolean;
}

function ButtonsGroup({ testID, items, inversed, ...props }: ButtonsGroupProps) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <FlatList
      testID={testID}
      data={items}
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.value}
      ItemSeparatorComponent={() => <View style={styles.itemContainer} />}
      renderItem={({ item, index }) => (
        <Button
          {...props}
          accessibilityLabel={item.value}
          size="small"
          type={activeItem === index ? 'solid' : 'subtle'}
          variant={activeItem === index ? 'primary' : inversed ? 'inversed' : 'secondary'}
          text={item.value}
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
