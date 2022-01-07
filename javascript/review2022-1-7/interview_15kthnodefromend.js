/*
 * @Author: caomd 
 * @Date: 2022-01-07 16:38:26 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-07 16:47:10
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
    this.size = function () {
        return size
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
var printNodeKFromEnd = function (head, size, K) {
    if (head === null) return null
    var p = head, q = head, i = 0
    while (i++ < K - 1) {
        p = p.next
    }
    while (i++ < size) {
        q = q.next
    }
    console.log('K from end Node is ', q)
}
var list = new Linked()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)
list.insert(6)
list.print()
printNodeKFromEnd(list.head, list.size(), 2)