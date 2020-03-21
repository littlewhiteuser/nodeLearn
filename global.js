// console.log(this) // this不是global
// 模块化的概念，node为了实现模块化，给每个文件都包装成了一个function，改变了this
// 在node环境中this还是global
// console.log(this === module.exports) // true

// console.log(process) // 进程
// console.log(process.platform) // 进程运行的平台 win darwin(mac)
// console.log(process.argv) // 当前进程运行时所带的参数 默认是数组参数前两个固定的
// 1. 当前node的执行命令文件
// 2. 当前执行的文件是谁
// node global.js --port 3000 --config xxh
// 解析用户传递参数，将参数放到第三位开始
// let r = process.argv.slice(2).reduce((memo, current, index, arr) => {
//     if (current.startsWith('--')) {
//         memo[current.slice(2)] = arr[index + 1]
//     }
//     return memo
// }, {})
// console.log(r)
// 通过参数解析，来写一些工具库
// commander (TJ) yargs (webpack)
// const program = require('commander')
// program.name('name')
// program.usage('global.js')
// program.version('1.0.0') // 添加版本
// program.option('-p, --port <v>', 'please set your port') // 端口号短写-p，全写--p，<v>预留变量位，'描述'
// program.option('-c, --config <v>', 'please set your config') // -c配置
// // 也可以创建命令，比如vue create xxx 创建项目
// program.command('create').action(() => { // 运行时会执行此方法
//     console.log('创建项目')
// })
// // node事件驱动，可以监听
// program.on('--help', function () {
//     console.log('\r\nRun Command')
//     console.log('\r\n  node global -p 3000')
// })
// let r = program.parse(process.argv) // 解析参数会有返回值
// console.log(r)

// -------------------------------------------------

// 当前我在哪运行的命令（code runner插件默认找根目录下），webpack找配置文件也靠的这个
// console.log(process.cwd()) // current working directory 当前进程执行时的工作目录 http-server

// console.log(process.env) // 当前进程的环境变量
// 在当前命令行窗口下设置环境变量 window用set a=1, mac用export a=1
// cross-env包，可以为各环境设置环境变量，cross-env env=development && node xxx

// console.log(process.nextTick)
// node的时间环

// Buffer 是node中为了实现二进制操作，提供的类 
