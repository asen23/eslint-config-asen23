module.exports = {
  extends: [
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "es5",
        "useTabs": false,
        "bracketSpacing": true,
        "semi": true,
        "endOfLine": "lf",
      },
    ],
  },
}
