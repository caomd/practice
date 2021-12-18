/*
 * @Author: caomd 
 * @Date: 2021-12-18 21:41:03 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-18 22:02:57
 */
var creatFactory = function () {
    var object = {}
    var constructor = Array.prototype.shift.call(arguments)
    obj.__proto__ = constructor.prototype
    constructor.apply(object, arguments)
    var ret = typeof object === 'object' ? object : constructor
    return ret
}

var Player = function (name) {
    this.name = name
}
var player2 = creatFactory(Player, 'player2')
console.log(player2.name)