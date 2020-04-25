let EventEmitter = require('events')
let fs = require('fs')
class ReadStream extends EventEmitter{
    constructor (path, options = {}) {
        super() // 不调super没有this
        // 1.将用户传入的参数全部放到实例上
        this.path = path
        this.flags = options.flags || 'r'
        this.mode = options.mode || 438
        this.autoClose = options.autoClose || true
        this.start = options.start || 0
        this.end = options.end
        this.highWaterMark = options.highWaterMark || 64*1024

        // 读取文件每次需要一个偏移量
        this.pos = this.start // 每次读取时的偏移量

        // 一创建流，就会open
        this.open()

        this.on('newListener', (type) => {
            if (type === 'data') {
                this.read() // 开始读取文件
            }
        })
    }
    open () {
        fs.open(this.path, this.flags, this.mode, (err, fd) => {
            if (err) {
                return this.emit('error', err)
            }
            // 文件打开后就拥有了文件描述符
            this.fd = fd
            this.emit('open', fd)
        })
    }
    read () {
        console.log(this.fd) // 因为监听是同步，但是fs.open是异步的，所以这里没有fd
        if (typeof this.fd !== 'number') {
            // 通过发布订阅的方法来解决这个异步问题，让open完再执行read
            return this.once('open', this.read)
        }
        console.log(this.fd)
        // 拿到fd后，开始读取文件了
        let buffer = Buffer.alloc(this.highWaterMark) // 声明多大的buffer
        // 有end的时候要计算一下该读几个
        let howMuchToRead = this.end ? Math.min(this.end - this.pos + 1, this.highWaterMark) : this.highWaterMark
        fs.read(
          this.fd,
          buffer,
          0,
          howMuchToRead,
          this.pos,
          (err, bytesRead) => {
            if (bytesRead) {
              this.pos += bytesRead
              this.emit('data', buffer.slice(0, bytesRead))
              this.read()
            } else {
              this.emit('end')
              this.close()
            }
          }
        )
    }
    close () {
        fs.close(this.fd, () => {
            this.emit('close')
        })
    }
}

module.exports = ReadStream