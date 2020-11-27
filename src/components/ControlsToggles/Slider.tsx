import React, { useEffect, useState } from 'react';
import RNSlider from '@react-native-community/slider';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { StyleSheet, View } from 'react-native';
import { SecondaryTextMedium } from '@components/Text';
import useDidMount from '@hooks/useDidMount';

type Unit = string | { singular: string; plural: string };

interface SliderProps {
  label: string;
  minimumValue: number;
  maximumValue: number;
  isDisabled?: boolean;
  unit?: Unit;
  fullFill?: boolean;
  onValueChange: (newValue: number) => void;
  testID?: string;
}

function Slider({
  isDisabled = false,
  fullFill = false,
  onValueChange,
  label,
  unit = '',
  testID = 'Slider',
  ...props
}: SliderProps) {
  const didMount = useDidMount();
  const [value, setValue] = useState(props.minimumValue);
  const [slidingValue, setSlidingValue] = useState(value);
  const unitString = typeof unit === 'string' ? unit : slidingValue > 1 ? unit.plural : unit.singular;
  const sliderProps = {
    minimumTrackTintColor: isDisabled ? colors.moon200 : fullFill ? colors.uranus600 : colors.uranus500,
    maximumTrackTintColor: isDisabled ? colors.moon200 : fullFill ? colors.uranus400 : colors.moon400,
  };

  function handleSlindingComplete(newValue: number) {
    setValue(newValue);
    setSlidingValue(newValue);
  }

  function handleValueChange(currentValue: number) {
    setSlidingValue(currentValue);
  }

  useEffect(() => {
    if (didMount) {
      onValueChange(value);
    }
  }, [value]);

  return (
    <View testID="Slider.Container" style={styles.container}>
      <View testID="Slider.LabelContainer" style={styles.labelContainer}>
        <SecondaryTextMedium color={isDisabled ? colors.moon200 : colors.moon900} bold>
          {String(slidingValue)} {unitString}
        </SecondaryTextMedium>
        <SecondaryTextMedium color={isDisabled ? colors.moon200 : colors.moon900}>{label}</SecondaryTextMedium>
      </View>
      <RNSlider
        {...props}
        {...sliderProps}
        testID={testID}
        step={1}
        disabled={isDisabled}
        onSlidingComplete={handleSlindingComplete}
        onValueChange={handleValueChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', justifyContent: 'center', width: '100%' },
  labelContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
});

export default Slider;
export type { SliderProps };
