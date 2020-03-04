module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "security"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:security/recommended"
  ],
  "rules": {
    "quotes": ["warn", "double", "avoid-escape"],
    "indent": ["warn", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": { "var": 2, "let": 2, "const": 3 },
      "MemberExpression": 1,
      "FunctionDeclaration": { "parameters": "first" },
      "FunctionExpression": { "parameters": "first" },
      "CallExpression": { "arguments": "first" },
      "ArrayExpression": "first",
      "ObjectExpression": "first",
      "ImportDeclaration": "first",
      "flatTernaryExpressions": true
    }],
    "semi": ["warn", "always"],
    "no-unused-vars": "warn",
    "no-console": "off",
    "camelcase": "warn",
    "require-atomic-updates": "off",
    "prefer-destructuring": ["warn", {
      "array": false,
      "object": true
    }, {
      "enforceForRenamedProperties": false
    }]
  }
}
