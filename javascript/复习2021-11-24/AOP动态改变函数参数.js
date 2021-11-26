var before = function (beforeFn, fn) {
    beforeFn.apply(this, arguments)
    return fn.apply(this, arguments)
}
var fn1 = function () {
    console.log('before function console 1')
}
var fn2 = function () {
    console.log('打印函数fn2')
}
fn2 = before(fn1, fn2)
//用AOP动态改变函数参数
var fun = function (param) {
    console.log(param)
}
Function.prototype.before = function (fn) {
    var self = this
    //必须返回一个函数才能再次执行 传参数
    return function () {
        fn.apply(this, arguments)
        self.apply(this, arguments)
    }
}
fun = fun.before(function (param) {
    param.b = 'Hello Fun'
})
fun({ a: 'fun now' })

//ajax动态获取token
var getToken = function (type, url, param) {
    param.token = 'Token'
}
var ajax = function (type, url, param) {
    console.log(param)
}
ajax = ajax.before(getToken)
ajax('get', 'http://xxx.com/userInfo', { name: 'sven' })