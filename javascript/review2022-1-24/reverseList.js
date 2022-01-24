/*
 * @Author: caomd 
 * @Date: 2022-01-24 08:34:24 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-24 09:40:03
 */
var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null, size = 0;
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
    this.toString = function () {
        if (this.head !== null) {
            var str = '', cur = this.head
            while (cur.next) {
                str += cur.key + '===>'
                cur = cur.next
            }
            str += cur.key
            console.log(str)
        }
    }
}
var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head
    }
    var newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
}
var successor = null
var reverseListFrontK = function (head, K) {
    if (head === null || head.next === null) {
        return head
    }
    if (K === 1) {
        successor = head.next
        return head
    }
    var newHead = reverseListFrontK(head.next, K - 1)
    head.next.next = head
    head.next = successor
    return newHead
}
var reverseListBtw = function (head, m, n) {
    if (head === null || head.next === null) {
        return head
    }
    var newHead = null
    if (m === 1) {
        newHead = reverseListFrontK(head, n)
        return newHead
    }
    newHead = reverseListBtw(head.next, m - 1, n - 1)
    head.next = newHead
    return head
}
var reverseListGrp = function (head, g) {
    if (head === null || head.next === null) {
        return head
    }
    var end = head
    for (var i = 0; i < g; i++) {
        if (end === null) return head
        end = end.next
    }
    var newHead = reverseListFrontK(head, g)
    head.next = reverseListGrp(end, g)
    return newHead
}
var printNode = function (head) {
    var cur = head, str = ''
    while (cur.next) {
        str += cur.key + '===>'
        cur = cur.next
    }
    str += cur.key
    console.log(str)
}
var list = new Linked()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.toString()
// printNode(reverseList(list.head))
// printNode(reverseListFrontK(list.head, 3))
// printNode(reverseListBtw(list.head, 2, 6))
printNode(reverseListGrp(list.head, 4))
