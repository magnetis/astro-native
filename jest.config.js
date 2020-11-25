module.exports = {
  setupFilesAfterEnv: ['<rootDir>setupJest.ts', '@testing-library/jest-native/extend-expect'],
  preset: 'react-native',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/components/Icons/Dashboard/**/*.{ts,tsx}',
    '!src/components/Icons/Support/**/*.{ts,tsx}',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
