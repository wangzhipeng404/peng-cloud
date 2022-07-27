const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
 
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        fs:false,
        crypto: false,
        stream: false,
        assert: false,
        http: false,
        https: false,
        util: false,
        os: false,
        url: false
      }
    },
    plugins: [new NodePolyfillPlugin()],
  }
})
