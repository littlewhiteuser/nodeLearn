// fs模块包含着 文件操作的api 同时也包含了 文件夹操作的api

const fs = require('fs')
const path = require('path')
// 创建目录 必须要先有父级 再有子级
// console.log(path.resolve('a/b/c'))
// 同步方法
function mkdirSync (path) {
    let arr = path.split('/')
    for (let i =0; i < arr.length; i++) {
        // 一级一级向下创建
        let p = arr.slice(0, i + 1).join('/')
        try {
            // 检测是否已存在，exitsSync已经废弃
            fs.accessSync(p)
        } catch (error) {
            fs.mkdirSync(p)
        }
    }
}

function mkdir (path, callback) {
    let arr = path.split('/')
    // 异步回调，像co库，递归的创建next方法
    let index = 0

    function next() {
        // 递归要有终止条件
        if (index === arr.length) return callback()
        let p = arr.slice(0, index + 1)
        fs.access(p, (err) => {
            index++
            if (err) {
                fs.mkdir(p, next)
            } else {
                next()
            }
        })
    }
    // 先执行一次
    next()
}
// mkdirSync('a/b/c/d/e/f/g') //windows会自动转换成\，mac还是/
// 用\要先转义，a\\b\\c

// 删除目录
// function rmdirSync(p) {
//     let dirs = fs.readdirSync(p)
//     dirs = dirs.map(dir => path.join(p, dir))
//     dirs.forEach(dir => {
//         let statObj = fs.statSync(dir)
//         if (statObj.isDirectory()) {
//             fs.rmdirSync(dir)
//         } else {
//             fs.unlinkSync(dir)
//         }
//     })
//     // 子目录遍历结束后删除
//     fs.rmdirSync(p)
// }

// 删除目录
// 深度遍历
function rmdirSync(p) {
    try {
        let statObj = fs.statSync(p)
        if (statObj.isDirectory()) {
            let dirs = fs.readdirSync(p)
            dirs.forEach(dir => {
                // 因为删除的是'a/b/c'这种形式的，所以要拼凑目录
                let current = path.join(p, dir)
                // 递归删除
                rmdirSync(current)
            })
            fs.rmdirSync(p)
        } else {
            fs.unlinkSync(p) // 是文件直接删除
        }
    } catch (error) {
        console.log(error)
    }
}

// 广度遍历
function wideSync (p) {
    let arr = [p] // 先将顶部放入数组
    let index = 0
    let current // 获取当前指针指向谁
    while (current = arr[index++]) {
        let statObj = fs.statSync(current)
        if (statObj.isDirectory()) {
            let dirs = fs.readdirSync(current)
            dirs = dirs.map(dir => path.join(current, dir))
            arr = [...arr, ...dirs]
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        let dir = arr[i];
        let statObj = fs.statSync(dir)
        if (statObj.isDirectory()) {
            fs.rmdirSync(dir)
        } else {
            fs.unlinkSync(dir)
        }
    }
}

rmdirSync('q')