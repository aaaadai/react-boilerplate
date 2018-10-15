'use strict'

const restrictedGlobals = [
  'addEventListener',
  'blur',
  'close',
  'closed',
  'confirm',
  'defaultStatus',
  'defaultstatus',
  'event',
  'external',
  'find',
  'focus',
  'frameElement',
  'frames',
  'history',
  'innerHeight',
  'innerWidth',
  'length',
  'location',
  'locationbar',
  'menubar',
  'moveBy',
  'moveTo',
  'name',
  'onblur',
  'onerror',
  'onfocus',
  'onload',
  'onresize',
  'onunload',
  'open',
  'opener',
  'opera',
  'outerHeight',
  'outerWidth',
  'pageXOffset',
  'pageYOffset',
  'parent',
  'print',
  'removeEventListener',
  'resizeBy',
  'resizeTo',
  'screen',
  'screenLeft',
  'screenTop',
  'screenX',
  'screenY',
  'scroll',
  'scrollbars',
  'scrollBy',
  'scrollTo',
  'scrollX',
  'scrollY',
  'self',
  'status',
  'statusbar',
  'stop',
  'toolbar',
  'top',
]

module.exports = {
  // For detail about @mi/eslint-config-mcfe-react-app
  // http://git.n.xiaomi.com/mcfe/create-mcfe-react-app/blob/master/packages/eslint-config-mcfe-react-app/index.js
  root: true,
  //parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint-config-airbnb',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
    },
  },
  rules: {
    "no-debugger": "off",
    "no-restricted-syntax": "off",
    "no-plusplus" : "off",
    "no-underscore-dangle": "off",
    "array-callback-return": "off",
    "react/no-string-refs": "off",
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': 'off',
    'consistent-return': 'warn',
    'no-param-reassign': 'off',
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
      },
    ],
    'no-return-assign': 'off',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-shadow': 'off',
    'max-len': 'warn',
    'import/first': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/no-array-index-key': 'warn',
    'semi': ['warn', 'never'],
    'space-before-function-paren': 'off',
    'strict': ['warn', 'safe'],
    'global-require': 'warn',
    'prefer-template': 'warn',
    'quotes': [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    'no-else-return': 'warn',
    'no-console': 'off',
    'no-use-before-define': 'warn',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
    'jsx-a11y/aria-props': 'off',
    'jsx-a11y/aria-proptypes': 'off',
    'jsx-a11y/aria-role': 'off',
    'jsx-a11y/aria-unsupported-elements': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/no-access-key': 'off',
    'jsx-a11y/no-distracting-elements': 'off',
    'jsx-a11y/no-redundant-roles': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/role-has-required-aria-props': 'off',
    'jsx-a11y/role-supports-aria-props': 'off',
    'jsx-a11y/scope': 'off',
  },
}
