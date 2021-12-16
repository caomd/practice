/*
 * @Author: caomd
 * @Date: 2021-12-16 11:56:31
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 14:29:33
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
var reverseListBetween = function (head, m, n) {
    if (head === null) return null
    if (m === 1) {
        //it means front n item reverse
        var node = reverseLinkedFrontK(head, n)
        return node
    }
    var newHead = reverseListBetween(head.next, m - 1, n - 1)
    // for example 1,2,3,4,5,6  2-4 1->4->3->2->5->6 
    head.next = newHead
    return head
}
//4.reverse group
var reverseLinkedGroup = function (head, groups) {
    if (head === null) return null
    //get front group items first group reverse well and then recursion next childNode
    var firstGrp = head, node = head
    for (var i = 0; i < groups; i++) {
        //not exist groups length nodes groups = 3 head only has two nodes so third is null 
        if (firstGrp === null) return node
        //this sentence must place here behind if 
        firstGrp = firstGrp.next
    }
    //firstGrp switch front firstGrp items
    var newHead = reverseListBetween(head, 1, groups)
    node.next = reverseLinkedGroup(firstGrp, groups)
    return newHead
    // if (node === null) {
    //     return node
    // }
    // var gNode = node, head = node
    // //find exist gNode
    // for (var i = 0; i < g; i++) {
    //     // not exist g item return head
    //     if (gNode === null) {
    //         return head
    //     }
    //     gNode = gNode.next
    // }
    // //reverse front g item
    // var newHead = reverseListBetween(node, 1, g)
    // head.next = reverseLinkedGroup(gNode, g)
    // return newHead
}
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
// printNode(reverseLinkedFrontK(list.head, 3))
// printNode(reverseListBetween(list.head, 3, 5))
printNode(reverseLinkedGroup(list.head, 3))
