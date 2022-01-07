/*
 * @Author: caomd 
 * @Date: 2022-01-07 17:04:48 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-07 17:39:26
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
    this.print = function () {
        var cur = this.head, str = ''
        while (cur.next) {
            str += cur.key + ' -> '
            cur = cur.next
        }
        str += cur.key
        console.log(str)
    }
}
var reverseListNoRecursion = function (head) {
    if (head === null || head.next === null) return head
    var cur = head, stack = [], newHead = null, pre = null
    while (cur.next) {
        stack.push(cur)
        cur = cur.next
    }
    newHead = cur
    while (stack.length) {
        var pre = stack.pop()
        cur.next = pre
        cur = cur.next
        pre.next = null
    }
    return newHead
}
var printNode = function (head) {
    var cur = head, str = ''
    while (cur.next) {
        str += cur.key + ' -> '
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
list.print()
printNode(reverseListNoRecursion(list.head))