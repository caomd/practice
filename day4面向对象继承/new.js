// new关键字做了什么
// 1.一个继承Player.prototype的新对象p1被创建
// 2.p1.__proto__指向Player.prototype, 即p1.__proto__ === Player.prototype
// 3.将this指向新创建的对象
// 4.返回新对象
// 4.1构造函数没有显示返回值，返回this
// 4.2构造函数有显示返回值且为基本数据类型，比如number, string, 那么返回this
// 4.3构造函数有显示返回值且为对象类型，比如{ a: 1 }, 那么返回这个对象

const { type } = require("os")

// function Test(name) {
//     this.name = name
//     // return 1
//     return { name: 'haha' }
// }

// const t1 = new Test('hello')
// console.log(t1)//返回Test{name:'hello'}1.无返回值和返回基本数据类型 2.返回对象时，返回这个对象


//手写是实现new
function objectFactory() {
    let obj = new Object()
    const constructor = [].shift.call(arguments)//获取第一参数(构造函数),arguments为伪数组
    //也可以用扩展运算符和Array.from(arguments)不会改变原数组
    // const constructor = [...arguments].shift()
    // const constructor = Array.from(arguments).shift();
    obj.__proto__ = constructor.prototype
    //改变this的指向，参数传给obj
    console.log(arguments)
    let ret = constructor.apply(obj, arguments)
    //第四项返回新对象，看返回值是否为对象，是的话返回返回的对象，否则返回新对象
    return typeof ret === 'object' ? ret : obj
}

//怎么使用
function Player(color) {
    this.color = color
}
const a = objectFactory(Player, 'white')
console.log(a)

function newFun() {
    // const obj = Object.create(Object.prototype);
    const obj = new Object();
    console.log(obj);
    const constructor = [].shift.call(arguments);
    obj.__proto__ = constructor.prototype;
    const ret = constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
}
const b = newFun(Player, 'black');
console.log(b)
// const c = Object.create(Object.prototype);
// const d = new Object()
// console.log(c, d)//{}{}

// var _a = 0;
// Object.defineProperty(window, 'a', {
//     get: function () {
//         return ++_a;
//     }
// });
// console.log(a === 1 && a === 2 && a === 3);



