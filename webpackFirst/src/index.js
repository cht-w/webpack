/**
 * index.src 是 webbpack 的入口文件，也即是entry
 *
 * 运行命令 ：
 *           开发环境执行:  webpack ./src/index.js -o ./build/built.js --mode=development
 *           webpack 会以 ./src/index.js 为入口文件开始打包 ，打包后输出到 ./build/built.js 整体打包环境是 开发环境
 *           生产环境执行： webpack ./src/index.js -o ./build/built.js --mode=production
 *
 *  webpack 能够打包js资源 json资源
 *
 * */
import data from './data.json';
console.log(data);
function add(x,y) {
    return x+y;
}
console.log(add(1,2));