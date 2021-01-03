module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "promise", "import"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-use-before-define": [0],
    "@typescript-eslint/no-use-before-define": [1],
    "sort-imports": 0,
    "import/order": [2, { alphabetize: { order: "asc" } }],
    // HOTFIX: not found in imported namespace
    "import/namespace": 0,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
