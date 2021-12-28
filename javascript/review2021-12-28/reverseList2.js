/*
 * @Author: caomd 
 * @Date: 2021-12-28 17:03:12 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-28 17:51:07
 */

var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null
    this.size = 0
    this.insert = function (key) {
        var newNode = new Node(key)
        if (this.head === null) {
            this.head = newNode
        } else {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        return this.size++
    }
    this.print = function () {
        if (this.head !== null) {
            var current = this.head, str = ''
            while (current.next) {
                str += current.key + ' -> '
                current = current.next
            }
            str += current.key
            console.log(str)
        }
    }
}

var successor = null
var reverseListK = function (head, K) {
    if (head === null || head.next === null) return head
    if (K === 1) {
        successor = head.next
        return head
    }
    var newHead = reverseListK(head.next, K - 1)
    head.next.next = head
    head.next = successor
    return newHead
}
var reverseListGrp = function (head, g) {
    if (head === null) return head
    var front = head
    for (var i = 0; i < g; i++) {
        if (front === null) return head
        front = front.next
    }
    var newHead = reverseListK(head, g)
    head.next = reverseListGrp(front, g)
    return newHead
}
var printNode = function (head) {
    if (head !== null) {
        var current = head, str = ''
        while (current.next) {
            str += current.key + ' -> '
            current = current.next
        }
        str += current.key
        console.log(str)
    }
}
var list = new Linked()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)
list.insert(6)
list.print()
// printNode(reverseListK(list.head, 3))
printNode(reverseListGrp(list.head, 3))
