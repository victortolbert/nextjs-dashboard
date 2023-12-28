const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    formatters: {
      css: true,
      html: true,
      toml: 'dprint',
      markdown: 'prettier',
    },
    rules: {
      'no-alert': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
  {
    ignores: [
      'README.md',
      'scripts',
    ],
  },
)
