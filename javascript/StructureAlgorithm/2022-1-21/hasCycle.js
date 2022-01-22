/*
 * @Author: caomd 
 * @Date: 2022-01-21 09:44:33 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-21 13:08:58
 */
var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null, size = 0
    this.append = function (key) {
        var newNode = new Node(key), i = 0, cycleHead = null
        if (this.head === null) {
            this.head = newNode
        } else {
            var cur = this.head
            while (cur.next) {
                cur = cur.next
                // if (++i === 3 && size >= 4) {
                //     cycleHead = cur
                // }
            }
            cur.next = newNode
            newNode.next = cycleHead
        }
        return size++
    }
    this.toString = function () {
        if (this.head !== null) {
            var cur = this.head, str = '', i = 0
            while (i++ !== size) {
                str += cur.key + ' -> '
                cur = cur.next
            }
            str += cur && cur.key || ''
        }
        console.log(str)
    }
}
var hasCycle = function (head) {
    var fast = slow = head
    while (fast !== null && fast.next !== null) {
        //fast every time proceed two steps
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) return true
    }
    return false
}
var detectCycle = function (head) {
    var fast = slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) break
    }
    slow = head
    while (slow !== fast) {
        fast = fast.next
        slow = slow.next
    }
    //两个指针相遇的那个单链表节点就是环的起点
    return slow.key
}
var midCycle = function (head) {
    var fast = slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow.key
}
var list = new Linked()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
// list.append(6)
list.toString()
console.log('has Cycle: ' + hasCycle(list.head))
// console.log('cycle head: ' + detectCycle(list.head))
console.log('no cycle mid Cycle: ' + midCycle(list.head))