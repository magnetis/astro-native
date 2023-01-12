import React, { useState } from 'react';
import { PressableProps, StyleSheet, View } from 'react-native';
import { radius, sizes } from '@magnetis/astro-tokens';
import { Button, ButtonType, ButtonVariant } from '@components/Buttons';

import { getButtonProperties } from '@components/Buttons/utils';

type Item = {
  value: string;
  onPressItem: () => void;
};

export interface TabsContainerProps extends PressableProps {
  items: Item[];
  inversed?: boolean;
  rounded?: boolean;
  active?: {
    type: ButtonType;
    variant: ButtonVariant;
  };
  inactive?: {
    type: ButtonType;
    variant: ButtonVariant;
  };
}

function TabsContainer({
  testID = 'Tabs',
  items,
  rounded,
  active = { type: 'solid', variant: 'primary' },
  inactive = { type: 'subtle', variant: 'inversed' },
  ...props
}: TabsContainerProps) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <View
      testID={testID}
      style={[
        styles.tabsContainer,
        {
          backgroundColor: getButtonProperties(inactive.variant, inactive.type).backgroundColor,
          borderRadius: rounded ? radius.circular : radius.small,
        },
      ]}
    >
      {items.map((item, index) => (
        <View style={styles.tabContainer} key={item.value}>
          <Button
            {...props}
            rounded={rounded}
            size="medium"
            fill
            testID={`${testID}.Tab.${index}`}
            text={item.value}
            type={activeItem === index ? active.type : inactive.type === 'solid' ? 'solid' : 'ghost'}
            variant={activeItem === index ? active.variant : inactive.variant}
            onPress={() => {
              setActiveItem(index);
              item.onPressItem();
            }}
          />
        </View>
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
  tabContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default TabsContainer;
