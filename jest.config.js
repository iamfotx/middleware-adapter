module.exports = {
  roots: ['<rootDir>/packages'],
  preset: 'ts-jest',
  collectCoverageFrom: [
    'packages/*/src/**/*.mjs',
    'packages/*/src/**/*.js',
    'packages/*/src/**/*.ts',
    'packages/*/src/**/*.cjs',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js|cjs|mjs)',
    '**/?(*.)+(spec|test).+(ts|tsx|js|cjs|mjs)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/test/testSetupFile.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/(fixtures|tmp|__data__)/',
  ],
  modulePathIgnorePatterns: ['/test/*'],
}
