const { defineConfig } = require('@vue/cli-service')
const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const path = require('path')
 
const plugins =  [new NodePolyfillPlugin()]
if (process.env.VUE_APP_TARGET === 'web') {
  plugins.push(new MonacoEditorWebpackPlugin())
}

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  productionSourceMap: false,
  devServer: {
    static: {
      directory: path.join(__dirname, 'static'),
    },
    proxy: {
      '/p-cloud': {
        target: 'http://43.142.95.160:28019',
        ws: true,
        changeOrigin: true
      }
    }
  },
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
    plugins,
  }
})
