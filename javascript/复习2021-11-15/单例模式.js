//透明模式
var CreateSingleton = (function () {
    var instance;
    var Singleton = function (name) {
        if (instance) {
            return instance
        }
        this.name = name
        return instance = this
    }
    return Singleton
})()
//测试
var singleton = new CreateSingleton('singleton')
var singleton2 = new CreateSingleton('singleton2')
console.log(singleton === singleton2)