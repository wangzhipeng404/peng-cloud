const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
 
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  productionSourceMap: false,
  css: {
    sourceMap: false,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  configureWebpack: {
    // experiments: {
    //   topLevelAwait: true,
    // },
    externals: {
      vue: 'Vue',
    },
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
