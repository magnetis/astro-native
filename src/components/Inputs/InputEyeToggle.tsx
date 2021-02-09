import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { EyeClosedIcon, EyeOpenIcon } from '@components/Icons';
import { getInputBorderColor } from './utils';

interface InputEyeToggleProps {
  hasError?: boolean;
  hasFocus?: boolean;
  visible: boolean;
  onPress: () => void;
  large: boolean;
}

function InputEyeToggle({ hasError = false, hasFocus = false, visible, onPress, large }: InputEyeToggleProps) {
  const iconProps = {
    color: getInputBorderColor({ disabled: false, hasError, hasFocus, validated: false }),
    width: 32,
    height: 32,
  };

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
