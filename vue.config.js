module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/resource.scss";'
      }
    }
  }
};