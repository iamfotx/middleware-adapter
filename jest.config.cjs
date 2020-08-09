module.exports = {
  roots: ['<rootDir>/packages'],
  preset: 'ts-jest',
  collectCoverageFrom: [
    'packages/*/src/**/*.mjs',
    'packages/*/src/**/*.js',
    'packages/*/src/**/*.ts',
    'packages/*/src/**/*.cjs',
  ],
  moduleDirectories: ['node_modules'],
  coverageReporters: ['json', 'html', 'cobertura'],
  moduleFileExtensions: ['ts', 'js', 'cjs', 'mjs'],
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
