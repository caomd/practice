/*
 * @Author: caomd 
 * @Date: 2021-11-29 10:22:58 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-29 10:57:29
 */
//返回一个新函数
Function.prototype.bind = function () {
    var self = this
    var Context = Array.prototype.shift.call(arguments)
    //将剩余参数转为数组
    var args = Array.prototype.slice.call(arguments)
    return function () {
        self.apply(Context, Array.prototype.concat.apply(args, Array.prototype.slice.call(arguments)))
    }
}
var initalFn = {
    name: 'Function',
    type: 'bind'
}
function bindPrototype() {
    this.param = '参数'
    var args = Array.prototype.slice.call(arguments)
    console.log(this.param, this.name, this.type, args)
}
var fn = bindPrototype.bind(initalFn, { date: new Date() })
fn(3, 4)