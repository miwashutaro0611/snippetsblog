module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
}
