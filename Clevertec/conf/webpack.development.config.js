import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.js').merge({
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    __dirname + '/../src/index.js'
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
        },
        { loader: 'postcss-loader' },
      ]
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "react-svg-loader",
          options: {
            jsx: true // true outputs JSX tags
          }
        }
      ]
    }
  ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});