/*
 * @Author: caomd
 * @Date: 2021-12-23 08:43:17
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-23 09:08:41
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
    this.isEmpty = function () {
        return this.size === 0
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
    this.removeLast = function () {
        if (this.head === null) return null
        var current = this.head, pre = null
        while (current.next) {
            pre = current
            current = current.next
        }
        if (pre) {
            pre.next = null
        } else {
            this.head = null
            current = null
        }
        this.size--
    }
}
//permute track selectlist judge contains  removeLast
var ret = []
var permute = function (nArr) {
    var track = new Linked()
    backtrack(track, nArr)
    console.log(ret)
    printNode(ret)
    return ret
}
var backtrack = function (track, nArr) {
    //judge length
    if (track.size === nArr.length) {
        var track2 = new Linked()
        var current = track.head
        while (current.next) {
            track2.append(current.key)
            current = current.next
        }
        track2.append(current.key)
        ret.push(track2)
        return
    }
    for (var i = 0; i < nArr.length; i++) {
        //judge contains
        if (track.contains(nArr[i])) continue
        track.append(nArr[i])
        backtrack(track, nArr)
        track.removeLast()
    }
}
var printNode = function (list) {
    if (list === null || list.length <= 0) return null
    var str = ''
    for (var i = 0; i < list.length; i++) {
        var linked = list[i]
        var current = linked.head
        while (current.next) {
            str += current.key + ' -> '
            current = current.next
        }
        str += current.key + '\n'
    }
    console.log(str)
}
permute([1, 2, 3])