module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-no-unsupported-browser-features',
    'stylelint-prettier',
  ],
  extends: ['stylelint-scss', 'stylelint-config-recess-order'],
  rules: {
    'prettier/prettier': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'font-family-no-missing-generic-family-keyword': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-trailing-semicolon': 'always',
    'selector-pseudo-element-colon-notation': 'double',
  },
}
