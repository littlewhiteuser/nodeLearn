// node中可以采用同步的方式读取文件
// 异步的代码需要通过回调函数来解决

let a = require('./a.js')
console.log(a)

// 调试node代码
// 1.通过浏览器中调试node代码 node --inspect-brk xxx.js (调试第三方模块)
// 2.vscode调试
// 3.在命令行中调试（不常用）

function sum(a) {
    return function fn(b) {
        return a + b
    }
}
let fn = sum(1)
fn(2)

// 通过读取文件内容，将内容包装到一个自执行函数中，默认返回module.exports作为返回结果
// 实现了变量的私有化
// let a = function (exports, require, module, __filename, __dirname) {
//     let a = 1
//     module.exports = 'hello'
//     return module.exports
// }(exports, require, module, xxx, xx)