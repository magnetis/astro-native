import React, { useState } from 'react';
import { PressableProps, StyleSheet, View } from 'react-native';
import { colors, radius, sizes } from '@magnetis/astro-tokens';

import Tab from './Tab';

type Item = {
  value: string;
  onPressItem: () => void;
};

export interface TabsContainerProps extends PressableProps {
  items: Item[];
  inversed?: boolean;
  rounded?: boolean;
}

function TabsContainer({ testID, items, inversed, rounded, ...props }: TabsContainerProps) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <View
      testID={testID}
      style={[
        styles.tabsContainer,
        {
          backgroundColor: inversed ? colors.transparentBrightSemitransparent : colors.transparentFaintSemitransparent,
          borderRadius: rounded ? radius.circular : radius.small,
        },
      ]}
    >
      {items.map((item, index) => (
        <Tab
          {...props}
          rounded={rounded}
          testID={`Tab.${item.value}`}
          key={item.value}
          value={item.value}
          activeItem={activeItem === index}
          inversed={inversed}
          onPress={() => {
            setActiveItem(index);
            item.onPressItem();
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: sizes.quark,
  },
});

export default TabsContainer;