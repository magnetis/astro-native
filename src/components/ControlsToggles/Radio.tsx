import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

import { SecondaryTextMedium } from '@components/Text';
import { colors } from '@magnetis/astro-tokens';

interface RadioProps {
  /** Text to be rendered aside radio button */
  label: string;
  /** Starts Radio as selected when true */
  selected: boolean;
  /** Radio select callback */
  onSelect: () => void;
  /** Disables any user interaction with component. Defaults to `false`. */
  disabled?: boolean;
  /** Used to locate this component in end-to-end tests. Defaults to `"Radio"`. */
  testID?: string;
}

/**
 * Radio buttons appear when the user must select only one option from more than two.
 */
function Radio({ label, disabled = false, selected, onSelect, testID = 'Radio' }: RadioProps) {
  return (
    <Pressable
      disabled={disabled}
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
            borderWidth: selected ? 5 : 2,
            borderColor: disabled ? colors.moon200 : selected ? colors.uranus500 : colors.moon500,
          },
        ]}
      />
      <SecondaryTextMedium color={disabled ? colors.moon200 : colors.moon900}>{label}</SecondaryTextMedium>
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
