/*
 * @Author: caomd
 * @Date: 2021-12-07 23:16:37
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 23:32:47
 */
//two stack achieve queue
//idear stack FILO queue FIFO
var Stack = function () {
    var items = [], size = 0
    this.push = function (element) {
        items.push(element)
        return size++
    }
    this.pop = function () {
        size--
        return items.pop()
    }
    this.isEmpty = function () {
        return size <= 0
    }
    this.toString = function () {
        console.log(items)
    }
}
var stack1 = new Stack()
var stack2 = new Stack()

stack1.push('a')
stack1.push('b')
stack1.push('c')

while (!stack1.isEmpty()) {
    stack2.push(stack1.pop())
}


var head = stack2.pop()
var head = stack2.pop()
var head = stack2.pop()
var head = stack2.pop()
console.log(head)
if (stack2.isEmpty()) {
    throw new Error('queue is empty')
}
stack2.toString()
console.log(head)
