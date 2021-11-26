中介者模式 解决多对多强耦合，为一对多 
工厂实例化对象 PlayFactory 
中介者 PlayerDirector


Function.prototype.before = function (fn) {
    var self = this
    //必须返回一个函数才能再次执行 传参数
    return function () {
        fn.apply(this, arguments)
        self.apply(this, arguments)
    }
}

//ajax动态获取token 这里的参数是因为ajax传的参数个数，可以用arguments获取
var getToken = function (type, url, param) {
    param.token = 'Token'
}
//arguments获取
var getToken = function () {
    var param = Array.prototype.pop.call(arguments)
    param.token = 'Token'
}
var ajax = function (type, url, param) {
    console.log(param)
}
//ajax 等于返回的函数才会执行
ajax = ajax.before(getToken)
ajax('get', 'http://xxx.com/userInfo', { name: 'sven' })