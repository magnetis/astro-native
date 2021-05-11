import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '@magnetis/astro-tokens';

import { SecondaryTextMedium } from '@components/Text';
import useDidMount from '@hooks/useDidMount';

interface CheckboxProps {
  /** Text to be rendered aside checkbox */
  label: string;
  /** Checkbox press callback */
  onPress: (newValue: boolean, indeterminate: boolean) => void;
  /** Sets if checkbox should render as indeterminate. Defaults to `false`. */
  indeterminate?: boolean;
  /** Sets checkbox initial value to true. Defaults to `false`. */
  startChecked?: boolean;
  /** Disables any user interaction with component. Defaults to `false`. */
  disabled?: boolean;
  /** Used to locate this component in end-to-end tests. Defaults to `"Checkbox"`. */
  testID?: string;
}

const Check = () => (
  <View
    testID="Checkbox.Check"
    style={{
      borderBottomColor: colors.space100,
      borderLeftColor: colors.space100,
      borderBottomWidth: 2,
      borderLeftWidth: 2,
      width: 10,
      height: 6,
      transform: [{ rotate: '-45deg' }],
      position: 'absolute',
      top: 1,
      left: 1,
    }}
  />
);

const Indeterminate = () => (
  <View
    testID="Checkbox.Indeterminate"
    style={{
      borderBottomColor: colors.space100,
      borderBottomWidth: 2,
      width: 8,
      height: 6,
      transform: [{ rotate: '-180deg' }],
      position: 'absolute',
      top: 5,
      left: 2,
    }}
  />
);

/**
 * Checkboxes are used when a user might select multiple options from a list, or when a single specific action is required - like agreeing to terms and conditions.
 */
function Checkbox({
  startChecked = false,
  indeterminate = false,
  disabled = false,
  testID = 'Checkbox',
  onPress,
  label,
}: CheckboxProps) {
  const didMount = useDidMount();
  const [isChecked, setIsChecked] = useState(startChecked);
  const borderColor = disabled ? colors.moon200 : isChecked ? colors.uranus500 : colors.moon500;
  const backgroundColor = isChecked && !disabled ? colors.uranus500 : colors.space100;

  function handleCheck() {
    setIsChecked((isChecked) => !isChecked);
  }

  useEffect(() => {
    if (didMount) {
      onPress(isChecked, indeterminate);
    }
  }, [isChecked]);

  return (
    <Pressable
      disabled={disabled}
      accessibilityRole="checkbox"
      style={styles.wrapper}
      onPress={handleCheck}
      testID={testID}
      hitSlop={10}
    >
      <View testID="Checkbox.Box" style={[styles.box, { borderColor, backgroundColor }]}>
        {indeterminate && isChecked && !disabled ? <Indeterminate /> : isChecked && !disabled ? <Check /> : null}
      </View>
      <SecondaryTextMedium color={disabled ? colors.moon200 : colors.moon900}>{label}</SecondaryTextMedium>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
  box: { width: 16, height: 16, borderRadius: 2, borderWidth: 2, marginRight: 8 },
});

export default Checkbox;
export type { CheckboxProps };
