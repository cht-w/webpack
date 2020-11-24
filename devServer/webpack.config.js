
const { resolve }  = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:"./src/index.js",
    output:{
        filename: "built.js",
        path: resolve(__dirname , 'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/ ,
                use:[ 'style-loader' , "css-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin( {
            template:"./src/index.html"
        })
    ],
    mode:"development",
    // 运行 命令： npx webpack-dev-server
    devServer:{
        // 指定服务器运行打包后的目录
        contentBase: resolve(__dirname , 'build'),
        // 启动 gzip 压缩
        compress:true,
        // 指定端口号
        port:3000
    }
}