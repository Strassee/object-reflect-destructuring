module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      files: ['**/*/*.test.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': ['error', "BinaryExpression[operator='in']"],
    'object-curly-newline': ['error', {
      ImportDeclaration: 'never',
    }],
  },
};
