module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0],
    'import/prefer-default-export': [0],
    'no-unused-vars': [0],
    'max-len': ['error', { code: 200 }],
    'react/jsx-props-no-spreading': [0],
    'react/react-in-jsx-scope': [0],
    'default-param-last': [0],
    'no-underscore-dangle': [0],
  },
};
