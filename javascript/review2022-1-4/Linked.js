/*
 * @Author: caomd 
 * @Date: 2022-01-04 13:35:10 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-04 14:15:53
 */

var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    var head = null, tail = null,
        size = 0
    this.addHead = function (key) {
        var newNode = new Node(key)
        if (head === null) {
            head = newNode
            tail = head
        } else {
            newNode.next = head
            head = newNode
        }
        return size++
    }
    this.addTail = function (key) {
        var newNode = new Node(key), cur = head
        tail.next = newNode
        tail = tail.next
        return size++
    }
    this.getPreNode = function (pos) {
        var cur = head, i = 0, pre = null
        while (i < pos) {
            pre = cur
            cur = cur.next
            i++
        }
        return pre
    }
    this.get = function (index) {
        if (index < 0 || index.length > size) {
            return -1
        }
        return this.getPreNode(index).next.key
    }
    this.insertIndex = function (key, pos) {
        if (pos > size) {
            return
        } else if (pos === size) {
            this.addTail(key)
        } else if (pos <= 0) {
            this.addHead(key)
        } else {
            var pre = this.getPreNode(pos),
                newNode = new Node(key)
            newNode.next = pre.next
            pre.next = newNode
            return size++
        }
    }
    this.deleteAtIndex = function (index) {
        if (index < 0 || index >= size) {
            return false
        }
        //get prenode
        var pre = this.getPreNode(index)
        if (tail.key === pre.next.key) {
            tail = pre
        }
        //delete 
        pre.next = pre.next.next
        return size--
    }
    this.print = function () {
        var cur = head, str = ''
        while (cur.next) {
            str += cur.key + ' -> '
            cur = cur.next
        }
        str += cur.key
        console.log(str)
    }
}
var linked = new Linked()
linked.addHead(1)
linked.addTail(2)
linked.addTail(3)
linked.insertIndex(4, 1)
linked.deleteAtIndex(1)
// linked.append(6)
console.log(linked.getPreNode(2))
linked.print()
// linked.insertIndex(11, 1)
// linked.print()
// linked.removePos(1)
// linked.print()
// linked.remove(4)
// linked.print()
// console.log(linked.find(4))