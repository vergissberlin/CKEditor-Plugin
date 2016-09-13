/*eslint-env node */

module.exports = function (grunt) {
	var packageData = grunt.file.readJSON('package.json');

	grunt.initConfig({
		pkg: packageData,

		browserSync: {
			bsFiles: {
				src: './tinymce/plugins/**/*.js'
			},
			options: {
				server:    {
					baseDir:   './',
					watchTask: true
				},
				startPath: 'tinymce/samples/basic.html'
			}
		},

		eslint: {
			options: {
				config: '.eslintrc'
			},

			development: ['Gruntfile.js'],

			templates: ['createTemplates.js'],

			plugin: ['tinymce/plugins/*/plugin.js']

		},


		uglify: {

			options: {
				beautify: {
					ascii_only: true
				}
			},

			plugins: {
				src:    ['js/tinymce/plugins/*/plugin.js'],
				expand: true,
				ext:    '.min.js'
			}

		},

		watch: {
			files: './tinymce/plugins/**/*.js',
			tasks: ['uglify']
		}
	});

	require('load-grunt-tasks')(grunt);
	grunt.loadTasks('tools/tasks');
	grunt.registerTask('lint', ['eslint']);
	grunt.registerTask('test', ['eslint']);
	grunt.registerTask('default', ['lint', 'browserSync']);
};
