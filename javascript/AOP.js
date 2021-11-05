//AOP
Function.prototype.before = function (beforefn) {
    //保存原函数的引用
    var _self = this;
    console.log(this, 'wai')//[Function:func]
    //返回包含了原函数和新函数的“代理”函数
    return function () {
        // console.log(this, 'this....')//Object [globl]
        beforefn.apply(this, arguments);
        // console.log(_self.apply(this, arguments), '0')//undefined
        return _self.apply(this, arguments)
    }
}
Function.prototype.after = function (afterfn) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        // console.log('ret...', ret)//undefined
        return ret
    }
}
var func = function () {
    console.log(1)
}
func = func.before(function () {
    console.log(2)
}).after(function () {
    console.log(3)
})
func()
//2 1 3




