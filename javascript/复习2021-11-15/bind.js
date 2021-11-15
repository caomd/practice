Function.prototype.bind = function () {
    var self = this
    var context = Array.prototype.shift.call(arguments)
    //剩余参数
    var args = Array.prototype.slice.call(arguments)
    return function () {
        self.apply(context, Array.prototype.concat(args, [].slice.call(arguments)))
    }
}
// var fun = {
//     name: 'bind'
// }
var fun = function (a, b, c, d) { console.log(this.name, [a, b, c, d]) }.bind({ name: 'bind' }, 4, 5)
fun(1, 2)