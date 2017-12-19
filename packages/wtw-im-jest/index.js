const root = process.cwd();

const rootConfig = {
  // outputs coverage to a directory
  coverageDirectory: "<rootDir>/coverage",
  // clear mocks in between tests
  clearMocks: true,
  // make sure tests are found in the correct directory
  rootDir: process.cwd(),
  testResultsProcessor: "jest-teamcity-reporter",
  testMatch: ['**/__tests__/**/*.(spec|test).js']
};


module.exports = rootConfig;