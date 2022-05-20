module.exports = {
  setupFilesAfterEnv: ['<rootDir>setupJest.ts'],
  preset: 'react-native',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@magnetis/astro-tokens)/'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/components/**/{index,types}.{ts,tsx}',
    '!src/components/Icons/Dashboard/**/*.{ts,tsx}',
    '!src/components/Icons/Support/**/*.{ts,tsx}',
    '!src/components/Icons/Arrows/**/*.{ts,tsx}',
    '!src/components/Icons/Informations/**/*.{ts,tsx}',
    '!src/components/Icons/Essencials/**/*.{ts,tsx}',
    '!src/components/Icons/Documents/**/*.{ts,tsx}',
    '!src/components/Icons/Communications/**/*.{ts,tsx}',
    '!src/components/Icons/Finances/**/*.{ts,tsx}',
    '!src/components/Icons/Security/**/*.{ts,tsx}',
    '!src/components/**/stories/**/*',
  ],
  coverageReporters: ['lcov', 'text', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
