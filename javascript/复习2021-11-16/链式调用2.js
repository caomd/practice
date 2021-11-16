Function.prototype.before = function (fn) {
    //保存原始函数
    var _self = this
    return function () {
        fn.apply(this, arguments)
        return _self.apply(this, arguments)
    }
}
Function.prototype.after = function (fn) {
    var _self = this
    return function () {
        _self.apply(this, arguments)
        return fn.apply(this, arguments)
    }
}
var fn1 = function () {
    console.log(1)
    return this
}
var fn2 = function () {
    console.log(2)
    return this
}
var fn3 = function () {
    console.log(3)
    return this
}

var fn = fn2.before(fn1).after(fn3).after(fn2)
fn()