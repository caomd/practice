//bind(指向对象，参数) --》返回一个新的函数
Function.prototype.bind = function (context) {
    var self = this;//保存原函数
    return function () {//返回新的函数
        return self.apply(context, arguments)//执行新的函数时，会把之前传入的context当作新函数体内的this
    }
}

Function.prototype.bind = function () {
    //保存原函数
    var __self = this;
    //获取指向对象
    var context = [].shift.call(arguments);
    //将剩余参数转为数组
    var args = [].slice.apply(arguments);
    return function () {
        return __self.apply(context, [].concat.apply(args, [].slice.call(arguments)))
    }
}
var func1 = {
    name: 66
}
var func2 = function (a, b, c, d) {
    console.log([a, b, c, d], this.name)//[2, 3, 4, 5] 66
    console.log(arguments, this.name)//Arguments(4) [2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ] 66
}

func2 = func2.bind(func1, 2, 3)
func2(4, 5)
// Function.prototype.bind = function () {
//     //先保存原函数
//     var self = this;
//     //获取绑定的this上下文
//     var context = [].shift.call(arguments);
//     //将剩余参数转为数组
//     var args = [].slice.call(arguments);
//     //返回新的函数,把之前传入的context当作新函数体内的this
//     //并组合两次分别传入的参数，作为新函数的参数
//     return function () {
//         return self.apply(context, [].concat.call(args, [].slice.call(arguments)))
//     }
// }
// var obj = {
//     name: 'sven'
// };
// var func = function (a, b, c, d) {
//     console.log(this.name);
//     console.log([a, b, c, d])
// }.bind(obj, 1, 2)

// func(3, 4)