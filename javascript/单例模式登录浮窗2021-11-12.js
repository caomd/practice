 //单例模式创建唯一登录浮窗
 var getInstance = function (fn) {
    var instance
    return function () {
        return instance || (instance = fn.apply(this, arguments))
    }
}
var createLoginLayer = function () {
    var div = document.createElement('div')
    div.innerHTML = '我是登录浮窗'
    div.style.display = 'none'
    document.body.appendChild(div)
    return div
}
var createSingletonLoginLayer = getInstance(createLoginLayer)
var login1 = createSingletonLoginLayer()
var login2 = createSingletonLoginLayer()
console.log('创建了唯一的登录的浮窗', login1 === login2)