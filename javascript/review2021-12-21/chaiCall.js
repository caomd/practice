/*
 * @Author: caomd
 * @Date: 2021-12-21 17:57:50
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 18:04:55
 */

//chainCall.js
Function.prototype.before = function (fn) {
    var self = this
    return function () {
        fn.apply(this, arguments)
        self.apply(this, arguments)
        return self
    }
}
Function.prototype.after = function (fn) {
    var self = this
    return function () {
        self.apply(this, arguments)
        fn.apply(this.arguments)
        return self
    }
}
var ChainCall = function () {
    console.log('chain Call')
}
var before = function () {
    console.log('before fun')
}
var after = function () {
    console.log('after fun')
}
var chain = ChainCall.before(before).after(after)
chain()