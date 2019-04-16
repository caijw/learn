const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
	mode: 'development',
	entry: {
		app: path.resolve(__dirname, './src/index.js') 
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/'
	},
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Development',
			 template: path.resolve(__dirname, 'src/index.html') 
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	resolve: {
	alias: {
		vue: '/Users/jingweicai/Documents/code/vue/dist/vue.js'
	}
	}
};