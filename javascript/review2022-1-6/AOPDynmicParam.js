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
var appendParam = function (type, url, param) {
    param.token = 'Token'
}
ajax = ajax.before(appendParam)
ajax('post', 'www.baicu.com', { name: 'ajax' })