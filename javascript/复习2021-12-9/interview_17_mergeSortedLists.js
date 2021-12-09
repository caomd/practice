/*
 * @Author: caomd
 * @Date: 2021-12-09 21:53:01
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-09 22:10:01
 */
//合并两个排序的链表
//思路：从比较两个链表的最后一项开始 前一个链表大就前移 直到小于等于另一个链表节点插入节点next 移动后一个链表指针 小于等于前一项就停止，插入前一项
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
    this.size = function () {
        return size
    }
    this.getHead = function () {
        return root
    }
}
var linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(4)
linked.append(6)
linked.append(7)
linked.toString()
var linked2 = new LinkedList()
linked2.append(3)
linked2.append(3)
linked2.append(4)
linked2.append(5)
linked2.append(6)
linked2.append(8)
linked2.toString()
var mergeSortLinked = function (l1, l2) {
    if (l1 === null && l2 !== null) {
        return l2
    } else if (l1 !== null && l2 === null) {
        return l1
    } else if (l1 === null && l2 === null) {
        return null
    } else {
        l1head = linked.getHead()
        l2head = linked2.getHead()
    }
}
mergeSortLinked(linked, linked2)