const globals = require('globals');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node
      }
    },
    rules: {
      // ─── POSSIBLE ERRORS ──────────────────────────────────────
      'no-console': 'warn', // warn on console.log (remove before production)
      'no-debugger': 'error', // no debugger statements
      'no-duplicate-case': 'error', // no duplicate case in switch
      'no-empty': 'warn', // no empty block statements
      'no-extra-semi': 'error', // no unnecessary semicolons
      'no-unreachable': 'error', // no code after return/throw
      'no-unused-vars': [
        'warn',
        {
          // warn on unused variables
          argsIgnorePattern: '^_' // ignore args starting with _
        }
      ],

      // ─── BEST PRACTICES ───────────────────────────────────────
      eqeqeq: ['error', 'always'], // always use === instead of ==
      'no-var': 'error', // ban var, use let/const
      'prefer-const': 'warn', // use const when never reassigned
      'no-multi-spaces': 'error', // no multiple spaces
      'no-return-assign': 'error', // no assignment in return
      'no-self-compare': 'error', // no comparing variable to itself
      'no-useless-return': 'warn', // no unnecessary return
      'default-case': 'warn', // require default in switch
      curly: ['error', 'all'], // always use {} for blocks
      'dot-notation': 'warn', // use dot notation (obj.a not obj["a"])
      'no-else-return': 'warn', // no else after return
      'no-empty-function': 'warn', // no empty functions

      // ─── VARIABLES ────────────────────────────────────────────
      'no-use-before-define': [
        'error',
        {
          // no using variables before defining
          functions: false, // allow hoisted functions
          classes: true
        }
      ],
      'no-shadow': 'warn', // no variable shadowing outer scope

      // ─── CODE STYLE ───────────────────────────────────────────
      semi: ['error', 'always'], // always require semicolons
      quotes: [
        'error',
        'single',
        {
          // use single quotes
          avoidEscape: true // allow double quotes to avoid escaping
        }
      ],
      indent: [
        'error',
        2,
        {
          // 2-space indentation
          SwitchCase: 1 // indent switch cases
        }
      ],
      'comma-dangle': ['error', 'never'], // no trailing commas
      'comma-spacing': [
        'error',
        {
          // space after comma
          before: false,
          after: true
        }
      ],
      'key-spacing': [
        'error',
        {
          // space after colon in objects
          beforeColon: false,
          afterColon: true
        }
      ],
      'space-before-blocks': 'error', // space before { block }
      'space-infix-ops': 'error', // space around operators (a + b)
      'keyword-spacing': [
        'error',
        {
          // space before/after keywords
          before: true,
          after: true
        }
      ],
      'space-before-function-paren': [
        'error',
        {
          // space before function parenthesis
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'object-curly-spacing': ['error', 'always'], // spaces inside { object }
      'array-bracket-spacing': ['error', 'never'], // no spaces inside [array]
      'eol-last': ['error', 'always'], // newline at end of file
      'no-trailing-spaces': 'error', // no trailing whitespace
      'no-multiple-empty-lines': [
        'error',
        {
          // max empty lines
          max: 2,
          maxEOF: 1
        }
      ],

      // ─── ES6+ ─────────────────────────────────────────────────
      'arrow-spacing': [
        'error',
        {
          // space around arrow =>
          before: true,
          after: true
        }
      ],
      'arrow-body-style': ['warn', 'as-needed'], // omit {} when arrow fn returns directly
      'prefer-arrow-callback': 'warn', // use arrow functions as callbacks
      'prefer-template': 'warn', // use template literals instead of concatenation
      'object-shorthand': 'warn', // use shorthand { name } not { name: name }
      'no-duplicate-imports': 'error', // no importing same module twice
      'prefer-destructuring': [
        'warn',
        {
          // prefer destructuring
          array: false,
          object: true
        }
      ]
    }
  }
];
