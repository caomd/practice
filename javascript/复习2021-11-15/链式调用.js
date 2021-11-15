// Function.prototype.before = (function () {
//     return function (fn) {
//         fn.apply(this, arguments)
//         return this.apply(this, arguments)
//     }
// })()
// Function.prototype.after = (function () {
//     return function (fn) {
//         return fn.apply(this, arguments)
//     }
// })()
var fn1 = function () {
    console.log('1')
}
var fn2 = function () {
    console.log(2)
    return this
}
var fn3 = function () {
    console.log(3)
}
// var fn = fn2.before(fn1).after(fn3)

//第二种函数
Function.prototype.beforeFun = function (bfn) {
    var _self = this//fn2
    return function () {
        //执行fn1
        bfn.apply(this, arguments)
        return _self.apply(this, arguments)
    }
}
Function.prototype.afterFun = function (afn) {
    var _self = this//beforeFun 返回函数
    return function () {
        var ret = _self.apply(this, arguments) //console.log(1)
        afn.apply(this, arguments) //console.log(3)
        return ret
    }
}
var fn = fn2.beforeFun(fn1).afterFun(fn3)
fn()

//AOP
// Function.prototype.before = function (beforefn) {
//     //保存原函数的引用
//     var _self = this;
//     console.log(this, 'wai')//[Function:func]
//     //返回包含了原函数和新函数的“代理”函数
//     return function () {
//         console.log(this, 'this....')//Object [globl]
//         beforefn.apply(this, arguments);//2
//         console.log(_self.apply(this, arguments), '0')//undefined
//         return _self.apply(this, arguments)
//     }
// }
// Function.prototype.after = function (afterfn) {
//     var _self = this;
//     return function () {
//         -
//             _self.apply(this, arguments);
//         afterfn.apply(this, arguments);
//     }
// }
// var func = function () {
//     console.log(1)
// }
// //链式函数从后往前执行的
// func = func.before(function () {
//     console.log(2)
// }).after(function () {
//     console.log(3)
// })
// func(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       )