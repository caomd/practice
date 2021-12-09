/*
 * @Author: caomd 
 * @Date: 2021-12-09 20:24:37 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-09 21:50:46
 */
//use stack
var Stack = function () {
    var items = [], length = 0
    this.push = function (element) {
        items.push(element)
        return length++
    }
    this.pop = function () {
        length--
        return items.pop()
    }
    this.isEmpty = function () {
        return length === 0
    }
    this.toString = function () {
        return items.toString()
    }
}
//反转链表
var LinkedList = function () {
    var Node = function (element) {
        this.key = element
        this.next = null
    }
    var root = null, size = 0
    this.append = function (element) {
        var node = new Node(element)
        if (root === null) {
            root = node
            return size++
        }
        var current = root
        while (current.next) {
            current = current.next
        }
        current.next = node
        return size++
    }
    this.insert = function (position, element) {
        var node = new Node(element)
        if (position >= 0 || element !== null) {
            var current = root
            if (position === 0) {
                if (!root) {
                    root = node
                } else {
                    node.next = current
                    root = node
                }
            } else {
                var i = 0, previous
                while (i++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            return size++
        } else {
            return
        }
    }
    this.toString = function () {
        var current = root
        while (current.next) {
            console.log(current.key)
            current = current.next
        }
        console.log(current.key, '  size:', size)
    }
    this.reverse = function () {
        if (root !== null) {
            var current = root,
                stack = new Stack()
            while (current.next) {
                stack.push(current)
                current = current.next
            }
            stack.push(current)
            //reverse
            var reverseHead = null, previous = null
            while (!stack.isEmpty()) {
                var current = stack.pop()
                if (current.next === null) {
                    reverseHead = current
                    previous = reverseHead
                } else {
                    current.next = null
                    previous.next = current
                    previous = current
                }

            }
            return reverseHead
        }
    }
    this.reverseTwo = function () {
        if (root !== null) {
            var previous = null, current = root, reverseHead = null
            while (current) {
                var next = current.next
                if (next === null) {
                    reverseHead = current
                }
                current.next = previous
                previous = current
                current = next
            }
            return reverseHead
        }
    }
}
var linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.toString()
console.log(linked.reverse())
// console.log(linked.reverseTwo())