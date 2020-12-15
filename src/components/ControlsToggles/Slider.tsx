import React, { useEffect, useState } from 'react';
import RNSlider from '@react-native-community/slider';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { StyleSheet, View } from 'react-native';
import { SecondaryTextMedium } from '@components/Text';
import useDidMount from '@hooks/useDidMount';

type Unit = string | { singular: string; plural: string };

interface SliderProps {
  /** Text to be rendered on top of slider */
  label: string;
  /** Mininum range value */
  minimumValue: number;
  /** Maximum range value */
  maximumValue: number;
  /** Disables any user interaction with component. Defaults to `false`. */
  disabled?: boolean;
  /** Unit used for range values. Can be either a single string or an object with `singular` and `plural` keys */
  unit?: Unit;
  /** Fills entire slider with color when set to true. Defaults to `false` */
  fullFill?: boolean;
  /** Slider swipe callback */
  onValueChange: (newValue: number) => void;
  /** Used to locate this component in end-to-end tests. Defaults to `"Slider"`. */
  testID?: string;
}

/**
 * Sliders give users a visual indication of adjustable content, mostly numerical (for time, money, etc). They can be used with or without text labels.
 *
 * Adjust `minimumValue` and `maximumValue` attributes to set the value range.
 */
function Slider({
  disabled = false,
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
    minimumTrackTintColor: disabled ? colors.moon200 : fullFill ? colors.uranus600 : colors.uranus500,
    maximumTrackTintColor: disabled ? colors.moon200 : fullFill ? colors.uranus400 : colors.moon400,
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
        <SecondaryTextMedium color={disabled ? colors.moon200 : colors.moon900} bold>
          {String(slidingValue)} {unitString}
        </SecondaryTextMedium>
        <SecondaryTextMedium color={disabled ? colors.moon200 : colors.moon900}>{label}</SecondaryTextMedium>
      </View>
      <RNSlider
        {...props}
        {...sliderProps}
        testID={testID}
        step={1}
        disabled={disabled}
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
