// let length = 10
// function fn() {
//     console.log(this.length)
// }
// let obj = {
//     length: 5,
//     method(fn){
//         fn()
//         arguments[0]()
//     }
// }
// obj.method(fn, 1)

// this.property length undefined

// undefined 2

function test() {
    let arr = [3, 2, 1]
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        const res = fetch(item)
        console.log(res)
    }
    console.log('end')
}

function fetch(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x)
        }, x * 500);
    })
}

test()