module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/resource.scss";'
      }
    }
  },
  lintOnSave: false
}
