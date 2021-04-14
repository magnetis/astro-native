import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { TextInput as RNTextInput, Pressable, StyleSheet, View } from 'react-native';

import { lato } from '@tokens/fonts';
import { getFontSize } from '@tokens/utils';

import { getInputBackgroundColor, getInputBorderColor } from './utils';
import InputLabel from './InputLabel';
import InputErrorMessage from './InputErrorMessage';
import InputStatusIcon from './InputStatusIcon';

import type { BaseInputProps } from './types';

interface TextAreaInputProps extends BaseInputProps {
  /** Makes it have fixed, or grow according to given text */
  elastic?: boolean;
}

/**
 *
 * The regular input. Labels appear on the default state and slightly move upwards when the user starts interacting and typing on the component.
 */
function TextAreaInput({
  error = '',
  elastic = false,
  validated = false,
  disabled = false,
  touched = false,
  large = false,
  onBlur,
  onFocus,
  onChangeText,
  label,
  testID = 'TextAreaInput.Input',
  ...props
}: TextAreaInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  const hasValue = Boolean(props.defaultValue) || Boolean(props.value);

  const [isEmpty, setIsEmpty] = useState(!hasValue);
  const [hasFocus, setHasFocus] = useState(false);

  const hasError = touched && Boolean(error) && !disabled;
  const isValidated = !hasError && !disabled && validated;

  const baseSize = getFontSize(large ? 'large' : 'medium');

  const computedContainerStyles = useMemo(
    () => ({
      backgroundColor: getInputBackgroundColor({ disabled }),
      borderColor: getInputBorderColor({ disabled, hasError, validated, hasFocus }),
    }),
    [disabled, hasError, validated, hasFocus]
  );

  const computedInputStyles = useMemo(
    () => ({
      paddingLeft: baseSize,
      fontSize: baseSize,
      paddingRight: hasError || isValidated ? 56 : baseSize,
      height: elastic ? undefined : 160,
    }),
    [baseSize, hasError, isValidated, elastic]
  );

  useEffect(() => {
    if (!Boolean(props.value) !== isEmpty) {
      setIsEmpty(!Boolean(props.value));
    }
  }, [props.value]);

  const handleInputPress = useCallback(() => inputRef.current?.focus(), [inputRef]);

  const handleInputFocus = useCallback(() => {
    setHasFocus(true);
    onFocus && onFocus();
  }, [onFocus, setHasFocus]);

  const handleInputBlur = useCallback(() => {
    setHasFocus(false);
    onBlur && onBlur();
  }, [onBlur, setHasFocus]);

  const handleOnChangeText = useCallback(
    (value: string) => {
      if (!Boolean(value) !== isEmpty) {
        setIsEmpty(!Boolean(value));
      }
      onChangeText(value);
    },
    [isEmpty, setIsEmpty, onChangeText]
  );

  return (
    <View testID="TextAreaInput" style={styles.wrapper}>
      <Pressable
        testID="TextAreaInput.Container"
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
          testID={testID}
          editable={!disabled}
          style={[styles.input, computedInputStyles]}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          multiline={true}
          textAlignVertical="top"
          onChangeText={handleOnChangeText}
        />
        <InputStatusIcon hasError={hasError} isValidated={isValidated} large={large} />
      </Pressable>
      {hasError && <InputErrorMessage error={error} hasError={hasError} />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { paddingBottom: 12 },
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

export default TextAreaInput;
export type { TextAreaInputProps };
