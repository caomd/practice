/*
 * @Author: caomd 
 * @Date: 2022-01-19 21:37:36 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-19 22:06:56
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
            var cur = this.head, previous = null
            while (cur.next) {
                previous = cur
                cur = cur.next
            }
            if (previous) {
                previous.next = null
            } else {
                this.head = null
            }
            size--
            return cur
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
            console.log(str)
        }
    }
    this.peek = function () {
        if (this.head !== null) {
            var cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            return cur
        }
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
    this.toString = function () {
        items.toString()
    }
    this.rear = function () {
        return items.peek()
    }
}
var minInStack = function (stack) {
    var auxiliaryStack = new Stack(), min
    while (!stack.isEmpty()) {
        var cur = stack.pop()
        if (!auxiliaryStack.isEmpty()) {
            min = auxiliaryStack.rear()
            if (cur.key < min.key) {
                auxiliaryStack.pop()
                auxiliaryStack.push(cur.key)
            }
        } else {
            auxiliaryStack.push(cur.key)
        }
    }
    min = auxiliaryStack.pop()
    console.log('min In Stack', min.key)
}
var s = new Stack()
s.push(2)
s.push(5)
s.push(1)
s.push(2)
s.push(0)
s.push(3)
s.push(3)
s.toString()
minInStack(s)