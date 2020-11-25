import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

interface ToggleProps {
  startEnabled?: boolean;
  onValueChange: (newValue: boolean) => void;
  isDisabled?: boolean;
  testID?: string;
}

const OFF_POSITION = 1;
const ON_POSITION = 21;

function Toggle({ startEnabled = false, onValueChange, isDisabled = false, testID = 'Toggle.Pressable' }: ToggleProps) {
  const didMountRef = useRef(false);
  const [isToggled, setIsToggled] = useState(isDisabled ? false : startEnabled);
  const bulletAnim = useRef(new Animated.Value(isToggled ? ON_POSITION : OFF_POSITION)).current;
  const backgroundColor = isDisabled ? colors.moon200 : isToggled ? colors.uranus500 : colors.moon400;

  function handleChange() {
    setIsToggled((isToggled) => !isToggled);
  }

  useEffect(() => {
    if (didMountRef.current) {
      bulletAnim.stopAnimation();
      onValueChange(isToggled);
      Animated.timing(bulletAnim, {
        useNativeDriver: true,
        toValue: isToggled ? ON_POSITION : OFF_POSITION,
        duration: 300,
      }).start();
    } else {
      didMountRef.current = true;
    }
  }, [isToggled]);

  return (
    <Pressable
      testID={testID}
      disabled={isDisabled}
      onPress={handleChange}
      style={[styles.toggle, { backgroundColor }]}
    >
      <Animated.View
        testID="Toggle.Bullet"
        style={[styles.bullet, { top: 1, transform: [{ translateX: bulletAnim }] }]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  toggle: {
    width: 50,
    height: 30,
    borderRadius: 28,
  },
  bullet: {
    width: 28,
    height: 28,
    borderRadius: 28,
    position: 'absolute',
    backgroundColor: colors.space100,
  },
});

export default Toggle;
export type { ToggleProps };
