/*
 * @Author: caomd 
 * @Date: 2021-12-11 09:05:42 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-11 09:18:54
 */
var LinkedList = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    var head = null, size = 0
    this.insert = function (key) {
        var node = new Node(key)
        if (head === null) {
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
    this.find = function (key) {
        if (head !== null) {
            return findNode(head, key)
        }
    }
    var findNode = function (node, key) {
        if (node !== null) {
            var current = node
            while (current.next) {
                if (current.key === key) {
                    return current
                    break
                }
                current = current.next
            }
            if (current.key === key) {
                return current
            }
        } else {
            return false
        }
    }
    this.toString = function () {
        var s = ''
        if (head !== null) {
            var current = head
            while (current.next) {
                s += current.key + '  '
                current = current.next
            }
            s += current.key
            console.log(s)
        }
    }
}

var link = new LinkedList()
link.insert(1)
link.insert(2)
link.insert(4)
link.insert(6)
link.insert(5)
link.insert(3)
link.toString()
console.log(link.find(6))
console.log(link.find(1))
