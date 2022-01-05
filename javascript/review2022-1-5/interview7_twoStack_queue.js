/*
 * @Author: caomd
 * @Date: 2022-01-05 15:24:04
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-05 15:29:08
 */

//two stack simulation Queue
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
    // console.log(stack1.pop())
    stack2.push(stack1.pop())
    while (!stack2.isEmpty()) {
        console.log(stack2.pop())
    }
}

