/*
 * @Author: caomd 
 * @Date: 2021-12-21 15:37:03 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 16:09:34
 */
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
    this.removeLast = function () {
        if (this.head !== null) {
            var current = this.head, pre
            while (current.next) {
                pre = current
                current = current.next
            }
            if (pre) {
                pre.next = null
            } else {
                this.head = null
            }
            current = null
            this.size--
        }
    }
    this.contains = function (key) {
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
}
var ret = []
var permute = function (n) {
    var strace = new Linked()
    backTrace(strace, n)
    printNode(ret)
    return ret
}
var backTrace = function (strace, n) {
    if (strace.size === n.length) {
        var strace2 = new Linked()
        var current = strace.head
        while (current.next) {
            strace2.insert(current.key)
            current = current.next
        }
        strace2.insert(current.key)
        ret.push(strace2)
    }
    for (var i = 0; i < n.length; i++) {
        if (strace.contains(n[i])) continue
        strace.insert(n[i])
        backTrace(strace, n)
        strace.removeLast()
    }
}
var printNode = function (head) {
    if (head !== null) {
        for (var i = 0; i < head.length; i++) {
            var list = head[i], str = ''
            var current = list.head
            while (current.next) {
                str += current.key + ' -> '
                current = current.next
            }
            str += current.key
            console.log(str)
        }
    }
}
permute([1, 2, 3])