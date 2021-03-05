const path = require('path');
const WebExtPlugin = require('web-ext-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	plugins: [
		new CopyWebpackPlugin({patterns: [{
			from: '**/*',
			context: 'src',
			globOptions: {
				ignore: ['*.js']
			}
		}]}),
		new WebExtPlugin()
	],
	entry: './src/background.js',
	output: {
		filename: 'background.js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		minimize: false
	}
};