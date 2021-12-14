/*
 * @Author: caomd
 * @Date: 2021-12-14 08:51:39
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-14 09:18:35
 */
//reverseList between 
var Linked = function () {
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
        if (this.head !== null) {
            var current = this.head, s = ''
            while (current.next) {
                s += current.key + '  '
                current = current.next
            }
            s += current.key
        }
        console.log('linked size is ' + this.size + ' and they are ' + s)
    }
}
var reverseListBetween = function (head, m, n) {
    if (this.head === null) {
        return
    }
    //front N item
    if (m === 1) {
        return reverseN(head, n)
    }
    //for head.next between [m-1,n-1]
    head.next = reverseListBetween(head.next, m - 1, n - 1)
    return head
}
var successor = null
var reverseN = function (head, n) {
    if (n === 1) {
        successor = head.next
        return head
    }
    var last = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = successor
    return last
}
var printFromHead = function (head) {
    var s = '', current = head
    while (current.next) {
        s += current.key + ' -> '
        current = current.next
    }
    s += current.key
    console.log(s)
}
var linked = new Linked()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(5)
linked.append(6)
linked.print()
var reverseBet = reverseListBetween(linked.head, 2, 4)
printFromHead(reverseBet)