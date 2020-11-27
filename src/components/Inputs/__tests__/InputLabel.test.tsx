import React from 'react';
import { render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { setupTimeTravel, timeTravel } from '@root/timeTravel';
import InputLabel from '../InputLabel';

const props = {
  baseSize: 16,
  label: 'Label',
};

beforeEach(setupTimeTravel);
afterEach(() => {
  jest.clearAllMocks();
});

describe('InputLabel', () => {
  it('renders correctly when hasFocus is true', () => {
    const { getByTestId, getByText } = render(
      <InputLabel
        hasFocus
        disabled={false}
        hasError={false}
        validated={false}
        isEmpty={false}
        large={false}
        {...props}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 6 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[0]).toEqual(expect.objectContaining({ fontFamily: 'Lato-Bold' }));
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 12,
        color: colors.uranus500,
      })
    );
  });

  it('renders correctly when disabled is true', () => {
    const { getByTestId, getByText } = render(
      <InputLabel
        disabled
        hasFocus={false}
        hasError={false}
        validated={false}
        isEmpty={false}
        large={false}
        {...props}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 6 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[0]).toEqual(expect.objectContaining({ fontFamily: 'Lato-Bold' }));
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 12,
        color: colors.moon300,
      })
    );
  });

  it('renders correctly when hasError is true', () => {
    const { getByTestId, getByText } = render(
      <InputLabel
        hasError
        disabled={false}
        hasFocus={false}
        validated={false}
        isEmpty={false}
        large={false}
        {...props}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 6 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[0]).toEqual(expect.objectContaining({ fontFamily: 'Lato-Bold' }));
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 12,
        color: colors.mars500,
      })
    );
  });

  it('renders correctly when validated is true', () => {
    const { getByTestId, getByText } = render(
      <InputLabel
        validated
        hasError={false}
        disabled={false}
        hasFocus={false}
        isEmpty={false}
        large={false}
        {...props}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 6 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[0]).toEqual(expect.objectContaining({ fontFamily: 'Lato-Bold' }));
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 12,
        color: colors.earth400,
      })
    );
  });

  it('renders correctly when isEmpty is true', () => {
    const { getByTestId, getByText } = render(
      <InputLabel
        isEmpty
        validated={false}
        hasError={false}
        disabled={false}
        hasFocus={false}
        large={false}
        {...props}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 16 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[0]).toEqual(expect.objectContaining({ fontFamily: 'Lato-Bold' }));
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 16,
        color: colors.moon400,
      })
    );
  });

  it('renders correctly when hasFocus and large are true ', () => {
    const { getByTestId, getByText } = render(
      <InputLabel
        {...props}
        large
        hasFocus
        disabled={false}
        hasError={false}
        validated={false}
        isEmpty={false}
        baseSize={24}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 8 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[0]).toEqual(expect.objectContaining({ fontFamily: 'Lato-Bold' }));
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 16,
        color: colors.uranus500,
      })
    );
  });

  it('renders correctly when disabled and large are true', () => {
    const { getByTestId, getByText } = render(
      <InputLabel
        {...props}
        large
        disabled
        hasFocus={false}
        hasError={false}
        validated={false}
        isEmpty={false}
        baseSize={24}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 8 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[0]).toEqual(expect.objectContaining({ fontFamily: 'Lato-Bold' }));
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 16,
        color: colors.moon300,
      })
    );
  });

  it('renders correctly when hasError and large are true', () => {
    const { getByTestId, getByText } = render(
      <InputLabel
        {...props}
        large
        hasError
        disabled={false}
        hasFocus={false}
        validated={false}
        isEmpty={false}
        baseSize={24}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 8 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[0]).toEqual(expect.objectContaining({ fontFamily: 'Lato-Bold' }));
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 16,
        color: colors.mars500,
      })
    );
  });

  it('renders correctly when validated and large are true', () => {
    const { getByTestId, getByText } = render(
      <InputLabel
        {...props}
        large
        validated
        hasError={false}
        disabled={false}
        hasFocus={false}
        isEmpty={false}
        baseSize={24}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 8 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[0]).toEqual(expect.objectContaining({ fontFamily: 'Lato-Bold' }));
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 16,
        color: colors.earth400,
      })
    );
  });

  it('renders correctly when isEmpty and large are true', () => {
    const { getByTestId, getByText } = render(
      <InputLabel
        {...props}
        large
        isEmpty
        validated={false}
        hasError={false}
        disabled={false}
        hasFocus={false}
        baseSize={24}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 18 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[0]).toEqual(expect.objectContaining({ fontFamily: 'Lato-Bold' }));
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 24,
        color: colors.moon400,
      })
    );
  });

  it('moves label up when hasFocus changes to true', () => {
    const { getByTestId, getByText, update } = render(
      <InputLabel
        {...props}
        isEmpty
        large={false}
        validated={false}
        hasError={false}
        disabled={false}
        hasFocus={false}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 16 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 16,
        color: colors.moon400,
      })
    );

    update(
      <InputLabel hasFocus isEmpty large={false} validated={false} hasError={false} disabled={false} {...props} />
    );

    timeTravel(200);

    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 6 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 12,
        color: colors.uranus500,
      })
    );
  });

  it('moves label up when hasFocus changes to true and large is true', () => {
    const { getByTestId, getByText, update } = render(
      <InputLabel
        {...props}
        isEmpty
        large
        validated={false}
        hasError={false}
        disabled={false}
        hasFocus={false}
        baseSize={24}
      />
    );
    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 18 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 24,
        color: colors.moon400,
      })
    );

    update(<InputLabel hasFocus isEmpty large validated={false} hasError={false} disabled={false} {...props} />);

    timeTravel(200);

    expect(getByTestId('InputLabel').props.style).toEqual(
      expect.objectContaining({
        transform: [{ translateY: 8 }],
        position: 'absolute',
        overflow: 'hidden',
        width: '95%',
        left: 0,
        top: 0,
      })
    );
    expect(getByText('Label').props.style[1]).toEqual(
      expect.objectContaining({
        fontSize: 16,
        color: colors.uranus500,
      })
    );
  });
});
