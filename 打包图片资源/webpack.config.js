
const { resolve }  = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:"./src/index.js" , 
    output:{
        filename:"built.js",
        path: resolve(__dirname , 'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // 使用多个loader 用use 写成数组的形式
                use:[ "style-loader",  "css-loader"]
            },
            // 配置图片资源
            {
                test:/\.(png|jpg|gif)/,
                // 使用一个loader 直接写loader 就可以
                // 需要下载两个包 ， url-loader  file-loader
                loader:"url-loader",
                options:{
                    // 图片大小小于8kb ，就会被base64处理
                    limit: 8 * 1024 ,
                    // 重命名打包后的图片文件名称
                    // [hash:10] : 取hash值前 10位  [ext] : 取原文件后缀名
                    name:'[hash:10].[ext]'
                }
            },
            // 处理 html 文件的 img 图片
            {
                test:/\.html$/,
                // 处理html文件的img图片，（负责引入img，从而能够被url-loader进行处理）
                loader:"html-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ],
    mode:"development"
}