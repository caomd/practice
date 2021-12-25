/*
 * @Author: caomd 
 * @Date: 2021-12-25 09:28:40 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-25 09:48:39
 */
var LinkedList = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null
    this.size = 0
    this.append = function (key) {
        var newNode = new Node(key)
        if (this.head === null) {
            this.head = newNode
        } else {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
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
        }
        console.log(str)
    }
}
var mergeOrderLinked = function (l1, l2) {
    if (l1 === null && l2 !== null) {
        return l2
    }
    else if (l2 === null && l1 !== null) {
        return l1
    } else if (l1 === null && l2 === null) {
        return null
    } else {
        var head1 = l1.head, head2 = l2.head
        l1.head = mergeList(head1, head2)
        return l1
    }
}
var mergeList = function (h1, h2) {
    var newHead = null
    if (h1 === null && h2 !== null) return h2
    else if (h2 === null && h1 !== null) return h1
    else if (h1 === null && h2 === null) return null
    if (h1.key <= h2.key) {
        newHead = h1
        newHead.next = mergeList(h1.next, h2)
    } else {
        newHead = h2
        newHead.next = mergeList(h1, h2.next)
    }
    return newHead
}
var linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(4)
linked.append(6)
linked.print()
// linked.append(7)
// linked.toString()
var linked2 = new LinkedList()
linked2.append(3)
linked2.append(3)
linked2.append(4)
linked2.append(5)
linked2.append(6)
linked2.append(8)
linked2.print()
var l = mergeOrderLinked(linked, linked2)
l.print()