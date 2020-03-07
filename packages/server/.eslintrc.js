module.exports = {
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
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
