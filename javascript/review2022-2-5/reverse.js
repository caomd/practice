/*
 * @Author: caomd 
 * @Date: 2022-02-05 19:15:26 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-02-05 19:47:14
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
    this.toString = function () {
        var cur = this.head, str = ''
        while (cur.next) {
            str += cur.key + ' => '
            cur = cur.next
        }
        str += cur.key
        console.log(str)
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
var reveserListFrontK = function (head, K) {
    if (head === null || head.next === null) {
        return head
    }
    if (K === 1) {
        successor = head.next
        return head
    }
    var newHead = reveserListFrontK(head.next, K - 1)
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
        return newHead = reveserListFrontK(head, n)
    }
    newHead = reverseListBtw(head.next, m - 1, n - 1)
    head.next = newHead
    return head
}
var reverseListGrp = function (head, g) {
    if (head === null || head.next === null) {
        return head
    }
    var nextGrp = head
    for (var i = 0; i < g; i++) {
        if (nextGrp === null) return head
        nextGrp = nextGrp.next
    }
    var newHead = reveserListFrontK(head, g)
    head.next = reverseListGrp(nextGrp, g)
    return newHead
}
var printNode = function (head) {
    var cur = head, str = ''
    while (cur.next) {
        str += cur.key + ' => '
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
// printNode(reveserListFrontK(list.head, 4))
// printNode(reverseListBtw(list.head, 2, 4))
printNode(reverseListGrp(list.head, 3))