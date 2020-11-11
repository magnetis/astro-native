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