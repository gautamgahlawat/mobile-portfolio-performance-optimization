module.exports = function(grunt) {

  //load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project confg tasks
  grunt.initConfig({

    //Read the package.json file
    pkg: grunt.file.readJSON('package.json'),

    // Minify the CSS files
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

    // Optimize the images in the img/ folder
    // imagemin: {
    //   dist: {
    //     options: {
    //       optimizationLevel: 5
    //     },
    //     files: [{
    //       expand: true,                 //Enable dynamic expansion
    //       cwd: 'src/img',               // Src matches are relative to this path
    //       src: ['**/*.{png,jpg,gif}'],  // Actual patterns to match
    //       dest: 'dist/img'              // Destination path prefix
    //     }, {
    //       expand: true,
    //       cwd: 'src/views/images',
    //       src: ['**/*.{png,jpg,gif}'],
    //       dest: 'dist/views/images'
    //     }],
    //   }
    // },

    // Minify the javascript file
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/perfmatters.js': ['src/js/perfmatters.js'],
          'dist/views/js/main.js': ['src/views/js/main.js']
        }
      }
    },

    // Minify html
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'src/index.html',
          'dist/project-2048.html': 'src/project-2048.html',
          'dist/project-mobile.html': 'src/project-mobile.html',
          'dist/project-webperf.html': 'src/project-webperf.html',
          'dist/views/pizza.html': 'src/views/pizza.html',
        }
      },
      dev: {
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },                                       // Another target
        files: {
          'dist/index.html': 'src/index.html',
          'dist/project-2048.html': 'src/project-2048.html',
          'dist/project-mobile.html': 'src/project-mobile.html',
          'dist/project-webperf.html': 'src/project-webperf.html',
          'dist/views/pizza.html': 'src/views/pizza.html',
        }
      }
    },

    // Inline the CSS into the index.html file
    inlinecss: {
      main: {
        options: {},
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },

    // Run a clean up function so images don't get recursively optimized
    clean: {
      build: {
        src: 'dist/img/'
      }
    }

  });

  // Tell grunt to use the plugins
    // grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-inline-css');
    // grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Register the tasks as default actions for the 'grunt' command
  grunt.registerTask('default',['clean', 'cssmin', 'htmlmin', 'inlinecss', 'uglify']);
};