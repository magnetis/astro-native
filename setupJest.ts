import '@testing-library/jest-native/extend-expect';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
/**
 * Fix RN 0.63.2 issue related to 'ExceptionsManager.handleException...'
 * Related issue: https://github.com/facebook/react-native/issues/29849
 * Related PR: https://github.com/facebook/react-native/pull/30027
 *  */
jest.mock('react-native/Libraries/LogBox/LogBox');
jest.mock('react-native/Libraries/LogBox/Data/LogBoxData', () => {
  return {
    withSubscription: () => {},
    isLogBoxErrorMessage: () => true,
    ExceptionsManager: {
      handleException: (e: any, _flag: boolean) => {
        console.error(e);
      },
    },
  };
});

// Mocks for react navigation
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});