// 事件模块 events 发布订阅 订阅（多个）  发布（触发n次）
// 核心模块 默认先看是不是核心模块
let EventEmitter = require('events')
let util = require('util')
// let events = new EventEmitter

function Girl() {}
// 相似写法，实例的__proto__就是指向原型对象
// Girl.prototype = new EventEmitter()
// Girl.prototype.__proto__ = EventEmitter.prototype

// es6写法
// Girl.prototype = Object.create(EventEmitter.prototype)
// 高级写法
// Object.setPrototypeOf(Girl.prototype, EventEmitter.prototype)

// node util
util.inherits(Girl, EventEmitter) // 继承原型上的属性和方法

let girl = new Girl()

girl.on('女生失恋', (data) => {
  console.log('哭' + data)
  console.log('谁让女生失恋' + data)
})
girl.on('女生失恋', (data) => {
  console.log('吃' + data)
  console.log('谁让女生失恋' + data)
})
girl.once('女生失恋', (data) => {})
girl.emit('女生失恋', '我')
// girl.off('女生失恋')


// 第三方模块（包）
// 查找策略是 默认查找node_modules文件内的同名文件，默认找的是index.js（可以通过package.json里的main修改）
// 如果当前目录下没有node_modules，就一直向上查找，一直到根目录，没有就报错
// let r = require('a')
// console.log(module.paths)

// 文件查找方式（会先找文件，先去添加.js .json）,如果找不到，再去找文件夹内的
// let r = require('./a') // 会优先去找a.js，找不到再去找a文件夹

