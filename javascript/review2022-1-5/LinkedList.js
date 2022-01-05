/*
 * @Author: caomd 
 * @Date: 2022-01-05 09:21:16 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-05 12:12:43
 */

var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    var head = null, size = 0, tail = null
    this.appendHead = function (key) {
        var newNode = new Node(key)
        if (head === null && head === tail) {
            head = newNode
            tail = newNode
        } else {
            newNode.next = head
            head = newNode
        }
        return size++
    }
    this.appendTail = function (key) {
        var newNode = new Node(key)
        tail.next = newNode
        tail = newNode
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
    this.insertIndex = function (key, pos) {
        if (pos < 0 || pos > size) return false
        var newNode = new Node(key), i = 0, cur = head
        if (pos === 0) {
            this.appendHead(key)
        } else if (pos === size) {
            this.appendTail(key)
        } else {
            var preNode = this.getPreNode(pos)
            newNode.next = preNode.next
            preNode.next = newNode
        }
        return size++
    }
    this.removeAllLinked = function () {
        var cur, m = head
        while (m) {
            cur = m.next
            m = null
            size--
            m = cur
        }
        head = null
        size--
        return size
    }
    this.print = function () {
        var cur = head, str = ''
        if (head === null) return console.log('no head')
        while (cur.next) {
            str += cur.key + ' -> '
            cur = cur.next
        }
        str += cur.key
        console.log(str)
    }
}
var list = new Linked()
list.appendHead(1)
list.appendHead(2)
list.appendHead(3)
list.insertIndex(4, 0)
list.insertIndex(5, 1)
console.log(list.getPreNode(1))
list.removeAllLinked()
list.print()

//staticLinkedlist maxSize = 1000,space各分量链接成备用链表
var maxSize = 1000, space = []
var staticLinked = function () {
    this.initList = function () {
        for (var i = 0; i < maxSize; i++) {
            space[i].cur = i + 1
        }
        //lastone save 0
        space[maxSize - 1].cur = 0
        return ok
    }
    this.insert = function (space) {
        var i = space[0].cur
        if (space[0].cur) {
            space[0].cur = space[i].cur

        }
        return i
    }
}
var doubleLinkedList = function () {
    var Node = function (key) {
        this.key = key
        this.piror = null
        this.next = null
    }
    var head = null, tail = null, size = 0
    this.append = function (key) {
        var newNode = new Node(key)
        if (head === null) {
            head = newNode
            tail = newNode
        } else {
            newNode.next = head
            head.piror = newNode
            head = newNode
        }
        return size++
    }
    this.appendTail = function (key) {
        var newNode = new Node(key)
        tail.next = newNode
        newNode.piror = tail
        tail = newNode
        return size++
    }
    this.insertIndex = function (key, pos) {
        var newNode = new Node(key)
        if (pos < 0 || pos > size) return console.log('out of range')
        if (pos === 0) {
            this.append(key)
        } else if (pos === size) {
            this.appendTail(key)
        } else {
            var cur = head, i = 0
            while (i < pos) {
                cur = cur.next
                i++
            }
            newNode.piror = cur.piror
            cur.piror.next = newNode
            newNode.next = cur
            cur.piror = newNode
            return size++
        }
    }
    this.deleteNode = function (pos) {
        if (pos < 0 || pos > size) return console.log('out of range')
        if (pos === 0) {
            head = head.next
            head.piror = null
        } else if (pos === size) {
            var cur = head, pre = null
            while (cur.next) {
                pre = cur
                cur = cur.next
            }
            pre.next = null
            cur.piror = null
            cur = null
        } else {
            var i = 0, cur = head
            while (i < pos) {
                cur = cur.next
                i++
            }
            cur.piror.next = cur.next
            cur.next.piror = cur.piror
            cur = null
        }
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
var doubleLinked = new doubleLinkedList()
doubleLinked.append(1)
doubleLinked.append(3)
doubleLinked.appendTail(2)
doubleLinked.appendTail(4)
doubleLinked.insertIndex(5, 1)
doubleLinked.insertIndex(6, 0)
doubleLinked.deleteNode(1)
doubleLinked.print()