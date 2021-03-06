// 配置路径别名
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('_c', resolve('src//components'))
  },
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
      }
    }// 配置多个代理
  }
}
