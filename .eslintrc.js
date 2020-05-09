module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['prettier', 'prettier/vue', 'eslint:recommended', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],
  parser: 'vue-eslint-parser',
  plugins: ['prettier'],
}
