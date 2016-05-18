module.exports = function (grunt) {

    // setup
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			javascript: {
				src: 'mudu/static/javascript/*.js',
				dest: 'mudu/static/build/scripts.js'
			}
		},
		uglify: {
			javascript: {
				files: {
					'mudu/static/build/scripts.min.js': '<%= concat.javascript.dest %>'
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'mudu/static/build/styles.min.css': ['mudu/static/css/*.css']
				}
			}
		},
		watch: {
			javascript: {
				files: ['<%= concat.javascript.src %>'],
				tasks: ['concat', 'uglify']
			},
			combine: {
				files: ['mudu/static/css/*.css'],
				tasks: ['cssmin']
			}
		}
	});

	// load Tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// register Tasks
	grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);
};
