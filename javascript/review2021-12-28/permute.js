/*
 * @Author: caomd 
 * @Date: 2021-12-28 12:48:19 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-28 14:46:39
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
        this.size++
    }
    this.removeLast = function () {
        if (this.head !== null) {
            var current = this.head, pre = null
            while (current.next) {
                pre = current
                current = current.next
            }
            if (pre) {
                pre.next = null
            } else {
                current = null
                this.head = null
            }
            this.size--
        }
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
var ret = []
var permute = function (arr) {
    var strace = new Linked()
    backTrack(strace, arr)
    console.log(ret, 'ret....')
    return ret
}
var backTrack = function (track, arr) {
    if (track.size === arr.length) {
        var strace2 = new Linked()
        var cur = track.head
        while (cur.next) {
            strace2.insert(cur.key)
            cur = cur.next
        }
        strace2.insert(cur.key)
        ret.push(strace2)
    }
    for (var i = 0; i < arr.length; i++) {
        if (track.contains(arr[i])) continue
        track.insert(arr[i])
        backTrack(track, arr)
        track.removeLast()
    }
}
var printRet = function (ret) {
    var str = ''
    for (var i = 0; i < ret.length; i++) {
        var head = ret[i].head
        var cur = head
        while (cur.next) {
            str += cur.key + ' -> '
            cur = cur.next
        }
        str += cur.key + '\n'
    }
    console.log(str)
}
printRet(permute([1, 2, 3]))