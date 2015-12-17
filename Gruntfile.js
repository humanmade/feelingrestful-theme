var webpack = require( 'webpack' );
var webpackConfig = require( './webpack.config' );

module.exports = function( grunt ) {

	grunt.initConfig({

		sass: {
			dist: {
				files: {
					'dist/main.css': 'sass/main.sass'
				}
			},
			options: {
				sourceMap: true
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

		watch:  {
			sass: {
				files: ['sass/**/*.sass'],
				tasks: ['sass']
			},
			liverelaod: {
				options: { livereload: true },
				files: ['dist/main.css']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'watch', 'webpack:watch-dev' ]);
	grunt.registerTask('build', [ 'sass', 'webpack:build']);
}
