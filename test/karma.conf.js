'use strict';

module.exports = function(config) {
  config.set({
    basePath: '..',

    files: [
      'bower_components/fetch/fetch.js',
      'efetch.js',
      'test/*.js'
    ],

    preprocessors: {
      'efetch.js': 'coverage'
    },

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher'
    ],

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage'
    }
  });
};