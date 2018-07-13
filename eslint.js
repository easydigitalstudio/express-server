const airbnbLint = require('eslint-config-airbnb');

module.exports = {
  extends: airbnbLint.extends,
  env: {
    node: true,
    mocha: true,
    browser: true
  },
  globals: {
    isBrowser: true,
    sinon: true,
    expect: true,
    chai: true,
    axe: true,
    Promise: true,
    Set: true
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    curly: [0, 'multi-line', 'consistent'],
    'max-len': 0,
    'no-console': 2,
    'no-unused-expressions': 0,
    'new-cap': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-wrap-multilines': 2,
    'react/jsx-filename-extension': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': 0,
    'react/forbid-prop-types': [2, { 'forbid': ['any'] }],
    'eol-last': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    semi: 0,
    'react/require-default-props': 1,
    'comma-dangle': 0,
    'quote-props': 0,
    'arrow-body-style': 0,
    'jsx-a11y/no-static-element-interactions': 0
  }
};