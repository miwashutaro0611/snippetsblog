module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/resource.scss";'
      }
    }
  },
  lintOnSave: false
}
