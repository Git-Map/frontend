var webpackConfig = require('./webpack.config');
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],


    files: [
      './src/**/*.spec.js'
    ],

    webpack:{
      devtool: 'inline-source-map',
      module: {
        loaders : [
          {
            test : /\.js/,
            exclude: /node_modules/,
            loader : 'babel'
          }
        ]
      }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    preprocessors: {
      './src/**/*.spec.js': ['webpack', 'sourcemap']
    },


    reporters: ['story'],


    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true,

    concurrency: Infinity
  })
}
