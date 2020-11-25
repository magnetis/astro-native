import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import Toggle from '../Toggle';
import { setupTimeTravel, timeTravel } from '@root/timeTravel';

beforeEach(setupTimeTravel);
afterEach(() => {
  jest.clearAllMocks();
});

const onValueChange = jest.fn();

describe('Toggle', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Toggle onValueChange={onValueChange} />);
    const toggleStyle = Object.assign({}, ...getByTestId('Toggle.Pressable').props.style);
    const bulletStyle = getByTestId('Toggle.Bullet').props.style;

    expect(toggleStyle).toEqual(
      expect.objectContaining({
        width: 50,
        height: 30,
        borderRadius: 28,
        backgroundColor: colors.moon400,
      })
    );

    expect(bulletStyle).toEqual(
      expect.objectContaining({
        transform: [{ translateX: 1 }],
        backgroundColor: colors.space100,
        position: 'absolute',
        borderRadius: 28,
        height: 28,
        width: 28,
        top: 1,
      })
    );
  });

  it('renders correctly with value as true', () => {
    const { getByTestId } = render(<Toggle startEnabled onValueChange={onValueChange} />);
    const toggleStyle = Object.assign({}, ...getByTestId('Toggle.Pressable').props.style);
    const bulletStyle = getByTestId('Toggle.Bullet').props.style;

    expect(toggleStyle).toEqual(
      expect.objectContaining({
        width: 50,
        height: 30,
        borderRadius: 28,
        backgroundColor: colors.uranus500,
      })
    );

    expect(bulletStyle).toEqual(
      expect.objectContaining({
        transform: [{ translateX: 21 }],
        backgroundColor: colors.space100,
        position: 'absolute',
        borderRadius: 28,
        height: 28,
        width: 28,
        top: 1,
      })
    );
  });

  it('renders correctly with isDisabled as true', () => {
    const { getByTestId } = render(<Toggle isDisabled startEnabled onValueChange={onValueChange} />);
    const toggleStyle = Object.assign({}, ...getByTestId('Toggle.Pressable').props.style);
    const bulletStyle = getByTestId('Toggle.Bullet').props.style;

    expect(toggleStyle).toEqual(
      expect.objectContaining({
        width: 50,
        height: 30,
        borderRadius: 28,
        backgroundColor: colors.moon200,
      })
    );

    expect(bulletStyle).toEqual(
      expect.objectContaining({
        transform: [{ translateX: 1 }],
        backgroundColor: colors.space100,
        position: 'absolute',
        borderRadius: 28,
        height: 28,
        width: 28,
        top: 1,
      })
    );

    fireEvent.press(getByTestId('Toggle.Pressable'));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('changes on pressing', () => {
    const { getByTestId } = render(<Toggle onValueChange={onValueChange} />);
    let toggleStyle = Object.assign({}, ...getByTestId('Toggle.Pressable').props.style);
    let bulletStyle = getByTestId('Toggle.Bullet').props.style;

    expect(toggleStyle).toEqual(
      expect.objectContaining({
        width: 50,
        height: 30,
        borderRadius: 28,
        backgroundColor: colors.moon400,
      })
    );

    expect(bulletStyle).toEqual(
      expect.objectContaining({
        transform: [{ translateX: 1 }],
        backgroundColor: colors.space100,
        position: 'absolute',
        borderRadius: 28,
        height: 28,
        width: 28,
        top: 1,
      })
    );

    fireEvent.press(getByTestId('Toggle.Pressable'));
    expect(onValueChange).toHaveBeenCalledWith(true);
    timeTravel(300);

    toggleStyle = Object.assign({}, ...getByTestId('Toggle.Pressable').props.style);
    bulletStyle = getByTestId('Toggle.Bullet').props.style;

    expect(toggleStyle).toEqual(
      expect.objectContaining({
        width: 50,
        height: 30,
        borderRadius: 28,
        backgroundColor: colors.uranus500,
      })
    );

    expect(bulletStyle).toEqual(
      expect.objectContaining({
        transform: [{ translateX: 21 }],
        backgroundColor: colors.space100,
        position: 'absolute',
        borderRadius: 28,
        height: 28,
        width: 28,
        top: 1,
      })
    );
  });
});
