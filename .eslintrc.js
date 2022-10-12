module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'eslint-plugin-import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      2,
      {
        groups: [
          '/^react/',
          'module',
          '/^~/',
          ['parent', 'sibling', 'index'],
          '/.styles$/',
        ],
        newlinesBetween: 'always',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-misused-promises': 0,
  },
};
