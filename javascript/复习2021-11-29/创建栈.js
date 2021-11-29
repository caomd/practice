/*
 * @Author: caomd 
 * @Date: 2021-11-29 22:58:14 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-29 23:12:27
 */
//创建栈
var Stack = function () {
    var items = [], length = 0
    this.push = function (element) {
        items.push(element)
        return length++
    }
    this.remove = function () {
        return items.pop()
    }
    //仅仅返回栈顶元素
    this.peek = function () {
        return items[length - 1]
    }
    this.isEmpty = function () {
        return length === 0
    }
    this.clear = function () {
        items = []
    }
    this.size = function () {
        return length
    }
    //打印
    this.print = function () {
        return items.toString()
    }
}
//ES6实现
var ES6Stack = (
    function () {
        var items = new WeakMap()
        class Stack {
            constructor() {
                items.set(this, [])
            }
            push(element) {
                return items.get(this).push(element)
            }
            isEmpty() {
                return items.get(this).length === 0
            }
            pop() {
                return items.get(this).pop()
            }
            toString() {
                return items.get(this).toString()
            }
        }
        return Stack
    }
)()
// 测试
let stack = new Stack()
// console.log(stack.isEmpty())//true
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
// console.log(stack.isEmpty())false
console.log(stack.print(), 'print')//1,2,3,4,5返回undefined
console.log(stack.size(), 'size') //5 size
console.log(stack.peek(), 'peek') //5 peek

var stackES6 = new ES6Stack()
stackES6.push(1)
console.log(stackES6.isEmpty())
console.log(stackES6.toString())