export type RadioGroupOption = {
  /** Text to be rendered aside radio button */
  label: string;
  /** Value radio button represents */
  value: string | number | boolean;
  /** Disables any user interaction with component. Defaults to `false`. */
  disabled?: boolean;
};
