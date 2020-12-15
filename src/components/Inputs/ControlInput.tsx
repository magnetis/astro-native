import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TextInput, View, Pressable, StyleSheet } from 'react-native';

import { getFontSize } from '@tokens/utils';
import { lato } from '@tokens/fonts';
import InputLabel from './InputLabel';
import { BaseInputProps } from './types';
import InputErrorMessage from './InputErrorMessage';
import { formatRawValueToCurrency, getInputBackgroundColor, getInputBorderColor } from './utils';
import { CircleLessIcon, CircleMoreIcon } from '@components/Icons';
import useDidMount from '@hooks/useDidMount';

interface ControlInputProps extends Omit<BaseInputProps, 'onChangeText'> {
  /** Amount which value will increase or decrease */
  step: number;
  /** Value set initially for input */
  initialValue: number;
  /** Use currency cents when true */
  enableCents?: boolean;
  /** Char to use as decimal separator */
  decimalSeparator?: string;
  /** Char to use as milesimal separator */
  milesimalSeparator?: string;
  /** Limits decrement to be great or equal to provided minValue */
  minValue?: number;
  /** Limits increment to be less or equal to provided maxValue */
  maxValue?: number;
  /** Input change callback who provides two values: raw and formatted */
  onValueChange: (rawValue: number, formattedValue?: string) => void;
}

/**
 * These inputs are commonly used for money input data, in contexts that require increasing and decreasing the value in large amounts while still enabling users to type in numbers manually.
 */
function ControlInput({
  step,
  initialValue,
  enableCents = false,
  decimalSeparator = ',',
  milesimalSeparator = '.',
  minValue,
  maxValue,
  onFocus,
  onBlur,
  error = '',
  touched = false,
  validated = false,
  disabled = false,
  large = false,
  label,
  onValueChange,
  testID = 'ControlInput.Input',
}: ControlInputProps) {
  const inputRef = useRef<TextInput>(null);
  const didMount = useDidMount();

  const [hasFocus, setHasFocus] = useState(false);
  const [rawValue, setRawValue] = useState(initialValue);

  const hasError = touched && Boolean(error) && !disabled;
  const baseSize = getFontSize(large ? 'large' : 'medium');
  const iconSize = baseSize * 2;
  const mainColor = getInputBorderColor({ disabled, hasError, validated, hasFocus });

  const formattedValue = useMemo(
    () => (disabled ? '' : formatRawValueToCurrency({ decimalSeparator, milesimalSeparator, rawValue, enableCents })),
    [decimalSeparator, milesimalSeparator, rawValue, enableCents, disabled]
  );

  const computedContainerStyles = {
    backgroundColor: getInputBackgroundColor({ disabled }),
    borderColor: mainColor,
    paddingRight: baseSize,
  };
  const computedInputStyles = {
    paddingLeft: baseSize,
    fontSize: baseSize,
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

  function increment() {
    setRawValue((rawValue) => {
      const incremented = enableCents ? rawValue + step : Math.floor(rawValue + step);
      const validMaxResult = maxValue !== undefined ? Math.min(incremented, maxValue) : incremented;
      const validMinResult = minValue ? Math.max(validMaxResult, minValue) : validMaxResult;

      return enableCents ? Math.floor(validMinResult * 100) / 100 : validMinResult;
    });
  }

  function decrement() {
    setRawValue((rawValue) => {
      const decremented = enableCents ? rawValue - step : Math.floor(rawValue - step);
      const validMinResult = minValue !== undefined ? Math.max(decremented, minValue) : decremented;
      const validMaxResult = maxValue ? Math.min(validMinResult, maxValue) : validMinResult;

      return enableCents ? Math.floor(validMaxResult * 100) / 100 : validMaxResult;
    });
  }

  function handleOnChangeText(_value: string) {
    const onlyNums = _value.replace(/\./g, '').replace(',', '');

    if (!onlyNums) {
      setRawValue(minValue || 0);
    } else {
      setRawValue(enableCents ? parseFloat(onlyNums) / 100 : parseInt(onlyNums, 10));
    }
  }

  useEffect(() => {
    if (didMount) {
      onValueChange(rawValue, formattedValue);
    }
  }, [rawValue]);

  return (
    <View testID="ControlInput" style={styles.wrapper}>
      <Pressable
        testID="ControlInput.Container"
        onPress={handleInputPress}
        style={[styles.container, computedContainerStyles]}
        disabled={disabled}
      >
        <InputLabel
          isEmpty={disabled}
          hasFocus={hasFocus}
          disabled={disabled}
          hasError={hasError}
          validated={validated}
          large={large}
          baseSize={baseSize}
          label={label}
        />
        <TextInput
          caretHidden
          editable={!disabled}
          keyboardType="numeric"
          autoCompleteType="off"
          value={formattedValue}
          testID={testID}
          style={[styles.input, computedInputStyles]}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          onChangeText={handleOnChangeText}
        />
        <Pressable testID="ControlInput.Decrement" onPress={decrement} disabled={disabled}>
          <CircleLessIcon width={iconSize} height={iconSize} color={mainColor} />
        </Pressable>
        <Pressable testID="ControlInput.Increment" onPress={increment} disabled={disabled}>
          <CircleMoreIcon width={iconSize} height={iconSize} color={mainColor} />
        </Pressable>
      </Pressable>
      <InputErrorMessage error={error} hasError={hasError} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { paddingBottom: 22 },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontFamily: lato,
    paddingBottom: 8,
    paddingTop: 28,
  },
});

export default ControlInput;
export type { ControlInputProps };
