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

// Buffer 是node中为了实现二进制操作，提供的类
