// const path = require('path');
const resolveApp = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge')
//导入其它配置
const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev')
//定义对象保存base配置信息
const baseConfig = {
	entry: './src/index.js',
	resolve: {
		extensions: ['.js', '.json', '.jsx'],
		alias: {
			'@': resolveApp('./src')
		}
	},
	output: {
		filename: 'js/main.js',
		path: resolveApp('./dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,//遇到引入样式文件时，返回上‘1’层给postcss重新处理
							esModule: false//为true是引入资源时候需要多一层.default调用
						}
					},
					'postcss-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: '/node_modules/',
				use: ['babel-loader']
			},
			{
				test: /\.(png|svg|gif|jpe?g)$/,
				type: 'asset',//5.x新增
				generator: {
					filename: 'imgs/[name].[hash:6][ext]',
					template: './public/index.html'
				},
				parser: {
					dataUrlCondition: {
						maxSize: 30 * 1024
					}
				}
			},
			{
				test: /\.(ttf|woff2?)$/,
				type: 'asset/resource',//file-loader
				generator: {
					filename: 'font/[name].[hash:3][ext]'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'react',
			template: './public/index.html'
		}),
	],
	performance: {
		hints: false
	}
}
module.exports = env => {
	//依据当前环境来合并配置
	const isProduction = env.production;
	const config = isProduction ? prodConfig : devConfig
	const mergeConfig = merge(baseConfig, config)
	return mergeConfig
}