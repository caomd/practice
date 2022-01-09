/*
 * @Author: caomd 
 * @Date: 2022-01-08 20:18:22 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-08 20:28:00
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
    this.printNode = function (node) {
        var cur = node, str = ''
        while (cur.next) {
            str += cur.key + ' -> '
            cur = cur.next
        }
        str += cur.key
        console.log(str)
    }
}

var mergeLinkedOrder = function (l1, l2) {
    l1.head = mergeLinked(l1.head, l2.head)
    l1.printNode(l1.head)
    return l1
}

var mergeLinked = function (h1, h2) {
    var newHead = null
    if (h1 === null) return h2
    if (h2 === null) return h1
    if (h1 === null && h2 === null) return null
    if (h1.key <= h2.key) {
        newHead = h1
        newHead.next = mergeLinked(h1.next, h2)
    } else {
        newHead = h2
        newHead.next = mergeLinked(h1, h2.next)
    }
    return newHead
}

var list = new Linked()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.printNode(list.head)
var list2 = new Linked()
list2.append(2)
list2.append(3)
list2.append(5)
list2.append(6)
list.printNode(list2.head)
mergeLinkedOrder(list, list2)