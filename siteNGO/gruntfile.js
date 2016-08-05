module.exports = function(grunt) {
grunt.initConfig({ 
    concat: {
        options: {
           separator: ';'
        },
        dist: {
          src: ['js/*.js'],
          dest: 'js/dist/script.js'
        }
      },
    uglify: {
        dist: {
          src: ['js/dist/script.js'],
          dest: 'js/dist/script.min.js'
        }
    },
    sass: {
    	dist: {
    		files: [{
    			expand: true,
    			cwd: 'styles',
    			src: ['*.scss'],
    			dest: 'styles',
    			ext: 'main.css'
    		}]
    	}
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.css'],
          dest: 'styles',
          ext: '.min.css'
        }]
      }
    },
    watch: {
    	sass: {
    		files: ['styles/*.scss'],
    		tasks: ['sass'],
    	}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'watch']);

};