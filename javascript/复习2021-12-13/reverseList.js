/*
 * @Author: caomd 
 * @Date: 2021-12-13 22:12:09 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-15 13:23:44
 */
var LinkedList = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null
    this.size = 0
    this.append = function (key) {
        var node = new Node(key)
        if (this.head === null) {
            this.head = node
        } else {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        return this.size++
    }
    this.print = function () {
        var s = ''
        if (this.head) {
            var current = this.head
            while (current.next) {
                s += current.key + '  '
                current = current.next
            }
            s += current.key
        }
        console.log(s)
    }
}
var reverse = function (head) {
    //base case
    if (head === null || head.next === null) {
        return head
    }
    //new head node
    var last = reverse(head.next)
    //change position
    head.next.next = head
    //break joint
    head.next = null
    return last
}
var successor = null
var reverseN = function (head, n) {
    //next node
    if (n === 1) {
        successor = head.next
        return head
    }
    var last = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = successor
    return last
}
var linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(5)
linked.append(6)
linked.print()
// var ret = reverse(linked.head)
// console.log(ret)
reverseN(linked.head, 3)
