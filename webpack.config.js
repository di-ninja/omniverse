const webpack = require('webpack');
const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry:{
		'browser':['./src/omniverse.js'],
	},
	output: {
		filename: '[name].js',
		library: "omniverse",
		libraryTarget: "umd"
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
		nodeExternals(),
    ],
    devtool: 'source-map',
};
