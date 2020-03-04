module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  extends: ['standard', 'plugin:vue/essential'],

  plugins: ['vue'],

  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'process': true,
    'Capacitor': true,
    'chrome': true
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',
    "quotes": ["warn", "double"],
    "semi": ["warn", "always"],
    "space-before-function-paren": ["warn", "never"],
    "spaced-comment": "off",

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-unused-vars": "warn",

    "no-useless-constructor": "off",

    "vue/html-closing-bracket-newline": ["warn", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/max-attributes-per-line": ["warn", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }]
  }
}
