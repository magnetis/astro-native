import type { TextInputProps } from 'react-native';

export interface BaseInputProps extends TextInputProps {
  /** Input change callback, returns value as a parameter */
  onChangeText: (value: string) => void;
  /** Label text to be displayed on input */
  label: string;
  /** Error message or empty string when no error */
  error?: string;
  /** Show validated visual feedback when true */
  validated?: boolean;
  /** Disable any user interaction with input */
  disabled?: boolean;
  /** Does not show error message when false */
  touched?: boolean;
  /** Input blur callback */
  onBlur?: () => void;
  /** Input focus callback */
  onFocus?: () => void;
  /** Render input's large size when true */
  large?: boolean;
  /** Used to locate this component in end-to-end tests */
  testID?: string;
}
