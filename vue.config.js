module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/styles.scss";'
      }
    }
  },
  // publicPath: './' // если запустить лайв сервер
  publicPath: '.',  // если просто открыть index.html
};
