var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname,'build'),
    publicPath: '/build/',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({'process.env': {
      BUILD_TIME:(new Date()).getTime()
    }})
  ],
  devServer: {
    host: '0.0.0.0'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?minimize!'
      },
      {
        test: /\.scss$/,
        loader: "style!css-loader!sass"
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
