//浅拷贝
//Object.assign()
var obj = { a: { a: "kobe", b: 39 }, c: 4 };
var initalObj = Object.assign({}, obj);
initalObj.a.a = "wade";
initalObj.c = 5;
//当object只有一层的时候，是深拷贝
console.log(obj, initalObj); //wade

//Array.prototype.concat()
let arr = [1, 3, {
    username: 'kobe'
}];
let arr2 = arr.concat();
arr2[2].username = 'wade';
arr2[1] = 6;
console.log(arr, arr2);

let arr3 = arr.slice();
arr3[2].username = 'wade'
arr3[1] = 5;
console.log(arr, arr3);

//Array的slice和concat方法不修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。
// 原数组的元素会按照下述规则拷贝：

// 如果该元素是个对象引用(不是实际的对象)，slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
// 对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。

// 深拷贝的实现方式
// JSON.parse(JSON.stringify())
// 原理： 用 JSON.stringify 将对象转成 JSON 字符串，
// 再用 JSON.parse() 把字符串解析成对象，一去一来，
// 新的对象产生了，而且对象会开辟新的栈，实现深拷贝

let arr4 = JSON.parse(JSON.stringify(arr));
arr4[2].username = 'duncan';
console.log(arr, arr4)
//但是它还是有很大缺陷的，比如拷贝其他引用类型、拷贝函数、循环引用等情况。
let arr_c = [1, 3, {
    username: ' kobe'
}, function () { }];
let arr5 = JSON.parse(JSON.stringify(arr_c));
arr5[2].username = 'duncan';
console.log(arr_c, arr5)
//[ 1, 3, { username: ' kobe' }, [Function] ]
//[ 1, 3, { username: 'duncan' }, null ]

// 递归方法
// 递归方法实现深度克隆原理：遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝。
// 有种特殊情况需注意就是对象存在循环引用的情况，即对象的属性直接的引用了自身的情况，解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。


