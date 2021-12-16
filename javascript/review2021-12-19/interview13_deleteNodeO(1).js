/*
 * @Author: caomd
 * @Date: 2021-12-16 16:27:35
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 17:01:23
 */
//delete node time O(1)
//think get delete node next node copy content to delete node and delete node = next node delete next node 
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
        }
        else {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        return this.size++
    }
    this.getNode = function (position) {
        if (this.head !== null) {
            var i = 0, current = this.head
            while (i++ < position) {
                current = current.next
            }
            return current
        }
    }
    this.print = function () {
        if (this.head !== null) {
            var str = ''
            var current = this.head
            while (current.next) {
                str += current.key + ' => '
                current = current.next
            }
            str += current.key
            console.log(str)
        }
    }
}
var deleteLinkedNode = function (head, deleteNode) {
    if (head === null || deleteNode === null) return null
    //not tail node
    if (deleteNode.next !== null) {
        var dNext = deleteNode.next
        deleteNode.key = dNext.key
        deleteNode.next = dNext.next
        dNext = null
    }
    else if (head === deleteNode) {
        head = null
        deleteNode = null
    } else {
        //tail node
        var node = head
        while (node.next !== deleteNode) {
            node = node.next
        }
        node.next = null
        deleteNode = null
    }
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