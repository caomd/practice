// const mode = require('./common.js')
// console.log('module common', mode)
// console.log('He')
//使用手写的
require('./require')
const req = r('common.js')
console.log(req, '手写require')


console.log('Hello Node vm Script')