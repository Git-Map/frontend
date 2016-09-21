var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname,'build'),
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
    }}),
    new HtmlWebpackPlugin({
      template:'./index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
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

if(process.argv.indexOf('-p') !== -1){
  console.log('Adding NODE_ENV=production');
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }));
}

module.exports = config;
