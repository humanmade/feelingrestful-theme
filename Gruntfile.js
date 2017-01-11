var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

module.exports = function (grunt) {

	grunt.initConfig({

		sass: {
			dist: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'dist/main.css': 'assets/sass/style.scss',
					'dist/editor.css': 'assets/sass/editor.scss',
					'dist/login.css': 'assets/sass/login.scss'
				}
			}
		},

		webpack: {
			options: webpackConfig,
			build: {
				plugins: webpackConfig.plugins.concat(
					new webpack.optimize.DedupePlugin(),
					new webpack.optimize.UglifyJsPlugin()
				),
				output: {
					path: "dist/"
				}
			},
			"build-dev": {
				devtool: "sourcemap",
				debug: true
			},
			"watch-dev": {
				devtool: "sourcemap",
				debug: true,
				watch: true,
				keepalive: true
			}
		},

		watch: {
			sass: {
				files: ['assets/sass/**/*.scss'],
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'watch', 'webpack:watch-dev']);
	grunt.registerTask('build', ['sass', 'webpack:build']);
}
