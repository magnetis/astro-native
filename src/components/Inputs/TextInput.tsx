import React, { useRef, useState } from 'react';
import { TextInput as RNTextInput, Pressable, StyleSheet, View } from 'react-native';

import { getInputBackgroundColor, getInputBorderColor } from './utils';
import type { BaseInputProps } from './types';
import { lato } from '@tokens/fonts';
import { getFontSize } from '@tokens/utils';
import InputLabel from './InputLabel';
import InputErrorMessage from './InputErrorMessage';
import InputStatusIcon from './InputStatusIcon';
import InputEyeToggle from './InputEyeToggle';

interface TextInputProps extends Omit<BaseInputProps, 'placeholder'> {
  password?: boolean;
}

function TextInput({
  error = '',
  password = false,
  validated = false,
  disabled = false,
  touched = false,
  large = false,
  onBlur,
  onFocus,
  onChangeText,
  label,
  testID = 'TextInput',
  ...props
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);

  const [isEmpty, setIsEmpty] = useState(!Boolean(props.defaultValue));
  const [hasFocus, setHasFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(password);

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
    paddingRight: hasError || isValidated ? 56 : baseSize,
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

  function handleOnChangeText(value: string) {
    if (!Boolean(value) !== isEmpty) {
      setIsEmpty(!Boolean(value));
    }
    onChangeText(value);
  }

  function togglePasswordVisibility() {
    setShowPassword((value) => !value);
  }

  return (
    <View testID={testID} style={styles.wrapper}>
      <Pressable
        testID="TextInput.Container"
        onPress={handleInputPress}
        style={[styles.container, computedContainerStyles]}
      >
        <InputLabel
          hasFocus={hasFocus}
          disabled={disabled}
          hasError={hasError}
          validated={validated}
          isEmpty={isEmpty}
          large={large}
          baseSize={baseSize}
          label={label}
        />
        <RNTextInput
          {...props}
          secureTextEntry={!showPassword}
          testID="TextInput.Input"
          editable={!disabled}
          style={[styles.input, computedInputStyles]}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          onChangeText={handleOnChangeText}
        />
        <InputStatusIcon hasError={hasError} isValidated={isValidated} large={large} />
      </Pressable>
      {password ? (
        <InputEyeToggle large={large} visible={showPassword} onPress={togglePasswordVisibility} />
      ) : (
        <InputErrorMessage error={error} hasError={hasError} />
      )}
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

export default TextInput;
export type { TextInputProps };
