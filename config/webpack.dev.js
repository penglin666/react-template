const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');//react 热更新插件
module.exports = {
	mode: 'development',
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public',
					globOptions: {
						ignore: ['**/index.html']//忽略配置
					}
				}
			]
		}),
		new ReactRefreshWebpackPlugin()
	],
	devServer: {
		hot: true,
		// hotOnly:true,//适用于脚手架？
		port:4000,
		compress:true,
		historyApiFallback:true
	}
}