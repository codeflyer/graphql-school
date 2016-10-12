var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
module.exports = {
  entry: './client/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    proxy: {
      '/graphql': {
        target: 'http://localhost:4000',
        secure: false
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'client', 'index.html'), to: path.join(__dirname, 'dist') },
      { from: path.join(__dirname, 'client', 'graphiql.html'), to: path.join(__dirname, 'dist') }
    ])
  ]
};