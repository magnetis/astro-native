import React, { useRef, useState } from 'react';
import { TextInput as RNTextInput, Pressable, StyleSheet, View, TextStyle } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getFontSize } from '@tokens/utils';
import { lato } from '@tokens/fonts';
import InputLabel from './InputLabel';
import type { BaseInputProps } from './types';
import InputStatusIcon from './InputStatusIcon';
import InputErrorMessage from './InputErrorMessage';
import { getInputBackgroundColor, getInputBorderColor } from './utils';

interface MaskedInputProps extends BaseInputProps {
  /** A placeholder string generally describing value format */
  placeholder: string;
  /** Hides caret when true, very useful for currency inputs */
  blockCursor?: boolean;
}

/**
 * Inputs that have a specific value structure for certain kinds of data.
 *
 * They need a mask plugin and custom logic to work hence it should be used as a controlled input.
 *
 * To know more about controlled components, check https://reactjs.org/docs/forms.html#controlled-components
 */
function MaskedInput({
  error = '',
  validated = false,
  disabled = false,
  touched = false,
  large = false,
  blockCursor = false,
  onBlur,
  onFocus,
  onChangeText,
  label,
  testID = 'MaskedInput.Input',
  ...props
}: MaskedInputProps) {
  const inputRef = useRef<RNTextInput>(null);

  const [hasFocus, setHasFocus] = useState(false);

  const hasError = touched && Boolean(error) && !disabled;
  const isValidated = !hasError && !disabled && validated;

  const baseSize = getFontSize(large ? 'large' : 'medium');

  const computedContainerStyles = {
    backgroundColor: getInputBackgroundColor({ disabled }),
    borderColor: getInputBorderColor({ disabled, hasError, validated, hasFocus }),
  };
  const computedInputStyles = {
    paddingLeft: baseSize,
    fontSize: baseSize,
    paddingRight: hasError || validated ? 56 : baseSize,
    textAlign: (blockCursor ? 'right' : 'left') as TextStyle['textAlign'],
  };

  function handleInputPress() {
    inputRef.current?.focus();
  }

  function handleInputFocus() {
    setHasFocus(true);
    onFocus && onFocus();
  }

  function handleInputBlur() {
    setHasFocus(false);
    onBlur && onBlur();
  }

  return (
    <View testID="MaskedInput" style={styles.wrapper}>
      <Pressable
        testID="MaskedInput.Container"
        onPress={handleInputPress}
        style={[styles.container, computedContainerStyles]}
      >
        <InputLabel
          disableAnimation
          hasFocus={hasFocus}
          disabled={disabled}
          hasError={hasError}
          validated={validated}
          large={large}
          baseSize={baseSize}
          label={label}
        />
        <RNTextInput
          {...props}
          caretHidden={blockCursor}
          placeholderTextColor={colors.moon300}
          testID={testID}
          editable={!disabled}
          style={[styles.input, computedInputStyles]}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          onChangeText={onChangeText}
        />
        <InputStatusIcon hasError={hasError} isValidated={isValidated} large={large} />
      </Pressable>
      <InputErrorMessage error={error} hasError={hasError} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { paddingBottom: 22 },
  container: {
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    fontFamily: lato,
    paddingBottom: 8,
    paddingTop: 28,
  },
});

export default MaskedInput;
export type { MaskedInputProps };
