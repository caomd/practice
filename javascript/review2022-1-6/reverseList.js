/*
 * @Author: caomd 
 * @Date: 2022-01-06 16:36:35 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 17:10:37
 */

var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null, size = 0
    this.insert = function (key) {
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
    this.print = function () {
        if (this.head !== null) {
            var cur = this.head, str = ''
            while (cur.next) {
                str += cur.key + ' -> '
                cur = cur.next
            }
            str += cur.key
        }
        console.log(str)
    }
}
var reverseList = function (head) {
    if (head === null || head.next === null) return head
    var newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
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
var reverseListBtw = function (head, m, n) {
    if (head === null || head.next === null) return head
    var newHead
    if (m === 1) {
        return newHead = reverseListK(head, n)
    }
    newHead = reverseListBtw(head.next, m - 1, n - 1)
    head.next = newHead
    return head
}
var reverseListGrp = function (head, g) {
    if (head === null || head.next === null) return head
    var front = head
    for (var i = 0; i < g; i++) {
        if (front === null) return head
        front = front.next
    }
    var newHead = reverseListK(head, g)
    head.next = reverseListGrp(front, g)
    return newHead
}
var printHead = function (head) {
    var cur = head, str = ''
    while (cur.next) {
        str += cur.key + ' -> '
        cur = cur.next
    }
    str += cur.key
    console.log(str)
}
var list = new Linked()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)
list.insert(6)
list.print()
// printHead(reverseList(list.head))
// printHead(reverseListK(list.head, 2))
// printHead(reverseListBtw(list.head, 2, 5))
printHead(reverseListGrp(list.head, 4))