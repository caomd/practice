/*
 * @Author: caomd 
 * @Date: 2021-12-25 22:05:52 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-25 22:32:33
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
            var current = this.head, pre = null
            while (current.next) {
                pre = current
                current = current.next
            }
            if (pre) {
                pre.next = current.next
            } else {
                current = null
                this.head = null
            }
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
var res = []
var permute = function (arr) {
    var track = new Linked()
    backTrack(track, arr)
    return res
}
var backTrack = function (track, arr) {
    if (track.size === arr.length) {
        var track2 = new Linked()
        var current = track.head
        while (current.next) {
            track2.insert(current.key)
            current = current.next
        }
        track2.insert(current.key)
        res.push(track2)
    }
    for (var i = 0; i < arr.length; i++) {
        if (track.contains(arr[i])) continue
        track.insert(arr[i])
        backTrack(track, arr)
        track.removeLast()
    }
}
var print = function (res) {
    for (var i = 0; i < res.length; i++) {
        var one = res[i]
    }
}
permute([1, 2, 3])