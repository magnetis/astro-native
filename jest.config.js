module.exports = {
  setupFilesAfterEnv: ['<rootDir>setup-tests.ts'],
  preset: 'react-native',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx'],
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native-svg|react-native)/',
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  coverageThreshold: {
    branches: 100,
    functions: 100,
    lines: 100,
    statements: 100,
  },
};
