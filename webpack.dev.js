const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = (merge(common, {

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'development',

  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    open: true
  },

  watch: true,

  module: {
    rules: [
      {
        test: /\.scss$|\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png|eot|svg|woff|woff2|ico|ttf|wav|mp4|ogg|mov)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  }

}));