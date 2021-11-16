Function.prototype.bind = function () {
    var _self = this
    var context = [].shift.apply(arguments)
    var args = [].slice.apply(arguments)
    //返回一个新函数
    return function () {
        _self.apply(context, [].concat.apply(args, [].slice.call(arguments)))
    }
}
var obj = {
    name: 'bind2'
}
var fn = function () {
    console.log(this.name + 'good job')
    console.log([].slice.apply(arguments))
}

var fnNew = fn.bind(obj, [1, 2])
fnNew(3, 4)
//bind2good job
// [Array(2), 3, 4]