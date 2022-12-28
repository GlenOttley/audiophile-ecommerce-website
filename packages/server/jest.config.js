/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'],
  verbose: true,
  forceExit: true,
  setupFilesAfterEnv: ['<rootDir>/src/utils/setupFile.ts'],
  maxWorkers: 4,
  // clearMocks: true,
  // resetMocks: true,
  // restoreMocks: true,
}
