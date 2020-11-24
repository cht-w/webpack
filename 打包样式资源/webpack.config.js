/**
 * webpack.config.js 配置文件
 * 作用： 指示webpack做什么操作
 *
 * 所有的构建工具都是基于node 去运行的，都用的是commonJS
 *
 *
 *
 * loader ： 1. 下载依赖  2. 使用 （直接在配置中添加）
 * */
// 从 path 中解构一个处理 绝对路径的方法 resolve
const { resolve }  = require("path");

module.exports = {
    // 入口起点
    entry:'./src/index.js',
    // 出口终点
    output: {
        // 输出文件名
        filename:'built.js',
        // 输出路径 采用绝对路径    __dirname 是nodejs的变量，代表当前文件目录的绝对路径
        path:resolve(__dirname , 'build')
    },
    // loader 配置写在 module 中
    module:{
        // rules 中写详细的loader配置
        rules:[
            {
                // 匹配哪些文件
                test:/\.css$/ ,
                // 使用哪些loader进行处理
                use: [  // 先执行 css-loader 将 样式资源变成 js字符串， 然后执行 style-loader 创建style标签，插入到head
                    "style-loader", // 创建style标签，将js中的样式资源插入，添加到head中生效
                    "css-loader"  // 将css 文件 变成commonjs模块加载到js 中，里面的内容是样式字符串
                ]
            },
            {
                test:/\.less$/,
                // 注意这里需要下载 less 和 less-loader 才能完成打包命令
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
        ]
    },
    // plugins的配置
    plugins:[
        //详细的plugins配置
    ],
    // mode 模式
    mode: "development"
}

