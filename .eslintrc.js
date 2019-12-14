module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  overrides: [{
    files: [ 'examples/**/*' ],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  }],
  rules: {
    'linebreak-style': 'off',
    'no-confusing-arrow': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
  },
};