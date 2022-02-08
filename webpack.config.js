const path=require('path');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {DefinePlugin}=require('webpack');
const CopyWebpackPlugin=require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin =require('@pmmmwh/react-refresh-webpack-plugin');//react 热更新插件
module.exports={
  mode:'development',
  entry:'./src/index.js',
  resolve:{
    extensions:['.js','.json','.jsx'],
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  output:{
    filename:'js/main.js',
    path:path.resolve(__dirname,'dist')
  },
  target:'web',//屏蔽浏览器兼容文件配置
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              importLoaders:1,//遇到引入样式文件时，返回上‘1’层给postcss重新处理
              esModule:false//为true是引入资源时候需要多一层.default调用
            }
          },
          'postcss-loader'
        ]
      },
      {
        test:/\.less$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.(js|jsx)$/,
        exclude:'/node_modules/',
        use:['babel-loader']
      },
      {
        test:/\.(png|svg|gif|jpe?g)$/,
        type:'asset',//5.x新增
        generator:{
          filename:'imgs/[name].[hash:6][ext]',
          template:'./public/index.html'
        },
        parser:{
          dataUrlCondition:{
            maxSize:30*1024
          }
        }
      },
      {
        test:/\.(ttf|woff2?)$/,
        type:'asset/resource',//file-loader
        generator:{
          filename:'font/[name].[hash:3][ext]'
        }
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'react',
      template:'./public/index.html'
    }),
    new DefinePlugin({
      BASE_URL:"'./'"
    }),
    new CopyWebpackPlugin({
      patterns:[
        {
          from:'public',
          globOptions:{
            ignore:['**/index.html']//忽略配置
          }
        }
      ]
    }),
    new ReactRefreshWebpackPlugin()
  ],
  devServer:{
    hot:true
  }
}