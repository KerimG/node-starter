module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2015,
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-console": "off",
  },
};
