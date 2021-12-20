/*
 * @Author: caomd
 * @Date: 2021-12-15 09:11:50
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 18:51:40
 */
//permute think three aspect 1.path all select 2.selection list 3.add path and end condition
var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null
    this.size = 0
    this.isEmpty = function () {
        return this.size === 0
    }
    this.add = function (key) {
        var node = new Node(key)
        if (this.head === null) {
            this.head = node
        } else {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        return this.size++
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
        if (this.head !== null) {
            var current = this.head, pre
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
            // this.head = null
            // this.size = 0
        }
    }
    this.print = function () {
        var nodeStr = ''
        if (this.head !== null) {
            var current = this.head
            while (current.next) {
                nodeStr += current.key + ' -> '
                current = current.next
            }
            nodeStr += current.key
        }
        console.log(nodeStr)
    }
}
var res = []
var track = new Linked()
function permute(numArr) {
    backTrace(numArr, track)
    return res
}
function backTrace(numArr, track) {
    if (track.size === numArr.length) {
        var track2 = new Linked()
        var current = track.head
        while (current.next) {
            track2.add(current.key)
            current = current.next
        }
        track2.add(current.key)
        res.push(track2)
        return
    }
    for (var i = 0; i < numArr.length; i++) {
        //judge track contains numArr[i]
        if (track.contains(numArr[i])) {
            continue
        };
        //not contains
        track.add(numArr[i])
        //other decision tree
        backTrace(numArr, track)
        //delete track select
        track.removeLast()
    }
}
var result = permute([1, 2, 3])
for (var i = 0; i < result.length; i++) {
    result[i].print()
}
//test
var list = new Linked()
list.add(1)
list.add(2)
list.add(3)
// list.print()