import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { EyeClosedIcon, EyeOpenIcon } from '@components/Icons';

interface InputEyeToggleProps {
  visible: boolean;
  onPress: () => void;
  large: boolean;
}

function InputEyeToggle({ visible, onPress, large }: InputEyeToggleProps) {
  const iconProps = { color: colors.moon900, width: 32, height: 32 };

  if (visible) {
    return (
      <Pressable testID="InputEyeToggle.EyeOpen" onPress={onPress} style={[styles.iconView, { top: large ? 16 : 12 }]}>
        <EyeOpenIcon {...iconProps} />
      </Pressable>
    );
  }

  return (
    <Pressable
      testID="InputEyeToggle.EyeClosed"
      onPress={onPress}
      hitSlop={10}
      style={[styles.iconView, { top: large ? 16 : 12 }]}
    >
      <EyeClosedIcon {...iconProps} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconView: {
    position: 'absolute',
    right: 16,
    backgroundColor: 'transparent',
  },
});

export default InputEyeToggle;
