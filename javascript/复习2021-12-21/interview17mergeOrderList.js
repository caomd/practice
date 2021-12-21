/*
 * @Author: caomd 
 * @Date: 2021-12-21 12:42:28 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 13:41:46
 */
var Linked = function () {
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
            console.log(str)
        }
    }
}
var mergeOrderList = function (list1, list2) {
    if (list1 === null && list2 === null) return null
    else if (list1 === null && list2 !== null) return list2
    else if (list1 !== null && list2 === null) return list1
    else {
        list1 = mergeOrder(list1, list2)
        print(list1)
    }
}

var mergeOrder = function (head1, head2) {
    if (head1 === null && head2 !== null) return head2
    if (head2 === null && head1 !== null) return head1
    var newHead = null
    if (head1.key <= head2.key) {
        newHead = head1
        newHead.next = mergeOrder(head1.next, head2)
        return newHead
    }
    if (head1.key > head2.key) {
        newHead = head2
        newHead.next = mergeOrder(head1, head2.next)
        return newHead
    }
}
var print = function (head) {
    if (head !== null) {
        var current = head, str = ''
        while (current.next) {
            str += current.key + ' -> '
            current = current.next
        }
        str += current.key
        console.log(str)
    }
}
var linked = new Linked()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(5)
linked.append(6)
linked.print()
var list2 = new Linked()
list2.append(3)
list2.append(4)
list2.append(8)
list2.append(9)
list2.print()

mergeOrderList(linked.head, list2.head)