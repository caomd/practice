//解构的原理
// 针对可迭代对象Iterator, 通过遍历按顺序获取对应值进行赋值
// Iterator是什么
// 是一种接口，interface,为各种不一样的数据解构提供一种访问机制
// 任何数据解构只要有Interator接口
// for of 相当于一个遍历器，遍历的时候去寻找Iterator
// Iterator有什么用
// 为各种不同的数据解构提供统一访问的接口
// 数据结构按顺序处理
// for of 可以进行遍历
function generator(arr) {
    let nextIndex = 0;
    return {
        next: () => nextIndex < arr.length ? {
            value: arr[nextIndex++],
            done: false
        } : {
            value: undefined,
            done: true
        }
    }
}
const iterator = generator([2, 33, 6]);
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
//可迭代对象是什么
// 是Iterator接口的实现
// 可迭代协议：对象必须实现Iterator方法，对象或者原型链上必须有Symbol.iterator
// 迭代器协议：必须实现一个next()方法，next方法返回对象done value

//实现一个对象可以通过forof 遍历
const obj = {
    count: 0,
    //对象上有Symbol.iterator
    [Symbol.iterator]: () => {
        //必须实现一个next()方法，返回对象done value
        return {
            next: () => {
                obj.count++;
                if (obj.count <= 10) {
                    return {
                        value: obj.count,
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}
for (let item of obj) {
    console.log(item);//1~10
}