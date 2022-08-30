const { defineConfig } = require('@vue/cli-service')
const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
 
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  css: {
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
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] }
        }
      ]
    },
    externals: {
      vue: 'Vue',
    },
    resolve: {
      extensions: ['.ts', '.js'],
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
    plugins: [new NodePolyfillPlugin(), new MonacoEditorWebpackPlugin()],
  }
})
