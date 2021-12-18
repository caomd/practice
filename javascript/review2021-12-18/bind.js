/*
 * @Author: caomd 
 * @Date: 2021-12-18 13:04:12 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-18 13:13:49
 */
Function.prototype.bind = function (fn) {
    var self = this
    var constructor = Array.prototype.shift.call(arguments)
    arg = Array.prototype.slice.call(arguments)
    //return new fn
    return function () {
        return self.apply(constructor, Array.prototype.concat.apply(arg, Array.prototype.slice.call(arguments)))
    }
}
var func1 = function () {
    console.log(Array.prototype.slice.call(arguments))
    console.log(this.name)
    console.log("bind fn call")
}
var obj = {
    name: 'bind call name'
}
var func2 = func1.bind(obj, 12, 3)
func2(3, 2)