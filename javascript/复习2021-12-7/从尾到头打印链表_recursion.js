/*
 * @Author: caomd
 * @Date: 2021-12-07 08:44:13
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 09:06:56
 */
//use recursion tranverse and print linkedlist from tail to head
//idea recursion from stack if node has next console node.next util next is null
var LinkedList = function () {
    var Node = function (element) {
        this.key = element
        this.next = null
    }
    var head = null, size = 0
    this.append = function (ele) {
        var node = new Node(ele)
        if (!head) {
            head = node
        } else {
            var current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        return size++
    }
    this.insert = function (pos, ele) {
        var node = new Node(ele)
        if (pos >= 0) {
            if (pos === 0) {
                if (!head) {
                    head = node
                } else {
                    node.next = head
                    head = node
                }
                return size++
            } else if (pos === size) {
                this.append(ele)
            } else {
                var i = 0, previous, current = head
                while (i++ < pos) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
                return size++
            }
        }
    }
    this.toString = function () {
        var current = head, s = ''
        s = head.key + '  '
        while (current.next) {
            current = current.next
            s += current.key + '  '
        }
        console.log(s, ' size is ' + size)

    }
    this.print = function () {
        printLinkedFromTail(head)
    }
    var printLinkedFromTail = function (node) {
        if (node !== null) {
            if (node.next) {
                printLinkedFromTail(node.next)
            }
            console.log(node.key)
        }
    }
}
var linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.insert(1, 6)
linked.toString()
linked.print()
