/*
 * @Author: caomd 
 * @Date: 2022-01-08 20:29:26 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-08 21:35:44
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
    this.remove = function (key) {
        var cur = this.head, pre = null
        if (this.head.key === key) {
            this.head = this.head.next
            return size--
        }
        while (cur.next) {
            pre = cur
            cur = cur.next
            if (cur.key === key) {
                pre.next = cur.next
            }
        }
        return size--
    }
    this.removeTail = function () {
        var cur = this.head, pre
        while (cur.next) {
            pre = cur
            cur = cur.next
        }
        if (pre) {
            pre.next = null
        } else {
            this.head = null
        }
        return cur.key
    }
    this.peek = function () {
        var cur = this.head
        while (cur.next) {
            cur = cur.next
        }
        return cur.key
    }
    this.printNode = function (node) {
        var cur = node, str = ''
        while (cur.next) {
            str += cur.key + ' -> '
            cur = cur.next
        }
        str += cur.key
        console.log(str)
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
        return items.removeTail()
    }
    this.size = function () {
        return size
    }
    this.peek = function () {
        return items.peek()
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.print = function () {
        var str = ''
        var cur = items.head
        while (cur.next) {
            str += cur.key + ' -> '
            cur = cur.next
        }
        str += cur.key
        console.log(str)
        return str
    }
}
var findMinStack = function (stack) {
    var stack2 = new Stack()
    while (!stack.isEmpty()) {
        var cur = stack.pop()
        while (!stack2.isEmpty()) {
            var cur2 = stack2.peek()
            if (cur.key < cur2.key) {
                stack2.pop() //pop bigger
                stack2.push(cur)
            }
            break
        }
        if (stack2.isEmpty()) {
            stack2.push(cur)
        }
        console.log('size:', stack2.size())
        return stack2.peek()
    }
}
var list = new Linked()
list.append(1)
list.append(5)
list.append(3)
list.append(0)
list.append(5)
list.append(6)
list.remove(3)
list.printNode(list.head)
var stack = new Stack()
stack.push(2)
stack.push(1)
stack.push(4)
stack.push(2)
stack.print()
console.log(findMinStack(stack))