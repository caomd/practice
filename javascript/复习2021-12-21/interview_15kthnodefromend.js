/*
 * @Author: caomd 
 * @Date: 2021-12-21 11:28:56 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 12:20:00
 */
var LinkedList = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null
    this.size = 0
    this.insert = function (key) {
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
var kthnodeFromEnd = function (head, size, k) {
    //from end k and then from front index = length-k two points from 0 and the second point start with first point to k-1 and the two points between k items
    if (head !== null) {
        var i = 0, first = head, second = head
        while (i++ < k - 1) {
            first = first.next
        }
        while (i++ < size && second.next) {
            second = second.next
        }
        return second
    }
}

var list = new LinkedList()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)
list.insert(6)
list.print()

console.log(kthnodeFromEnd(list.head, list.size, 3))