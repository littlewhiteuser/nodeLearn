let length = 10
function fn() {
    console.log(this.length)
}
let obj = {
    length: 5,
    method(fn){
        fn()
        arguments[0]()
    }
}
obj.method(fn, 1)

// this.property length undefined

// undefined 2