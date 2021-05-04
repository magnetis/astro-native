import React, { useEffect, useRef, useState } from 'react';
import { TextInput as RNTextInput, StyleSheet, View } from 'react-native';

import { getInputBackgroundColor, getInputBorderColor } from './utils';
import type { BaseInputProps } from './types';
import { lato } from '@tokens/fonts';
import { getFontSize } from '@tokens/utils';
import InputLabel from './InputLabel';
import InputErrorMessage from './InputErrorMessage';
import InputStatusIcon from './InputStatusIcon';
import InputEyeToggle from './InputEyeToggle';

interface TextInputProps extends BaseInputProps {
  /** Behaves as a password input when true */
  password?: boolean;
}

/**
 *
 * The regular input. Labels appear on the default state and slightly move upwards when the user starts interacting and typing on the component.
 */
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
  testID = 'TextInput.Input',
  ...props
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  const hasValue = Boolean(props.defaultValue) || Boolean(props.value);

  const [isEmpty, setIsEmpty] = useState(!hasValue);
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

  useEffect(() => {
    if (!Boolean(props.value) !== isEmpty) {
      setIsEmpty(!Boolean(props.value));
    }
  }, [props.value]);

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
    <View testID="TextInput" style={styles.wrapper}>
      <View testID="TextInput.Container" style={[styles.container, computedContainerStyles]}>
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
          secureTextEntry={showPassword}
          testID={testID}
          editable={!disabled}
          style={[styles.input, computedInputStyles]}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          onChangeText={handleOnChangeText}
        />
        {!password && <InputStatusIcon hasError={hasError} isValidated={isValidated} large={large} />}
      </View>
      {password && (
        <InputEyeToggle
          hasError={hasError}
          hasFocus={hasFocus}
          large={large}
          visible={showPassword}
          onPress={togglePasswordVisibility}
        />
      )}
      {hasError && <InputErrorMessage error={error} hasError={hasError} />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { paddingBottom: 12 },
  container: {
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 0,
    paddingBottom: 0,
  },
  input: {
    fontFamily: lato,
    paddingBottom: 8,
    paddingTop: 28,
    flexGrow: 1,
    margin: 0,
    zIndex: 1,
  },
});

export default TextInput;
export type { TextInputProps };
