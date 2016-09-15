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
					watchTask: false
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

			plugin: ['tinymce/plugins/*/plugin.js'],

			languages: ['tinymce/plugins/*/langs/*.js']

		},


		uglify: {

			options: {
				beautify: {
					ascii_only: true
				}
			},

			languages: {
				src:    [
					'js/tinymce/plugins/*/langs/*.js'
				],
				expand: true,
				ext:    '.min.js'
			},

			plugins:   {
				src:    [
					'js/tinymce/plugins/*/plugin.js'
				],
				expand: true,
				ext:    '.min.js'
			}

		},

		watch: {

			files: [
				'Gruntfile.js',
				'createTemplates.js',
				'./tinymce/plugins/**/*.js'
			],

			tasks: ['eslint', 'uglify']

		}
	});

	require('load-grunt-tasks')(grunt);
	grunt.registerTask('lint', ['eslint']);
	grunt.registerTask('test', ['eslint']);
	grunt.registerTask('dev', ['eslint', 'browserSync', 'watch']);
	grunt.registerTask('default', ['lint', 'browserSync']);
};
