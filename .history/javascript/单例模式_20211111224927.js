//单例模式 全局访问 唯一实例
var Singleton = function (name) {
    this.name = name;
    this.instance = null;
}
Singleton.prototype.getName = function () {
    return this.name
}
Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}
var a = Singleton.getInstance('sven1')
var b = Singleton.getInstance('sven2')

console.log(a === b)

//或者
var Singleton = function (name) {
    this.name = name;
};
Singleton.prototype.getName = function () {
    return this.name;
}
Singleton.getInstance = (function () {
    var instance = null;
    return function (name) {
        if (!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})()
var c = Singleton.getInstance('sven3')
var d = Singleton.getInstance('sven4')

console.log(c === d)//true

//透明单例模式
var CreateDiv = (function () {
    var instance;
    var CreateDiv = function (html) {
        if (instance) {
            return instance;
        }
        this.html = html;
        this.init();
        return instance = this;
    };
    CreateDiv.prototype.init = function () {
        var div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div)
    };
    return CreateDiv;
})();

var e = new CreateDiv('sven1');
var f = new CreateDiv('sven2');
console.log(e === f)//true

//透明单例模式 通过new 创建实例对象
//利用自执行匿名函数和闭包
var CreateSingleton = (
    function () {
        var instance;
        //构造函数
        var Singleton = function (name) {
            if (instance) {
                return instance
            }
            this.name = name;
            return instance = this
        }
        return Singleton
    }
)()

var news1 = new CreateSingleton('newsingle1')
var news2 = new CreateSingleton('newsingle2')
console.log(news1 === news2)//true

//单例模式
var Singleton = function (name) {
    this.name = name
}
Singleton.prototype.getName = function () {
    return this.name
}
Singleton.getInstance = (function () {
    var instance;
    return function (name) {
        if (instance) {
            return instance
        }
        instance = new Singleton(name)
    }
})()

var s1 = Singleton.getInstance('single1')
var s2 = Singleton.getInstance('single2')

//代理单例模式
var CreateDiv = function (html) {
    this.html = html;
    this.init();
}
CreateDiv.prototype.init = function () {
    var div = document.createElement('div')
    div.innerHTML = this.html;
    document.body.appendChild(div)
}
//引入代理类ProxySingletonCreateDiv 最终new的实例对象 返回一个构造函数
var ProxySingletonCreateDiv = (
    function () {
        var instance;
        return function (html) {
            if (!instance) {
                Instance = new CreateDiv(html)
            }
            return instance;
        }
    }
)()

var a = new ProxySingletonCreateDiv('sven1')
var b = new ProxySingletonCreateDiv('sven2')
console.log(a === b)//true

//通过new 创建单例模式
var CreateSingletonFactory = (
    function () {
        var instance;
        return function () {
            var Singleton = function (name) {
                this.name = name
                if (instance) {
                    return instance
                } else {
                    return instance = this
                }
            }
            return Singleton
        }
    }
)()