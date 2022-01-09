/*
 * @Author: caomd 
 * @Date: 2022-01-09 16:19:46 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-09 16:43:10
 */
var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null, size = 0
    this.append = function (key) {
        var newNode = new Node(key)
        if (this.head === null) {
            this.head = newNode
        } else {
            var cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            cur.next = newNode
        }
        return size++
    }
    this.removeLast = function () {
        if (this.head !== null) {
            var cur = this.head, pre
            while (cur.next) {
                pre = cur
                cur = cur.next
            }
            if (pre) {
                pre.next = cur.next
            } else {
                cur = cur.next
                this.head = null
            }
            return size--
        }
    }
    this.size = function () {
        return size
    }
    this.contains = function (key) {
        if (this.head !== null) {
            var cur = this.head
            while (cur.next) {
                if (cur.key === key) {
                    return true
                }
                cur = cur.next
            }
            if (cur.key === key) {
                return true
            } else {
                return false
            }
        }
    }
}
//thought trace selected list arr select list when trace.length == res.length res.push(trace) trace.removeLast 
var ret = []
var permute = function (arr) {
    var trace = new Linked()
    backTrace(trace, arr)
    return ret
}
var backTrace = function (trace, arr) {
    if (arr.length === trace.size()) {
        var list = new Linked(), cur = trace.head
        while (cur.next) {
            list.append(cur.key)
            cur = cur.next
        }
        list.append(cur.key)
        ret.push(list.head)
        return ret
    }
    for (var i = 0; i < arr.length; i++) {
        if (trace.contains(arr[i])) continue
        trace.append(arr[i])
        backTrace(trace, arr)
        trace.removeLast()
    }
}
console.log(permute([1, 2, 3]))