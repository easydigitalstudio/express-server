const airbnbLint = require('eslint-config-airbnb');

module.exports = {
  extends: airbnbLint.extends,
  env: {
    node: true,
    mocha: true,
    browser: true,
  },
  globals: {
    isBrowser: true,
    sinon: true,
    expect: true,
    chai: true,
    axe: true,
    Promise: true,
    Set: true,
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {},
};
