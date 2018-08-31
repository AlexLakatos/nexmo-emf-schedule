module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
    'prefer-destructuring': 'off',
    'no-unused-vars': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
