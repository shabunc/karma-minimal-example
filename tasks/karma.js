module.exports = function(grunt) {

 grunt.loadNpmTasks('grunt-karma');

 grunt.config('karma', {
    options: {
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],

        client: {
            captureConsole: true,
            //args: ['--grep', 'TEST A'],
        },

        // list of files / patterns to load in the browser
        files: [
          { pattern: 'test/specs/**/*.spec.js', included: true}
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,



        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'Yandex'],

    },
    run: {
        options: {
            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: true
        }
    }
 })

}
