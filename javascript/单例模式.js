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
