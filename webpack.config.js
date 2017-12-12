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
		
		'core-decorators': {
			commonjs: 'core-decorators',
			commonjs2: 'core-decorators',
		},
		'decorator-debug': {
			commonjs: 'decorator-debug',
			commonjs2: 'decorator-debug',
		},
		'decorator-performance': {
			commonjs: 'decorator-performance',
			commonjs2: 'decorator-performance',
		},
		'fast-memoize': {
			commonjs: 'fast-memoize',
			commonjs2: 'fast-memoize',
		},
		'conditional-decorator': {
			commonjs: 'conditional-decorator',
			commonjs2: 'conditional-decorator',
		},

		
    },
    devtool: 'source-map',
};
