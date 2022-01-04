/*
 * @Author: caomd 
 * @Date: 2022-01-04 15:43:19 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-04 16:16:22
 */
Function.prototype.before = function (fn) {
    var self = this
    return function () {
        fn.apply(this, arguments)
        self.apply(this, arguments)
    }
}
Function.prototype.after = function (fn) {
    var self = this
    self.apply(this, arguments)
    return fn.apply(this, arguments)
}
var fn1 = function () {
    console.log('fn1')
}
var fn2 = function () {
    console.log('fn2')
}
var fn3 = function () {
    console.log('fn3')
}
// fn2.before(fn1).after(fn3)
var ajax = function (type, url, param) {
    console.log(param)
}
var ajax = ajax.before(function (type, url, param) {
    return param.token = 'Token'
})
ajax('get', 'http://www.baidu.com', { name: 'ajax' })
