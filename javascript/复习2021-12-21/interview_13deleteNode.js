/*
 * @Author: caomd 
 * @Date: 2021-12-21 10:23:35 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 11:10:02
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
    this.getNode = function (key) {
        if (this.head !== null) {
            var current = this.head
            while (current.next) {
                if (current.key === key) {
                    return current
                }
                current = current.next
            }
            if (current.key === key) {
                return current
            }
        }
    }
    this.print = function () {
        if (this.head) {
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
var deleteLinkedNode = function (head, node) {
    if (head !== null && node !== null) {
        //head
        if (head === node) {
            head = null
        } else if (node.next === null) {
            //tail
            var current = head, pre
            while (current.next) {
                pre = current
                current = current.next
            }
            if (pre) {
                pre.next = null
            }
            current = null
        } else {
            var next = node.next
            node.key = node.next.key
            node.next = node.next.next
        }
        printNode(head)
        return head
    }
}
var printNode = function (node) {
    var current = node, str = ''
    while (current.next) {
        str += current.key + ' -> '
        current = current.next
    }
    str += current.key
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
var linked2 = linked.getNode(5)
console.log(linked2)

deleteLinkedNode(linked.head, linked2)