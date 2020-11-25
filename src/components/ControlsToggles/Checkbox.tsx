import React, { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { SecondaryTextMedium } from '@components/Text';

interface CheckboxProps {
  label: string;
  onPress: (newValue: boolean, indeterminate: boolean) => void;
  isIndeterminate?: boolean;
  startChecked?: boolean;
  isDisabled?: boolean;
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

function Checkbox({
  startChecked = false,
  isIndeterminate = false,
  isDisabled = false,
  testID = 'Checkbox',
  onPress,
  label,
}: CheckboxProps) {
  const didMountRef = useRef(false);
  const [isChecked, setIsChecked] = useState(startChecked);
  const borderColor = isDisabled ? colors.moon200 : isChecked ? colors.uranus500 : colors.moon500;
  const backgroundColor = isChecked && !isDisabled ? colors.uranus500 : colors.space100;

  function handleCheck() {
    setIsChecked((isChecked) => !isChecked);
  }

  useEffect(() => {
    if (didMountRef.current) {
      onPress(isChecked, isIndeterminate);
    } else {
      didMountRef.current = true;
    }
  }, [isChecked]);

  return (
    <Pressable
      disabled={isDisabled}
      accessibilityRole="checkbox"
      style={styles.wrapper}
      onPress={handleCheck}
      testID={testID}
      hitSlop={10}
    >
      <View testID="Checkbox.Box" style={[styles.box, { borderColor, backgroundColor }]}>
        {isIndeterminate && isChecked && !isDisabled ? <Indeterminate /> : isChecked && !isDisabled ? <Check /> : null}
      </View>
      <SecondaryTextMedium color={isDisabled ? colors.moon200 : colors.moon900}>{label}</SecondaryTextMedium>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
  box: { width: 16, height: 16, borderRadius: 2, borderWidth: 2, marginRight: 8 },
});

export default Checkbox;
export type { CheckboxProps };
