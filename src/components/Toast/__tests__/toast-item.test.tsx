import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { CircleCheckIcon, AlertIcon, WarningIcon } from '@components/Icons/Support';

import ToastItem, { ToastItemProps } from '../toast-item';

const onClose = jest.fn();

const props: ToastItemProps = {
  onClose,
  message: 'Type here the success message from the galaxy.',
  type: 'alert',
  timeout: 1,
  key: 'alerta',
  Icon: CircleCheckIcon,
  testID: 'alert',
};

const propsError: ToastItemProps = {
  onClose,
  message: 'Type here the error message from the galaxy.',
  type: 'alert',
  timeout: 1,
  key: 'alerta',
  Icon: AlertIcon,
  testID: 'error',
};

const propsInfo: ToastItemProps = {
  onClose,
  message: 'Type here the info message from the galaxy.',
  type: 'info',
  timeout: 1,
  key: 'info',
  Icon: AlertIcon,
  testID: 'info',
};

const propsWarning: ToastItemProps = {
  onClose,
  message: 'Type here the warning message from the galaxy.',
  type: 'warning',
  timeout: 1,
  key: 'warning',
  Icon: WarningIcon,
  testID: 'warning',
};

describe('Outline Icon Label Button', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props for type success', () => {
    const { getByText, getByTestId } = render(<ToastItem {...props} />);

    const touchable = getByTestId('touchable.alert');
    expect(touchable).toBeTruthy();

    fireEvent.press(getByTestId('touchable.alert'));
    expect(onClose).toBeCalledTimes(1);
    expect(getByTestId('icon.alert')).toBeTruthy();
    expect(getByText('Type here the success message from the galaxy.')).toBeTruthy();
  });

  it('renders correctly with default props for type error', () => {
    const { getByText, getByTestId } = render(<ToastItem {...propsError} />);

    const touchable = getByTestId('touchable.error');
    expect(touchable).toBeTruthy();

    fireEvent.press(getByTestId('touchable.error'));
    expect(onClose).toBeCalledTimes(1);
    expect(getByTestId('icon.error')).toBeTruthy();
    expect(getByText('Type here the error message from the galaxy.')).toBeTruthy();
  });

  it('renders correctly with default props for type info', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    const { getByText, getByTestId } = render(<ToastItem {...propsInfo} />);
    jest.clearAllMocks();

    const touchable = getByTestId('touchable.info');
    expect(touchable).toBeTruthy();

    fireEvent.press(getByTestId('touchable.info'));
    expect(onClose).toBeCalledTimes(1);
    expect(getByTestId('icon.info')).toBeTruthy();
    expect(getByText('Type here the info message from the galaxy.')).toBeTruthy();
  });

  it('renders correctly with default props for type warning', () => {
    const { getByText, getByTestId } = render(<ToastItem {...propsWarning} />);
    jest.clearAllMocks();

    const touchable = getByTestId('touchable.warning');
    expect(touchable).toBeTruthy();

    fireEvent.press(getByTestId('touchable.warning'));
    expect(onClose).toBeCalledTimes(1);
    expect(getByTestId('icon.warning')).toBeTruthy();
    expect(getByText('Type here the warning message from the galaxy.')).toBeTruthy();
  });
});
