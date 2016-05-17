module.exports = function (grunt) {

    // setup
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			javascript: {
				src: 'mudu/static/javascript/*.js',
				dest: 'mudu/static/build/scripts.js'
			},
			css: {
				src: 'mudu/static/css/*.css',
				dest: 'mudu/static/build/styles.css'
			}
		},
		uglify: {
			javascript: {
				files: {
					'mudu/static/build/scripts.js': '<%= concat.javascript.dest %>'
				}
			},
			css: {
				files: {
					'mudu/static/build/styles.css': '<%= concat.css.dest %>'
				}
			}
		},
		watch: {
			javascript: {
				files: ['<%= concat.javascript.src %>'],
				tasks: ['concat', 'uglify']
			},
			css: {
				files: ['<%= concat.css.src %>'],
				tasks: ['concat', 'uglify']
			}
		}
	});

	// load Tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// register Tasks
	grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};
