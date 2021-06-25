import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@magnetis/astro-tokens';

import { lato } from '@tokens/fonts';

interface InputErrorMessageProps {
  error?: string;
  hasError: boolean;
}

function InputErrorMessage({ error, hasError }: InputErrorMessageProps) {
  return (
    <View testID="InputErrorMessage" style={[styles.errorContainer, { opacity: hasError ? 1 : 0 }]}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    margin: 5,
  },
  error: {
    fontFamily: lato,
    fontSize: 12,
    color: colors.mars500,
  },
});

export default InputErrorMessage;
