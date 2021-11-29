/*
 * @Author: caomd
 * @Date: 2021-11-29 10:59:43
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-29 11:17:02
 */
//创建new 
var createFactory = function () {
    var obj = {}
    var constructor = Array.prototype.shift.call(arguments)
    //继承 即对象的隐性属性__proto__指向构造器的原型对象
    obj.__proto__ = constructor.prototype
    //将剩余参数转为数组
    var args = Array.prototype.slice.call(arguments)
    //这个参数是传给构造器的
    var ret = constructor.apply(obj, args) //undefined
    return typeof ret === 'object' ? ret : obj
}
var Play = function (param) {
    this.name = 'Play'
    this.type = param.type
}
var playTwo = createFactory(Play, { type: 'Object' })
console.log(playTwo)
console.log(playTwo.type)