import '@testing-library/jest-native/extend-expect';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
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
      handleException: (e: any) => {
        console.error(e);
      },
    },
  };
});

const FRAME_TIME = 10;

global.requestAnimationFrame = (cb) => {
  // Default implementation of requestAnimationFrame calls setTimeout(cb, 0),
  // which will result in a cascade of timers - this generally pisses off test runners
  // like Jest who watch the number of timers created and assume an infinite recursion situation
  // if the number gets too large.
  //
  // Setting the timeout simulates a frame every 1/100th of a second
  setTimeout(cb as unknown as (args: void) => void, FRAME_TIME);
  return 0;
};
