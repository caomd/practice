/*
 * @Author: caomd 
 * @Date: 2021-12-21 20:34:03 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 21:22:29
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
    this.remove = function (key) {
        if (this.head !== null) {
            var current = this.head, pre
            while (current.next) {
                pre = current
                current = current.next
                if (current.key === key) {
                    pre.next = current.next
                    break
                }
            }
            if (current.key === key) {
                current = null
            }
        }
    }
    this.find = function (key) {
        if (this.head !== null) {
            var current = this.head
            while (current.next) {
                if (current.key === key) {
                    return true
                }
                current = current.next
            }
            if (current.key === key) {
                return true
            } else {
                return false
            }
        }
    }
    this.insertPos = function (key, pos) {
        if (this.head !== null) {
            var newNode = new Node(key)
            var i = 0, current = this.head
            while (i++ < pos) {
                current = current.next
            }
            var next = current.next
            current.next = newNode
            newNode.next = next
            return this.size++
        }
    }
    this.removePos = function (pos) {
        if (this.head !== null) {
            if (pos >= 0) {
                var i = 0, current = this.head, pre
                while (i++ < pos) {
                    pre = current
                    current = current.next
                }
                if (pre) {
                    pre.next = current.next
                } else {
                    current = current.next
                }
            }
        }
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
var linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(5)
linked.append(6)
linked.print()
linked.insertPos(11, 1)
linked.print()
linked.removePos(1)
linked.print()
linked.remove(4)
linked.print()
console.log(linked.find(4))