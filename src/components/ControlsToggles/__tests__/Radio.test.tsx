import React from 'react';
import { render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import Radio from '../Radio';

const onSelect = jest.fn();

describe('Radio', () => {
  it('renders correctly when selected', () => {
    const { getByTestId, getByText } = render(<Radio label="Radio" onSelect={onSelect} isSelected />);

    expect(getByTestId('Radio').props.style).toEqual(
      expect.objectContaining({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      })
    );
    expect(getByTestId('Radio.Circle').props.style[0]).toEqual(
      expect.objectContaining({
        width: 18,
        height: 18,
        borderRadius: 18,
        backgroundColor: colors.space100,
        marginRight: 8,
      })
    );
    expect(getByTestId('Radio.Circle').props.style[1]).toEqual(
      expect.objectContaining({ borderWidth: 5, borderColor: colors.uranus500 })
    );
    expect(getByText('Radio').props.style).toEqual(expect.objectContaining({ color: colors.moon900 }));
  });

  it('renders correctly when not selected', () => {
    const { getByTestId, getByText } = render(
      <Radio testID="MyRadio" label="Radio" onSelect={onSelect} isSelected={false} />
    );

    expect(getByTestId('MyRadio').props.style).toEqual(
      expect.objectContaining({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      })
    );
    expect(getByTestId('Radio.Circle').props.style[0]).toEqual(
      expect.objectContaining({
        width: 18,
        height: 18,
        borderRadius: 18,
        backgroundColor: colors.space100,
        marginRight: 8,
      })
    );
    expect(getByTestId('Radio.Circle').props.style[1]).toEqual(
      expect.objectContaining({ borderWidth: 2, borderColor: colors.moon500 })
    );
    expect(getByText('Radio').props.style).toEqual(expect.objectContaining({ color: colors.moon900 }));
  });

  it('renders correctly when disabled', () => {
    const { getByTestId, getByText } = render(
      <Radio testID="MyRadio" label="Radio" onSelect={onSelect} isSelected={false} isDisabled />
    );

    expect(getByTestId('MyRadio').props.style).toEqual(
      expect.objectContaining({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      })
    );
    expect(getByTestId('Radio.Circle').props.style[0]).toEqual(
      expect.objectContaining({
        width: 18,
        height: 18,
        borderRadius: 18,
        backgroundColor: colors.space100,
        marginRight: 8,
      })
    );
    expect(getByTestId('Radio.Circle').props.style[1]).toEqual(
      expect.objectContaining({ borderWidth: 2, borderColor: colors.moon200 })
    );
    expect(getByText('Radio').props.style).toEqual(expect.objectContaining({ color: colors.moon200 }));
  });
});
