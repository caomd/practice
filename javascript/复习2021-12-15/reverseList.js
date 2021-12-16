/*
 * @Author: caomd
 * @Date: 2021-12-15 12:29:56
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 14:25:31
 */
//linked 
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
            var str = '', current = this.head
            while (current.next) {
                str += current.key + ' -> '
                current = current.next
            }
            str += current.key
        }
        console.log('node is: ' + str)
    }
}
var reverseAll = function (head) {
    if (head === null || head.next === null) {
        return head
    }
    //switch pre and end head.next = null last => first
    //find first
    var first = reverseAll(head.next)
    head.next.next = head
    head.next = null
    return first
}
var successor
var reverseFronN = function (node, k) {
    //reverse font k
    //base case
    if (node === null || k === 1) {
        successor = node.next
        return node
    }
    //childNode or nextNode except head
    var newNode = reverseFronN(node.next, k - 1)
    //switch pre and next
    node.next.next = node
    node.next = successor
    return newNode
}

var reverseListGroup = function (node, g) {
    //base case when not group nodes find traverse util g and reverse node head to node g and put after node g  regard as child problem recursiion this part node 
    //if g smaller than size do nothing 
    if (node === null) {
        return node
    }
    var gNode = node, head = node
    //find exist gNode
    for (var i = 0; i < g; i++) {
        // not exist g item return head
        if (gNode === null) {
            return head
        }
        gNode = gNode.next
    }
    //reverse front g item
    var newHead = reverseBetween(node, 1, g)
    head.next = reverseListGroup(gNode, g)
    return newHead
}

var reverseBetween = function (node, m, n) {
    if (node === null) {
        return node
    }
    if (m === 1) {
        //front n item reverse
        node = reverseFronN(node, n)
        return node
    }
    var newHead = reverseBetween(node.next, m - 1, n - 1)
    node.next = newHead
    return node


}
var printNode = function (node) {
    var current = node, str = ''
    while (current.next) {
        str += current.key + ' -> '
        current = current.next
    }
    str += current.key
    console.log('node print: ' + str)
}

var linked = new Linked()
linked.insert(1)
linked.insert(2)
linked.insert(3)
linked.insert(4)
linked.insert(5)
linked.insert(6)
linked.print()
// var reverse = reverseAll(linked)
// printNode(reverse)
// var reverseFrontK = reverseFronN(linked.head, 3)
// printNode(reverseFrontK)
//btweent
// var btReverse = reverseBetween(linked.head, 2, 4)
// printNode(btReverse)
//group
var reverseGr = reverseListGroup(linked.head, 3)
printNode(reverseGr)