// fs path vm(虚拟机模块)

// fs fileSystem 文件系统
// path 操作路径的
// vm 做一个虚拟运行环境

const fs = require('fs')
// 模块中api一般包含同步和异步api
// readFileSync 同步api

// vscode会从根目录找
// node 2.core.js 会从当前目录开始找
// let r = fs.readFileSync('.gitignore', 'utf8')
// console.log(r)

// 读取文件全部采用绝对路径，因为不同环境可能不一样
const path = require('path')

// let r = path.join('a', 'b', 'c', '/') // 拼接
// let r1 = path.resolve('a', 'b', 'c') // 可以解析绝对路径，但是以根目录
// let r2 = path.resolve(__dirname, 'a', 'b', 'c', '/') // 解析完整目录
// console.log(r, r2)
// 似乎join添加一个__dirname也是同样的效果，区别在哪呢？
// join可以拼接/，resolve不行，会回到根目录下
// 所以，上面的例子可以改个写法
let r = fs.readFileSync(path.resolve(__dirname, '../.gitignore'), 'utf8')
// console.log(r)

// fs.existsSync 判断文件是否存在
let flag = fs.existsSync(path.resolve(__dirname, '../.gitignore'))
if (flag) {
    // 读取文件
}


// path.ext, path.basename, path.join, path.resolve
let ext = path.extname('a.min.js') // 获取扩展名
let basename = path.basename('a.min.js', '.js') // 获取基础名（需要指定扩展名）
// console.log(ext, basename)

let vm = require('vm')
// 如何让一个字符串执行？
// eval (有风险)
// new Function (常用，前端让一个模块执行)
// vm构建一个沙箱环境

let a = 1000
// let str = `console.log(a)`
// eval(str) // 会拿到外部的a变量1000，不合适

// let fn = new Function(`console.log(a)`)
// fn() // 这样就很干净，独立作用域

let fn = new Function('a', 'b', 'c', `console.log(a)`)
console.log(fn.toString())
// 可以给这个函数指定参数
console.log(fn(1, 2, 3))

// 通过vm，可以直接运行字符串，或者函数字符串
vm.runInThisContext('console.log("a")')
