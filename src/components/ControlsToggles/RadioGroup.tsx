import React, { useState } from 'react';
import { View } from 'react-native';

import Radio from './Radio';
import { RadioGroupOption } from './types';
import { getUniqueOptions } from './utils';

interface RadioGroupProps {
  /** Array with options the user has to select from. */
  options: RadioGroupOption[];
  /** RadioGroup option select callback. */
  onOptionChange: (newOption: RadioGroupOption) => void;
  /** Show options in a single line when set to `true`. Defaults to `false`. */
  inline?: boolean;
  /** When provided, group starts with default option selected. */
  defaultOption?: string | number | boolean;
  /** Used to locate this component in end-to-end tests. Defaults to `"RadioGroup"`. */
  testID?: string;
}

/**
 * Radio buttons appear when the user must select only one option from more than two.
 *
 * You can pass an array of options to RadioGroup and let the component handle the logic.
 */
function RadioGroup({
  options,
  onOptionChange,
  inline = false,
  defaultOption,
  testID = 'RadioGroup',
}: RadioGroupProps) {
  const filteredUniqueOptions = getUniqueOptions(options);
  const [selected, setSelected] = useState(defaultOption);

  function handleSelect(option: RadioGroupOption) {
    return function () {
      if (option.value !== selected) {
        onOptionChange(option);
        setSelected(option.value);
      }
    };
  }

  return (
    <View testID={testID} style={{ flexDirection: inline ? 'row' : 'column' }}>
      {filteredUniqueOptions.map((option) => {
        const key = `${option.label.replace(' ', '')}`;
        return (
          <View
            key={key}
            testID={`RadioGroup.Wrapper.${key}`}
            style={{ marginVertical: inline ? 0 : 12, marginHorizontal: inline ? 12 : 0 }}
          >
            <Radio
              {...option}
              testID={`RadioGroup.${key}`}
              selected={option.value === selected}
              label={option.label}
              onSelect={handleSelect(option)}
            />
          </View>
        );
      })}
    </View>
  );
}

export default RadioGroup;
export type { RadioGroupProps };
