/*
 * @Author: caomd 
 * @Date: 2022-01-10 16:31:42 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-10 16:50:20
 */

var creatFactory = function () {
    var obj = {}
    var Constructor = Array.prototype.shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    var args = Array.prototype.slice.call(arguments)
    var ret = Constructor.apply(obj, args)
    return typeof ret === 'object' ? ret : obj
}
var Play = function (color) {
    this.name = 'football'
    this.color = color
}
var playCreate = creatFactory(Play, 'vlue')
console.log(playCreate)