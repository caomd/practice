/*
 * @Author: caomd 
 * @Date: 2022-01-08 19:54:58 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-08 20:17:16
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
            if (cur.key === key) {
                break
            }
            pre = cur
            cur = cur.next
        }
        pre.next = cur.next
        return size--
    }
    this.reverseListNoRecursion = function () {
        var cur = this.head, newHead = null, stack = []
        while (cur.next) {
            stack.push(cur)
            cur = cur.next
        }
        newHead = cur
        while (stack.length) {
            var pre = stack.pop()
            cur.next = pre
            pre.next = null
            cur = pre
        }
        this.printNode(newHead)
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
var list = new Linked()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.printNode(list.head)
list.reverseListNoRecursion()