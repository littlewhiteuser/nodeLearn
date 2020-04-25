// 流 内部是发布订阅，基于事件的，events模块
let fs = require('fs')
let ReadStream = require('./ReadStream')
// let rs = fs.createReadStream('./name.txt',{
let rs = new ReadStream('./name.txt',{
    flags: 'r', // fs.open
    encoding: null, // 默认是buffer
    mode: 0o666, // fs.open
    autoClose: true, // fs.close
    start: 0,
    end: 4,
    highWaterMark: 2 // 表示每次读出来几个，默认是一次性读出64K
})
rs.on('open', (fd) => {
    console.log('打开了', fd)
})
// 默认可读流是暂停模式的，没监听data事件前不执行
// 监听了data事件后，就变成流动模式，一直到执行完
let arr = []
rs.on('data', (data) => {
    console.log(data)
    arr.push(data)
})
rs.on('end', () => {
    console.log(Buffer.concat(arr).toString())
})
rs.on('close', () => {
    console.log('关闭了')
})
rs.on('error', (err) => {
    console.log(err)
})
// 文件流独有的：open close
// data end
// 数据拼接要使用Buffer.concat()