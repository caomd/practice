/*
 * @Author: caomd 
 * @Date: 2021-12-21 12:21:11 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 12:42:01
 */
var Linked = function () {
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
var reverseListNoRecursion = function (head) {
    if (head === null || head.next === null) return head
    var newHead = reverseListNoRecursion(head.next)
    head.next.next = head
    head.next = null
    print(newHead)
    return newHead
}
var print = function (head) {
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

var linked = new Linked()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(5)
linked.append(6)
linked.print()
reverseListNoRecursion(linked.head)