module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageProvider: "v8",
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],
  testEnvironment: "node",
  transformIgnorePatterns: [
    "/node_modules/",
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      compiler: "ttypescript",
      tsconfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["js", "ts"],
  testMatch: [
    "**/tests/**/*.test.ts"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
};
