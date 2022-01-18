/*
 * @Author: caomd 
 * @Date: 2022-01-21 08:56:31 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-21 09:27:07
 */
var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null, size = 0
    this.append = function (key) {
        var newNode = new Node(key)
        if (this.head === null) {
            this.head = newNode
        } else {
            var cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            cur.next = newNode
        }
        return size++
    }
    this.deleteRear = function () {
        if (this.head !== null) {
            var cur = this.head, prev
            while (cur.next) {
                prev = cur
                cur = cur.next
            }
            if (prev) {
                prev.next = null
            } else {
                this.head = null
            }
            size--
            return cur.key
        }
    }
    this.peek = function () {
        if (this.head !== null) {
            var cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            return cur.key
        }
    }
    this.toString = function () {
        if (this.head !== null) {
            var cur = this.head, str = ''
            while (cur.next) {
                str += cur.key + ' -> '
                cur = cur.next
            }
            str += cur.key
        }
        console.log('stack is ' + '\n' + str)
    }

}
var Stack = function () {
    var items = new Linked(), size = 0
    this.push = function (key) {
        items.append(key)
        return size++
    }
    this.pop = function () {
        size--
        return items.deleteRear()
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.size = function () {
        return size
    }
    this.toString = function () {
        items.toString()
    }
    this.peek = function () {
        return items.peek()
    }
}
var minInStack = function (stack) {
    var stackTemp = new Stack()
    while (!stack.isEmpty()) {
        var cur = stack.pop()
        if (!stackTemp.isEmpty()) {
            var temp = stackTemp.peek()
            if (cur < temp) {
                stackTemp.pop()
                stackTemp.push(cur)
            }
        } else {
            stackTemp.push(cur)
        }
    }
    var min = stackTemp.pop()
    console.log('min in Stack is: ' + min)
}
var s = new Stack()
s.push(2)
s.push(1)
s.push(2)
s.push(0)
s.push(8)
s.push(1)
s.toString()
minInStack(s)