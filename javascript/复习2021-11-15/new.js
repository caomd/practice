var createFactory = function () {
    var obj = new Object()
    //构造器
    var Constructor = Array.prototype.shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    var ret = Constructor.apply(obj, arguments)
    return typeof ret === 'object' ? ret : obj
}
var Play = function (name) {
    this.name = name
}
var nPlay = createFactory(Play, 'xiaomingxing')
console.log(nPlay)