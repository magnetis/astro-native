import React from 'react';
import { Text, Pressable, PressableProps, StyleSheet } from 'react-native';
import { colors, sizes, radius, typography, shadows } from '@magnetis/astro-tokens';
import type { FontWeightType } from '@typings/styles';

export interface TabProps extends PressableProps {
  value: string;
  activeItem: boolean;
  inversed?: boolean;
  rounded?: boolean;
}

function handleTextColor(activeItem: boolean, inversed?: boolean) {
  if ((activeItem && inversed) || (activeItem && !inversed) || (!activeItem && !inversed)) {
    return colors.transparentFaintDiffuse;
  }

  return colors.transparentBrightDiffuse;
}

function Tab({ value, activeItem, inversed, rounded, ...props }: TabProps) {
  return (
    <Pressable
      {...props}
      style={[
        styles.container,
        {
          backgroundColor: activeItem ? colors.solidBrightLightest : 'transparent',
          borderRadius: rounded ? radius.circular : radius.small,
        },
        {
          ...(activeItem && {
            elevation: shadows.tight.elevation,
            shadowOffset: {
              height: shadows.tight.offsetY,
              width: shadows.tight.offsetX,
            },
            shadowRadius: shadows.tight.radius,
            shadowColor: shadows.tight.color,
            shadowOpacity: 1,
          }),
        },
      ]}
    >
      <Text
        style={{
          color: handleTextColor(activeItem, inversed),
          fontFamily: typography.fontFamilyBase,
          fontWeight: typography.fontWeightSemibold.toString() as FontWeightType,
        }}
      >
        {value}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: sizes.large,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tab;
