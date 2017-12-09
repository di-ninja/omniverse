const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry:{
		'browser':['./dist/omniverse.js'],
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
    externals: {
		'di-strategy': {
			commonjs: 'di-strategy',
			commonjs2: 'di-strategy',
		},
		'mixwith': {
			commonjs: 'mixwith',
			commonjs2: 'mixwith',
		},
		'interface-prototype': {
			commonjs: 'interface-prototype',
			commonjs2: 'interface-prototype',
		},
    },
    devtool: 'source-map',
};
