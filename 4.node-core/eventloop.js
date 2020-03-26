// console.log(process.nextTick) // node中实现的微任务，优先级比promise还要高
// node的事件环，在node v10版本后，统一执行效果和浏览器一致
process.nextTick(() => {
    console.log(1)
    process.nextTick(() => {
      console.log(2)
      process.nextTick(() => {
        console.log(3)
      })
    })
})
Promise.resolve().then(data => {
    console.log('promise')
})
// nextTick和promise是两个不同的队列，nextTick的优先级更高，会先清空nextTick队列
// 1 2 3 promise

// 如果setImmediate 和setTimeout 在默认环境下执行会受性能影响
// setImmediate(() => { // 立即
//     console.log('setImmediate'); // node中的宏任务
// });
// setTimeout(() => {
//     console.log('setTimeout')
// }, 0);

let fs = require('fs')

fs.readFile('.gitignore', 'utf8', () => {
  setImmediate(() => {
    // 立即
    console.log('setImmediate1') // node中的宏任务
  })
  setTimeout(() => {
    console.log('setTimeout5')
  }, 0)
  setImmediate(() => {
    // 立即
    console.log('setImmediate2') // node中的宏任务
  })
})
// 默认当主代码执行完毕后会进入node的事件环
// 1.会先看当前定时器是否到达时间，如果到达时间会执行定时器的回调
// 2.poll阶段会执行i/o操作的回调，如果没有i/o，会看一下有没有setImmediate，如果有就进入check阶段
// 3.如果没有，循环检查是否有定时器，如果没有定时器也没有i/o操作，则结束循环
// 4.如果有定时器，到达时间后返回timer阶段执行回调
// 5.每一个宏任务执行完毕都会清空微任务



// Buffer 是node中为了实现二进制操作，提供的类
