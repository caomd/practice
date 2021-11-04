//手写new
function objectFactory() {
    let obj = new Object();
    const Constructor = [].shift.call(arguments)//获取构造器
    //新建对象的隐形属性__proto__指向构造器的原型
    obj.__proto__ = Constructor.prototype;
    //获取参数属性给新的对象
    const ret = Constructor.apply(obj, arguments)
    //判断是否为对象返回新的对象
    return typeof ret === 'object' ? ret : obj;
}
function Player(color) {
    this.color = color
}
let objNew = objectFactory(Player, '蓝色')
console.log(objNew)

//手写bind,简化版
Function.prototype.bind = function (context) {
    var self = this;//保存原函数
    return function () {//返回新的函数
        return self.apply(context, arguments)//执行新的函数时，会把之前传入的context当作新函数体内的this
    }
}

//稍微复杂一点，可以往func函数中预先填入一些参数
Function.prototype.bind = function () {
    //先保存原函数
    var self = this;
    //获取绑定的this上下文
    var context = [].shift.call(arguments);
    //将剩余参数转为数组
    var args = [].slice.call(arguments);
    //返回新的函数,把之前传入的context当作新函数体内的this
    //并组合两次分别传入的参数，作为新函数的参数
    return function () {
        return self.apply(context, [].concat.call(args, [].slice.call(arguments)))
    }
}
var obj = {
    name: 'sven'
};
var func = function (a, b, c, d) {
    console.log(this.name);
    console.log([a, b, c, d])
}.bind(obj, 1, 2)

func(3, 4)

// const a = [1, 3]
// console.log([].shift.call(a))
// console.log([].concat.call(a, [4, 5]))
// console.log([].slice.call([4, 5]))

//借用构造函数
var A = function (name) {
    this.name = name;
}
var B = function () {
    A.apply(this, arguments)
}
B.prototype.getName = function () {
    return this.name;
}
var b = new B('sven');
console.log(b.getName())//输出：sven

    //借用Array.prototype对象上的方法
    (
        function () {
            Array.prototype.push.call(arguments, 9)
            console.log(arguments)//[Arguments] { '0': 1, '1': 2, '2': 9 }
        }
    )(1, 2)

//把arguments转成真正的数组使用Array.prototype.slice
function func() {
    Array.prototype.slice.call(arguments);
    console.log(arguments)
}
func(3, 5, 2)
    (
        function () {
            var a = Array.prototype.slice.call(arguments)
            console.log(a, a.push(9))//[ 3, 5, 2, 9 ] 4
            console.log(arguments)//[Arguments] { '0': 1, '1': 2, '2': 9 }
        }
    )(3, 5, 2)

//可以借用Array.prototype对象上的方法的只有对象
var func = function () { }
var obj2 = {}
var num = 9

// Array.prototype.push.call(func,'first')
// console.log(func.length);
//报错：cannot assign to read only property ‘length’ of function(){}
// Array.prototype.push.call(obj2,'first')
// console.log(obj2,obj2.length);
//{ '0': 'first', length: 1 } 1
Array.prototype.push.call(num, 6)
console.log(num.length)//undefined
console.log(num.size)//undefined
console.log(num, num[0], num.length);
// 9 undefined undefined
//字符串也不可以
var word = 'hellwe'
var n = 9
console.log(typeof word)
console.log(Object.prototype.toString.call(word))
console.log(Object.prototype.toString.call(n))
Array.prototype.push.call(word, 'push');
console.log(word, word.length)

//Cannot assign to read only property 'length' of object '[object String]'

//高阶函数
var isType = function (type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
}
var isString = isType('String')
var isArray = isType('Array')
var isNumber = isType('Number')

console.log(isArray([1, 3, 6]));

//AOP
Function.prototype.before = function (beforefn) {
    //保存原函数的引用
    var _self = this;
    console.log(this, 'wai')//[Function:func]
    //返回包含了原函数和新函数的“代理”函数
    return function () {
        console.log(this, 'this....')//Object [globl]
        beforefn.apply(this, arguments);
        console.log(_self.apply(this, arguments), '0')//undefined
        return _self.apply(this, arguments)
    }
}
Function.prototype.after = function (afterfn) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        console.log('ret...', ret)//undefined
        return ret
    }
}
var func = function () {
    console.log(1)
}
func = func.before(function () {
    console.log(2)
}).after(function () {
    console.log(3)
})
func()

//