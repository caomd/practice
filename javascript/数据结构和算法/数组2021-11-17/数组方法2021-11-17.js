//插入元素到数组首位
var num = [0, 1, 2, 3, 4, 5, 6, 7]
num.unshift(-2)
num.unshift(-4, -3)//从后向前插入-3 然后-4
console.log(num.unshift(-5, -6))//打印数组长度13

//删除末尾元素pop
// console.log(num.pop()) //返回删除元素7
//从数组首位删除元素 -5 最后一位变成了undefined
// for (var i = 0; i < num.length; i++) {
//     num[i] = num[i + 1]
// }
//shift 返回删除元素-6
console.log(num.length, 'num')
console.log(num, 'num')
console.log(num.shift()) //-5
//在任意位置添加或删除元素
//使用splice删除指定位置和数量的元素
console.log(num, 'num')
console.log(num.splice(5, 3))//返回删除元素[1,2,3]
console.log(num, 'num')
console.log(num.splice(5, 0, 2, 3, 4))//返回空数组[]
console.log(num, 'num')
//slice给定索引，将数组里对应索引范围的数组作为新数组返回,不改变原数组 
console.log(num.slice(2, 5))//2-5的值，不包含5
console.log(num.slice(2))//2以后的所有值
console.log(num, 'num')

//2021-11-18
//ES6为数组Array类增加了一个@@iterator属性，需要通过Symbol.iterator来访问
//然后用迭代器的next方法，一次得到数组中的值
let iterator = num[Symbol.iterator]()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

//entries
let aEntries = num.entries()
//得到键值对的迭代器
console.log(aEntries)//Array Iterator
console.log(aEntries.next().value)//[0, -6]

//keys方法得到包含数组索引的@@iterator
let akeys = num.keys()
console.log(akeys.next())

let values = num.values()
console.log(values.next())

//Array.from复制出一个新数组
let numbers2 = Array.from(num)
console.log(numbers2)
numbers2[0] = 1
console.log(numbers2, num)

//Array.of 根据传入的参数创建一个新数组
let num3 = Array.of(1)
let num4 = Array.of(1, 2, 3, 4, 5)
console.log(num3, 'num3')
console.log(num4, 'num4')
//可以复制一个已有的数组 深拷贝
let num5 = Array.of(...num3)
console.log(num5)
num5[0] = 5
console.log(num5, num3)

//fill方法 用静态值填充数组
let numFill = Array.of(1, 2, 3, 4, 5)
numFill = numFill.fill(0)
console.log(numFill)
//还可以指定填充索引
numFill.fill(2, 1) //从1开始填充2
console.log(numFill)
numFill.fill(1, 3, 5)//不包括5

//copyWithin
let copyArray = [1, 2, 3, 4, 5, 6]
// console.log(copyArray.copyWithin(0, 3))//[4, 5, 6, 4, 5, 6]
// console.log(copyArray)
console.log(copyArray.copyWithin(1, 3, 5))//[1, 4, 5, 4, 5, 6]

//排序元素
//reverse sort
let arrayS = [15, 11, 12, 11, 13, 19, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(arrayS.reverse())
//sort不是按大小排的，而是把元素默认成字符串进行相互比较
console.log(arrayS.sort())
//自己写比较函数
var aa = arrayS.sort(function (a, b) {
    return a - b //正序
})
console.log(aa)

//indexOf lastIndexOf
let arr = [1, 2, 3, 4, 15, 6, 7, 8, 9, 11, 11, 12, 13, 15, 19]
console.log(arr)
console.log(arr.indexOf(15))//返回与参数匹配的第一个元素的索引
console.log(arr.lastIndexOf(15))//返回与参数匹配的最后一个元素的索引

//find findIndex
function callback(element, index, array) {
    return element > 9 ? true : false
}
console.log(arr.find(callback))//15
console.log(arr.findIndex(callback))//4

