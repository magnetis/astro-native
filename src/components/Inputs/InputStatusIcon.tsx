import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@magnetis/astro-tokens';

import { AlertIcon, CircleCheckIcon } from '@components/Icons';

interface InputStatusIconProps {
  hasError: boolean;
  isValidated: boolean;
  large: boolean;
}

function InputStatusIcon({ hasError, isValidated, large }: InputStatusIconProps) {
  return (
    <>
      {hasError && (
        <View testID="InputStatusIcon.Error" style={[styles.iconView, { top: large ? 16 : 12 }]}>
          <AlertIcon color={colors.mars500} width={32} height={32} />
        </View>
      )}
      {!hasError && isValidated && (
        <View testID="InputStatusIcon.Validated" style={[styles.iconView, { top: large ? 16 : 12 }]}>
          <CircleCheckIcon color={colors.earth400} width={32} height={32} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  iconView: {
    position: 'absolute',
    right: 16,
    zIndex: 2,
  },
});

export default InputStatusIcon;
