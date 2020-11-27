import type { TextInputProps } from 'react-native';

export interface BaseInputProps extends TextInputProps {
  onChangeText: (value: string) => void;
  label: string;
  error?: string;
  validated?: boolean;
  disabled?: boolean;
  touched?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  large?: boolean;
  testID?: string;
}
