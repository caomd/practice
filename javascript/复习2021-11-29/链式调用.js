/*
 * @Author: caomd 
 * @Date: 2021-11-29 18:40:19 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-29 18:50:57
 */
Function.prototype.before = function (beforeFn) {
    var self = this
    //优先执行befor函数
    beforeFn.apply(this, arguments)
    return function () {
        self.apply(this, arguments)
    }
}
Function.prototype.after = function (afterFn) {
    var self = this
    self.apply(this, arguments)
    return afterFn.apply(this, arguments)
}
var fn1 = function () {
    console.log(1)
}
var fn2 = function () {
    console.log(2)
}
var fn3 = function () {
    console.log(3)
}
var fn4 = function () {
    console.log(4)
}
fn2.before(fn1).after(fn3)
fn2.after(fn4)