module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    port: 8383, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: 'http://localhost:8088' // 配置跨域处理,只有一个代理
    proxy: {
      '/user': {
        target: 'http://localhost:8088', // 后端接口地址
        ws: true,
        changeOrigin: true, // 是否允许跨域
        pathRewrite: {
          '^/api': ''
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }// 配置多个代理
  }
}
