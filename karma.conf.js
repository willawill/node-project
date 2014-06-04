module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../',

        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            {pattern: 'src/**/*.js', included: true},
            {pattern: 'spec/**/*.spec.js', included: true}
        ],

        port: 9876,

        colors: true,

        autoWatch: false,

        captureTimeout: 60000,

        singleRun: true
    });
};