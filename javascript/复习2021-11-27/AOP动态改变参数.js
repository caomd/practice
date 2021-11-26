Function.prototype.before = function (fn) {
    var self = this
    return function () {
        fn.apply(this, arguments)
        self.apply(this, arguments)
    }
}
var ajax = function (type, url, param) {
    console.log(param)
}
var getToken = function () {
    var param = Array.prototype.pop.call(arguments)
    param.token = 'Token'
}
ajax = ajax.before(getToken)
ajax('get', 'http://baidu.com', { a: 'hello' })