/*
 * @Author: caomd
 * @Date: 2021-12-16 11:56:31
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 12:21:46
 */
//reverse Linked list
var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null
    this.size = 0
    this.insert = function (key) {
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
var printNode = function (node) {
    var str = ''
    while (node !== null) {
        var current = node
        str += current.key + (current.next ? ' -> ' : '')
        node = current.next
    }
    console.log(str)
}
//1.reverse All Linked
var reverseAllLinked = function (head) {
    //recursion current node to do should to do base case ```and then give childnode to recursion
    //base case
    if (head === null || head.next === null) {
        return head
    }
    var newHead = reverseAllLinked(head.next) //last node
    //switch 
    head.next.next = head
    //become last one
    head.next = null
    return newHead
}

//2.reverse Front K items
//head next k.next
var successor
var reverseLinkedFrontK = function (head, K) {
    if (head === null) return null
    if (K === 1) {
        successor = head.next
        return head
    }
    //front one item 
    var newHead = reverseLinkedFrontK(head.next, K - 1)
    //switch
    head.next.next = head
    head.next = successor
    return newHead
}
//3.reverse between m and n
//4.reverse group

//test
var list = new Linked()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)
list.insert(6)
console.log('size: ' + list.size)
list.print()

//test reverseAllLinked
// printNode(reverseAllLinked(list.head))
printNode(reverseLinkedFrontK(list.head, 3))
