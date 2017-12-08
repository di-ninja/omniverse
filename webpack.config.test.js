const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry:{
		'test/browser.dist':['./test/test.js'],
	},
	output: {
		filename: '[name].js',
	},
    module: {
		rules : [
			{
				test: /\.(js)?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
		],
    },
    externals: [
		
    ],
    devtool: 'source-map',
};
