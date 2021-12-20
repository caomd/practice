/*
 * @Author: caomd 
 * @Date: 2021-12-20 16:43:56 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 18:07:44
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
            this.size++
            return this.head = newNode
        }
        var current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
        this.size++
    }
    this.print = function () {
        if (this.head !== null) {
            var str = '', current = this.head
            while (current.next) {
                str += current.key + ' => '
                current = current.next
            }
            str += current.key
            console.log(str)
        }
    }
}
//reverseList All
var rerverseList = function (head) {
    if (head === null || head.next === null) return head
    var newHead = rerverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
}
var successor
var reverseListK = function (head, k) {
    if (head === null) return head
    if (k === 1) {
        successor = head.next
        return head
    }
    var newHead = reverseListK(head.next, k - 1)
    head.next.next = head
    head.next = successor
    return newHead
}
//reverseList m,n
var reverseListMBetN = function (head, m, n) {
    if (head === null) return head
    var newHead
    if (m === 1) {
        var newHead = reverseListK(head, n)
        return newHead
    }
    head.next = reverseListMBetN(head.next, m - 1, n - 1)
    return head
}
var reverseGrp = function (head, grp) {
    if (head === null) return head
    var front = head
    for (var i = 0; i < grp; i++) {
        //the order two sentense
        if (front === null) {
            return head
        }
        front = front.next
    }
    var frontHead = reverseListK(head, grp)
    head.next = reverseGrp(front, grp)
    return frontHead
}

var printNode = function (head) {
    if (head !== null) {
        var current = head, str = ''
        while (current.next) {
            str += current.key + ' => '
            current = current.next
        }
        str += current.key
        console.log(str)
    }
}

//test
var list = new Linked()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)
list.insert(6)
list.print()
// console.log("reverseList All")
// printNode(rerverseList(list.head))
// console.log("reverseList K")
// printNode(reverseListK(list.head, 4))
// console.log("reverseList 2-5")
// printNode(reverseListMBetN(list.head, 2, 5))
console.log('reverseList group')
printNode(reverseGrp(list.head, 2))