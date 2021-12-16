/*
 * @Author: caomd
 * @Date: 2021-12-16 17:46:00
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 20:05:31
 */
//reverseList
var LinkedList = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null
    this.size = 0
    this.append = function (key) {
        var newNode = new Node(key)
        if (this.head !== null) {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        } else {
            this.head = newNode
        }
        return this.size++
    }
    this.print = function () {
        if (this.head !== null) {
            var ret = ''
            var current = this.head
            while (current.next) {
                ret += current.key + ' -> '
                current = current.next
            }
            ret += current.key
            console.log(ret)
        }
    }
}
var reverseList = function (list) {
    if (list.head !== null) {
        return reverseListNode(list.head)
    }
}
var reverseListNode = function (head) {
    //base case
    if (head === null || head.next === null) return head
    var newHead = reverseListNode(head.next)
    //switch
    head.next.next = head
    head.next = null
    return newHead
}
var reverseListNotRecursion = function (list) {
    if (list.head) {
        var pre = null, current = list.head, reverseHead
        while (current !== null) {
            var next = current.next
            if (next === null) {
                reverseHead = current
            }
            current.next = pre
            pre = current
            current = next
        }
        return reverseHead
    }
}
var printNode = function (head) {
    var str = ''
    while (head.next) {
        str += head.key + ' -> '
        head = head.next
    }
    str += head.key
    console.log(str)
}
var linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(5)
linked.append(6)
linked.print()
// printNode(reverseList(linked))
printNode(reverseListNotRecursion(linked))