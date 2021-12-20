/*
 * @Author: caomd
 * @Date: 2021-12-20 18:10:02
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 18:52:01
 */
//permute
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
            return this.size--
        }
    }
    this.contains = function (key) {
        if (this.head !== null) {
            var current = this.head
            while (current.next) {
                if (key === current.key) {
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
var print = function (link) {
    if (link !== null) {
        for (var i = 0; i < link.length; i++) {
            var current = link[i].head, str = ''
            while (current.next) {
                str += current.key + ' -> '
                current = current.next
            }
            str += current.key
            console.log(str)
        }
    }
}
var ret = []
var permute = function (n) {
    var strace = new Linked()
    backTrace(strace, n)
    console.log(ret)
    print(ret)
    return ret
}
var backTrace = function (strace, n) {
    if (strace.size === n.length) {
        var temp = new Linked()
        var current = strace.head
        while (current.next) {
            temp.insert(current.key)
            current = current.next
        }
        temp.insert(current.key)
        ret.push(temp)
        return
    }
    for (var i = 0; i < n.length; i++) {
        if (strace.contains(n[i])) continue
        strace.insert(n[i])
        backTrace(strace, n)
        strace.removeLast()
    }
}

permute([1, 2, 3])