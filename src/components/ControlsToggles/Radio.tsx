import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

import { SecondaryTextMedium } from '@components/Text';
import { colors } from '@magnetis/astro-galaxy-tokens';

interface RadioProps {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
  isDisabled?: boolean;
  testID?: string;
}

function Radio({ label, isDisabled = false, isSelected, onSelect, testID = 'Radio' }: RadioProps) {
  return (
    <Pressable
      disabled={isDisabled}
      testID={testID}
      accessibilityRole="radio"
      onPress={onSelect}
      style={styles.wrapper}
      hitSlop={10}
    >
      <View
        testID="Radio.Circle"
        style={[
          styles.radio,
          {
            borderWidth: isSelected ? 5 : 2,
            borderColor: isDisabled ? colors.moon200 : isSelected ? colors.uranus500 : colors.moon500,
          },
        ]}
      />
      <SecondaryTextMedium color={isDisabled ? colors.moon200 : colors.moon900}>{label}</SecondaryTextMedium>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 18,
    backgroundColor: colors.space100,
    marginRight: 8,
  },
});

export default Radio;
export type { RadioProps };
