const path = require('path')
const px2rem = require('postcss-plugin-px2rem')
// const vConsolePlugin = require('vconsole-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  assetsDir: 'assets',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'src': path.resolve(__dirname, './src'),
        'assets': path.resolve(__dirname, './src/assets'),
        'common': path.resolve(__dirname, './src/common'),
        'components': path.resolve(__dirname, './src/components'),
        'pages': path.resolve(__dirname, './src/pages'),
        'router': path.resolve(__dirname, './src/router')
      }
    },
    plugins: [
      // new vConsolePlugin({
      //   enable: process.env.NODE_ENV === 'development'
      // })
    ]
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            rootValue: 75,
            exclude: /(node_modules)/
          })
        ]
      }
    }
  }
}