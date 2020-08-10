module.exports = {
  rootDir: process.cwd(),
  roots: ['<rootDir>/packages', '<rootDir>/scripts'],
  preset: 'ts-jest',
  collectCoverageFrom: ['packages/**/*.+(ts|tsx)'],
  moduleDirectories: ['node_modules'],
  coverageReporters: ['json', 'html', 'cobertura'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/test/testSetupFile.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/(fixtures|tmp|__data__)/',
  ],
  modulePathIgnorePatterns: ['/test/*'],
}
