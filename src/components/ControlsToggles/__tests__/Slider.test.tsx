import React from 'react';
import { render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import Slider from '../Slider';
import { act } from 'react-test-renderer';

const onValueChange = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe('Slider', () => {
  it('renders correctly with default props', () => {
    const { getByTestId, getByText } = render(
      <Slider onValueChange={onValueChange} label="Deadline" minimumValue={1} maximumValue={10} />
    );

    expect(getByTestId('Slider').props.minimumTrackTintColor).toEqual(colors.uranus500);
    expect(getByTestId('Slider').props.maximumTrackTintColor).toEqual(colors.moon400);

    expect(getByText('1 ').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
        fontFamily: 'Lato-Bold',
      })
    );
    expect(getByText('Deadline').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
        fontFamily: 'Lato-Regular',
      })
    );
  });

  it('renders correctly with unit as string', () => {
    const { getByTestId, getByText } = render(
      <Slider unit="days" onValueChange={onValueChange} label="Deadline" minimumValue={1} maximumValue={10} />
    );

    expect(getByTestId('Slider').props.minimumTrackTintColor).toEqual(colors.uranus500);
    expect(getByTestId('Slider').props.maximumTrackTintColor).toEqual(colors.moon400);

    expect(getByText('1 days').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
        fontFamily: 'Lato-Bold',
      })
    );
    expect(getByText('Deadline').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
        fontFamily: 'Lato-Regular',
      })
    );
  });

  it('renders correctly when fullFill is true', () => {
    const { getByTestId, getByText } = render(
      <Slider
        fullFill
        onValueChange={onValueChange}
        label="Deadline"
        minimumValue={1}
        maximumValue={10}
        unit={{ singular: 'day', plural: 'days' }}
      />
    );

    expect(getByTestId('Slider').props.minimumTrackTintColor).toEqual(colors.uranus600);
    expect(getByTestId('Slider').props.maximumTrackTintColor).toEqual(colors.uranus400);

    expect(getByText('1 day').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
        fontFamily: 'Lato-Bold',
      })
    );
    expect(getByText('Deadline').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon900,
        fontFamily: 'Lato-Regular',
      })
    );

    expect(getByTestId('Slider.Container').props.style).toEqual(
      expect.objectContaining({ flex: 1, flexDirection: 'column', justifyContent: 'center', width: '100%' })
    );

    expect(getByTestId('Slider.LabelContainer').props.style).toEqual(
      expect.objectContaining({
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 4,
      })
    );
  });

  it('renders correctly when disabled is true', () => {
    const { getByTestId, getByText } = render(
      <Slider
        disabled
        fullFill
        onValueChange={onValueChange}
        label="Deadline"
        minimumValue={1}
        maximumValue={10}
        unit={{ singular: 'day', plural: 'days' }}
      />
    );

    expect(getByTestId('Slider').props.minimumTrackTintColor).toEqual(colors.moon200);
    expect(getByTestId('Slider').props.maximumTrackTintColor).toEqual(colors.moon200);
    expect(getByTestId('Slider').props.disabled).toBe(true);

    expect(getByText('1 day').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Bold',
      })
    );
    expect(getByText('Deadline').props.style).toEqual(
      expect.objectContaining({
        color: colors.moon200,
        fontFamily: 'Lato-Regular',
      })
    );
  });

  it('changes value label on value change', () => {
    const { queryByText, getByTestId } = render(
      <Slider
        testID="Slider"
        fullFill
        onValueChange={onValueChange}
        label="Deadline"
        minimumValue={1}
        maximumValue={10}
        unit={{ singular: 'day', plural: 'days' }}
      />
    );

    expect(queryByText('1 day')).not.toBeNull();
    act(() => {
      getByTestId('Slider').props.onChange({ nativeEvent: { value: 5 } });
    });

    expect(queryByText('1 day')).toBeNull();
    expect(queryByText('5 days')).not.toBeNull();
  });

  it('changes value label on sliding complete and calls onValueChange', () => {
    const { queryByText, getByTestId } = render(
      <Slider
        testID="Slider"
        fullFill
        onValueChange={onValueChange}
        label="Deadline"
        minimumValue={1}
        maximumValue={10}
        unit={{ singular: 'day', plural: 'days' }}
      />
    );

    expect(queryByText('1 day')).not.toBeNull();

    act(() => {
      getByTestId('Slider').props.onRNCSliderSlidingComplete({ nativeEvent: { value: 6 } });
    });
    expect(onValueChange).toHaveBeenCalledWith(6);

    expect(queryByText('1 day')).toBeNull();
    expect(queryByText('6 days')).not.toBeNull();
  });

  it('renders correctly without label', () => {
    const { queryByText } = render(
      <Slider
        unit={{ singular: 'day', plural: 'days' }}
        hideLabel
        onValueChange={onValueChange}
        label="Deadline"
        minimumValue={1}
        maximumValue={10}
      />
    );

    expect(queryByText('1 day')).toBeNull();
    expect(queryByText('Deadline')).toBeNull();
  });
});
