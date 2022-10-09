/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // transform: {
  //   '^.+\\.ts?$': 'ts-jest',
  // },
  // transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['**/**/*.test.ts'],
  verbose: true,
  forceExit: true,
  globalSetup: './src/services/globalSetup.ts',
  globalTeardown: './src/services/globalTeardown.ts',
  setupFilesAfterEnv: ['./src/services/setupFile.ts'],
  maxWorkers: 4,
  // clearMocks: true,
  // resetMocks: true,
  // restoreMocks: true,
}
