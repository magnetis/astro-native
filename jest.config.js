module.exports = {
  setupFilesAfterEnv: ['<rootDir>setupJest.ts', '@testing-library/jest-native/extend-expect'],
  preset: 'react-native',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['node_modules/(?!react-native-svg|react-native)/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/components/Icons/Dashboard/**/*.{ts,tsx}',
    '!src/components/Icons/Support/**/*.{ts,tsx}',
  ],
  coverageThreshold: {
    branches: 100,
    functions: 100,
    lines: 100,
    statements: 100,
  },
};
