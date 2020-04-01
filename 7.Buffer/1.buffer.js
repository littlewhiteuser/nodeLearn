

// 编码的操作 一个汉字3个字节 就是24位（3*8）,转换成（4*6）

let code = Buffer.from('珠')
console.log(code) // <Buffer e7 8f a0> 3个16进制
console.log(0xe7.toString(2))
console.log(0x8f.toString(2))
console.log(0xa0.toString(2))
// 转换成2进制
// 11100111
// 10001111
// 10100000
// 串联起来，分成4*6的形式

// 111001  111000  111110  100000
// 不够8位，向前补0（所以会比以前大3分之1）
// 00111001  00111000  00111110  00100000

// 生成base64规范取值表（因为8位最大00111111最大，是63，所以是base64编码）

let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase() // 小写
str += '0123456789+/'

// 将2进制转换成十进制，再去规范表内取值
let code1 = parseInt('00111001', 2)
let code2 = parseInt('00111000', 2)
let code3 = parseInt('00111110', 2)
let code4 = parseInt('00100000', 2)
console.log(str[code1] + str[code2] + str[code3] + str[code4]) // 54+g
// 完成base64编码