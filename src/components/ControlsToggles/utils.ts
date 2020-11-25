import { RadioGroupOption } from './types';

/**
 * Receives an array of RadioGroupOptions and returns a filtered list with unique value and labels
 *
 * This function returns the first occurence in case of duplicated value or label
 * @param options  the RadioGroupOptions array
 */
export function getUniqueOptions(options: RadioGroupOption[]) {
  return options.filter(
    (option, index, optionArr) =>
      optionArr.indexOf(optionArr.find((o) => o.value === option.value) as RadioGroupOption) === index &&
      optionArr.indexOf(optionArr.find((o) => o.label === option.label) as RadioGroupOption) === index
  );
}
