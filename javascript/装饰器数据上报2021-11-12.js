//上报装饰者模式
Function.prototype.after =
    function (fn) {
        var self = this
        return function () {
            self.apply(this, arguments)
            return fn.apply(this, arguments)
        }
    }
var showLogin = function () {
    console.log('打开登录浮窗')
}
var log = function () {
    console.log('上报标签为' + this.getAttribute('tag'))
}
document.getElementById('log').onclick = showLogin.after(log)