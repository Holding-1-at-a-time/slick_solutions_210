/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 17/02/2025 - 09:59:55
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/02/2025
    * - Author          : rrome
    * - Modification    : 
**/
/**
 * Creates a Jest configuration object.
 * @param options - Options for the Jest configuration.
 * @returns A Jest configuration object.
 */
export function createJestConfig(options: nextJest.Options): Config {
  return nextJest(options, {
    // The preset is set to "ts-jest" by default.
    preset: "ts-jest",
    // The test environment is set to "jsdom" by default.
    testEnvironment: "jsdom",
    // The testMatch pattern is set to "**/?(*.)+(spec|test).ts?(x)" by default.
    testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
    // The collectCoverageFrom pattern is set to "src/**/*.{ts,tsx}" by default.
    collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
    // The coveragePathIgnorePatterns is set to ["/node_modules/"] by default.
    coveragePathIgnorePatterns: ["/node_modules/"],
    // The clearMocks option is set to true by default.
    clearMocks: true,
    // The collectCoverage option is set to true by default.
    collectCoverage: true,
    // The moduleNameMapper option is set to an empty object by default.
    moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/components/$1',
    },
    // The coverageDirectory option is set to "coverage" by default.
    coverageDirectory: "coverage",
    // The coverageProvider option is set to "v8" by default.
    coverageProvider: "v8",
    // The coverageReporters option is set to ["json", "text", "lcov", "clover"] by default.
    coverageReporters: ["json", "text", "lcov", "clover"],
    // The maxWorkers option is set to "90%" by default.
    maxWorkers: "90%",
    // The moduleFileExtensions option is set to ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"] by default.
    moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],
    // The moduleNameMapper option is set to an object with a single key-value pair by default.
    moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/components/$1',
      "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    // The runner option is set to "jest-runner" by default.
    runner: "jest-runner",
    // The testRunner option is set to "jest-circus/runner" by default.
    testRunner: "jest-circus/runner",
    // The watchman option is set to true by default.
    watchman: true,
  });
}
