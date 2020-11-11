module.exports = {
  setupFilesAfterEnv: ['<rootDir>setupJest.ts', '@testing-library/jest-native/extend-expect'],
  preset: 'react-native',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['node_modules/(?!react-native-svg|react-native)/'],
  coverageThreshold: {
    branches: 100,
    functions: 100,
    lines: 100,
    statements: 100,
  },
};
