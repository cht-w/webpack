/**
 * plugins 使用 ：  1. 下载   2， 引入  3. 使用
 *
 * */

const { resolve }  = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:"built.js",
        path:resolve(__dirname , 'build')
    },
    module:{
        // loader 配置
        rules:[]
    },
    // plugins配置
    plugins:[
        // html-webpack-plugin
        // 共能：默认会创建一个空的HTML，自动引入打包输出的所有（JS/CSS）资源
        // 如果需要有结构的HTML 文件，要在 HtmlWebpacePlugin构造函数中配置 template 如下
        new HtmlWebpackPlugin({
            // 复制 ./src/index.html  文件结构， 并自动引入 JS Css等资源
            template:'./src/index.html'
        })
    ],
    mode:"development"
}