import React, { useEffect, useRef, useMemo } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

import useDidMount from '@hooks/useDidMount';
import { latoBold } from '@tokens/fonts';
import { getInputLabelColor, getInputLabelFontSize, getLabelPosition, getInputBackgroundColor } from './utils';

interface InputLabelProps {
  hasFocus: boolean;
  disabled: boolean;
  hasError: boolean;
  validated: boolean;
  isEmpty?: boolean;
  large: boolean;
  baseSize: number;
  label: string;
  disableAnimation?: boolean;
}

function InputLabel({
  hasFocus,
  disabled,
  hasError,
  validated,
  isEmpty = false,
  large,
  baseSize,
  label,
  disableAnimation = false,
}: InputLabelProps) {
  const didMount = useDidMount();
  const expandLabel = !disableAnimation && !hasFocus && isEmpty;
  const labelAnim = useRef(new Animated.Value(getLabelPosition({ expandLabel, large }))).current;

  const computedTextStyles = {
    fontSize: getInputLabelFontSize({ expandLabel, large, baseSize }),
    color: getInputLabelColor({ disabled, hasError, validated, hasFocus }),
  };

  const computedLabelContainerStyles = useMemo(
    () => ({
      backgroundColor: getInputBackgroundColor({ disabled }),
      top: large ? -8 : -6,
      left: baseSize,
    }),
    [large, disabled, baseSize]
  );

  useEffect(() => {
    if (didMount && !disableAnimation) {
      labelAnim.stopAnimation();
      Animated.timing(labelAnim, {
        useNativeDriver: true,
        duration: 200,
        toValue: getLabelPosition({ expandLabel, large }),
      }).start();
    }
  }, [hasFocus, isEmpty]);

  return (
    <Animated.View
      testID="InputLabel"
      pointerEvents="none"
      style={[styles.labelContainer, { transform: [{ translateY: labelAnim }] }, computedLabelContainerStyles]}
    >
      <Text numberOfLines={1} style={[styles.label, computedTextStyles]}>
        {label}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    paddingTop: 8,
    paddingBottom: 4,
  },
  label: {
    fontFamily: latoBold,
  },
});

export default InputLabel;
