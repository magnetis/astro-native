import React from 'react';
import { render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import Slider from '../Slider';

const mockOnValueChange = jest.fn();

describe('Slider', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const { getByTestId, getByText } = render(
      <Slider onValueChange={mockOnValueChange} label="Deadline" minimumValue={1} maximumValue={10} />
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
      <Slider unit="days" onValueChange={mockOnValueChange} label="Deadline" minimumValue={1} maximumValue={10} />
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
        onValueChange={mockOnValueChange}
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
        onValueChange={mockOnValueChange}
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
    const { queryByText, getByTestId, getByText } = render(
      <Slider
        testID="Slider"
        fullFill
        onValueChange={mockOnValueChange}
        label="Deadline"
        minimumValue={1}
        maximumValue={10}
        unit={{ singular: 'day', plural: 'days' }}
      />
    );

    expect(getByText('1 day')).toBeTruthy();

    getByTestId('Slider').props.onChange({ nativeEvent: { value: 5 } });

    expect(queryByText('1 day')).toBeNull();
    expect(getByText('5 days')).toBeTruthy();
  });

  it('changes value label on sliding complete and calls mockOnValueChange', () => {
    const { queryByText, getByTestId, getByText } = render(
      <Slider
        testID="Slider"
        fullFill
        onValueChange={mockOnValueChange}
        label="Deadline"
        minimumValue={1}
        maximumValue={10}
        unit={{ singular: 'day', plural: 'days' }}
      />
    );

    expect(getByText('1 day')).toBeTruthy();

    getByTestId('Slider').props.onRNCSliderSlidingComplete({ nativeEvent: { value: 6 } });

    expect(mockOnValueChange).toHaveBeenCalledWith(6);

    expect(queryByText('1 day')).toBeNull();
    expect(getByText('6 days')).toBeTruthy();
  });

  it('renders correctly without header', () => {
    const { queryByText } = render(
      <Slider
        unit={{ singular: 'day', plural: 'days' }}
        hideHeader
        onValueChange={mockOnValueChange}
        label="Deadline"
        minimumValue={1}
        maximumValue={10}
      />
    );

    expect(queryByText('1 day')).toBeNull();
    expect(queryByText('Deadline')).toBeNull();
  });

  it('renders correctly without label', () => {
    const { getByText, queryByA11yLabel } = render(
      <Slider
        unit={{ singular: 'day', plural: 'days' }}
        onValueChange={mockOnValueChange}
        minimumValue={1}
        maximumValue={10}
      />
    );

    expect(getByText('1 day')).toBeDefined();
    expect(queryByA11yLabel('tipo de valor')).toBeNull();
  });

  it('validates if onSlidingComplete is called', () => {
    const mockOnSlidingComplete = jest.fn();
    const { getByTestId } = render(
      <Slider
        testID="Slider"
        fullFill
        onValueChange={mockOnValueChange}
        onSlidingComplete={mockOnSlidingComplete}
        label="Deadline"
        minimumValue={1}
        maximumValue={10}
        unit={{ singular: 'day', plural: 'days' }}
      />
    );
    getByTestId('Slider').props.onRNCSliderSlidingComplete({ nativeEvent: { value: 5 } });
    expect(mockOnSlidingComplete).toHaveBeenCalled();
  });

  it('validates if onSlidingComplete is not called', () => {
    const mockOnSlidingComplete = jest.fn();
    const { getByTestId } = render(
      <Slider
        testID="Slider"
        fullFill
        onValueChange={mockOnValueChange}
        label="Deadline"
        minimumValue={1}
        maximumValue={10}
        unit={{ singular: 'day', plural: 'days' }}
      />
    );

    getByTestId('Slider').props.onRNCSliderSlidingComplete({ nativeEvent: { value: 5 } });
    expect(mockOnSlidingComplete).not.toHaveBeenCalled();
  });
});
