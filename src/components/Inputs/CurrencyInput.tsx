import useDidMount from '@hooks/useDidMount';
import React, { useEffect, useMemo, useState } from 'react';
import MaskedInput, { MaskedInputProps } from './MaskedInput';
import { formatRawValueToCurrency } from './utils';

interface CurrencyInputProps extends Omit<MaskedInputProps, 'onChangeText' | 'value'> {
  /** Value set initially for input */
  initialValue?: number;
  /** Use currency cents when true. Defaults to `false`. */
  enableCents?: boolean;
  /** Char to use as decimal separator. Defaults to `,` */
  decimalSeparator?: string;
  /** Char to use as milesimal separator/ Defaults to `.` */
  milesimalSeparator?: string;
  /** Input change callback who provides two values: raw and formatted */
  onValueChange: (rawValue: number | null, formattedValue?: string) => void;
  /** Raw value for controlled inputs. To know more about controlled components, check https://reactjs.org/docs/forms.html#controlled-components */
  value?: number;
}

function CurrencyInput({
  decimalSeparator = ',',
  milesimalSeparator = '.',
  enableCents = false,
  disabled = false,
  initialValue,
  onValueChange,
  value,
  testID = 'CurrencyInput',
  ...props
}: CurrencyInputProps) {
  const didMount = useDidMount();
  const [rawValue, setRawValue] = useState<number | null>((initialValue || value) ?? null);
  const formattedValue = useMemo(
    () =>
      disabled || rawValue === null
        ? ''
        : formatRawValueToCurrency({ decimalSeparator, milesimalSeparator, rawValue: rawValue, enableCents }),
    [decimalSeparator, milesimalSeparator, rawValue, enableCents, disabled]
  );

  function handleOnChangeText(_value: string) {
    const onlyNums = _value.replace(/\D/g, '').substr(0, enableCents ? 13 : 11);

    if (!onlyNums) {
      setRawValue(null);
    } else {
      setRawValue(enableCents ? parseFloat(onlyNums) / 100 : parseInt(onlyNums, 10));
    }
  }

  useEffect(() => {
    if (didMount) {
      onValueChange(rawValue, formattedValue);
    }
  }, [rawValue]);

  useEffect(() => {
    if (didMount) {
      if (value) {
        setRawValue(value);
      } else {
        setRawValue(null);
      }
    }
  }, [value]);

  return (
    <MaskedInput
      {...props}
      disabled={disabled}
      autoCompleteType="off"
      blockCursor
      keyboardType="numeric"
      value={formattedValue}
      testID={testID}
      onChangeText={handleOnChangeText}
    />
  );
}

export default CurrencyInput;
export type { CurrencyInputProps };
