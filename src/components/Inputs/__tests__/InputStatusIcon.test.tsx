import React from 'react';
import { render } from '@testing-library/react-native';

import InputStatusIcon from '../InputStatusIcon';

describe('InputStatusIcon', () => {
  it('renders AlertIcon when hasError is true', () => {
    const { getByTestId, queryByTestId } = render(<InputStatusIcon hasError isValidated={false} large={false} />);

    expect(getByTestId('InputStatusIcon.Error').props.style[0]).toEqual(
      expect.objectContaining({ position: 'absolute', right: 16 })
    );
    expect(getByTestId('InputStatusIcon.Error').props.style[1]).toEqual(expect.objectContaining({ top: 12 }));
    expect(queryByTestId('InputStatusIcon.Validated')).toBeNull();
  });

  it('renders CircleCheckIcon when hasError is false and isValidated is true', () => {
    const { getByTestId, queryByTestId } = render(<InputStatusIcon hasError={false} isValidated large={false} />);

    expect(getByTestId('InputStatusIcon.Validated').props.style[0]).toEqual(
      expect.objectContaining({ position: 'absolute', right: 16 })
    );
    expect(getByTestId('InputStatusIcon.Validated').props.style[1]).toEqual(expect.objectContaining({ top: 12 }));
    expect(queryByTestId('InputStatusIcon.Error')).toBeNull();
  });

  it('renders AlertIcon when hasError and large are true', () => {
    const { getByTestId, queryByTestId } = render(<InputStatusIcon hasError isValidated={false} large />);

    expect(getByTestId('InputStatusIcon.Error').props.style[0]).toEqual(
      expect.objectContaining({ position: 'absolute', right: 16 })
    );
    expect(getByTestId('InputStatusIcon.Error').props.style[1]).toEqual(expect.objectContaining({ top: 16 }));
    expect(queryByTestId('InputStatusIcon.Validated')).toBeNull();
  });

  it('renders CircleCheckIcon when hasError is false and isValidated and large are true', () => {
    const { getByTestId, queryByTestId } = render(<InputStatusIcon hasError={false} isValidated large />);

    expect(getByTestId('InputStatusIcon.Validated').props.style[0]).toEqual(
      expect.objectContaining({ position: 'absolute', right: 16 })
    );
    expect(getByTestId('InputStatusIcon.Validated').props.style[1]).toEqual(expect.objectContaining({ top: 16 }));
    expect(queryByTestId('InputStatusIcon.Error')).toBeNull();
  });

  it('renders nothing when hasError and isValidated are false', () => {
    const { queryByTestId } = render(<InputStatusIcon hasError={false} isValidated={false} large={false} />);

    expect(queryByTestId('InputStatusIcon.Error')).toBeNull();
    expect(queryByTestId('InputStatusIcon.Validated')).toBeNull();
  });
});
