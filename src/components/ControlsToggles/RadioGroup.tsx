import React, { useState } from 'react';
import { View } from 'react-native';

import Radio from './Radio';
import { RadioGroupOption } from './types';
import { getUniqueOptions } from './utils';

interface RadioGroupProps {
  options: RadioGroupOption[];
  onOptionChange: (newOption: RadioGroupOption) => void;
  inline?: boolean;
  defaultOption?: string | number | boolean;
  testID?: string;
}

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
