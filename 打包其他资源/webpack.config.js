
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
    mode:"development"
}