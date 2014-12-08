'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    jshint: {
      all: ['server.js', 'Gruntfile.js', 'test/api/*.js', 'lib/*.js',
      'app/**/*.js', 'routes/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['server.js', 'Gruntfile.js', 'test/api/*.js', 'lib/*.js',
      'app/**/*.js', 'routes/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/**/*.js'],
      options: {
        timeout: 3000
      }
    },

    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', 'css/**/*.css'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/client/**/*.js'],
        dest:'test/test_bundle.js',
        options:{
          transform: ['debowerify']
        }
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('build:test', ['browserify:test']);
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('default', ['test']);
};
