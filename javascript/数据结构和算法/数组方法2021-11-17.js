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