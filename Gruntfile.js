module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project confg
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/print.css': ['src/css/print.css'],
          'dist/views/css/bootstrap-grid.css': ['src/views/css/bootstrap-grid.css']
        }
      }
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 5
        },
        files: [{
          expand: true,                 //Enable dynamic expansion
          cwd: 'src/img',               // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],  // Actual patterns to match
          dest: 'dist/img'              // Destination path prefix
        }, {
          expand: true,
          cwd: 'src/views/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/views/images'
        }],
      }
    },





  });

   grunt.registerTask('default',['cssmin', 'htmlmin', 'imagemin', 'jshint', 'uglify']);
};