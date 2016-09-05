const path = require('path')
const processCwd = process.cwd()
const clientPath = path.join(processCwd, 'pub/client')
const publicPath = path.join(processCwd, 'pub/public')
const assetsPath = path.join(publicPath, 'assets/js')
const webpack = require('webpack')

module.exports = {
  context: processCwd,
  devtool: 'source-map',
  entry: {
    app: [
      path.join(clientPath, 'app.js')
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name].js',
    publicPath: assetsPath
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
      'react-draft-editor': processCwd // libPath
    }
  },
  module: {
    loaders: [
      /*
       *  For JSON
       */
      {
        test: /\.json$/,
        loader: 'json'
      },
      /*
       *  For JS/ES (except ...)
       */
      {
        test: /\.js?$/,
        exclude: [
          /node_modules/,
          /bower_components/
        ],
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0',
            'stage-1'
          ],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
            'transform-runtime'
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      preserveComments: false
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
}
