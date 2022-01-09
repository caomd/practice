/*
 * @Author: caomd 
 * @Date: 2021-12-27 15:22:25 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-09 17:58:56
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
var Queue = function () {
    this.items = []
    this.size = 0
    this.enqueue = function (key) {
        this.items.push(key)
        return this.size++
    }
    this.dequeue = function (key) {
        this.size--
        return this.items.shift()
    }
    this.isEmpty = function () {
        return this.size === 0
    }
}
var openLock = function (deadArr, target) {
    var deads = new Linked(), visited = new Linked()
    for (var i = 0; i < deadArr.length; i++) {
        var arr = deadArr[i].split('')
        for (var j = 0; j < arr.length; j++) {
            if (deads.contains(arr[j])) continue
            deads.insert(arr[j])
        }
    }
    var track = new Queue(), step = 0
    track.enqueue('0000')
    visited.insert('0000')
    while (!track.isEmpty()) {
        var size = track.size
        for (var i = 0; i < size; i++) {
            var current = track.dequeue()
            var validNum = current.split('')
            for (var v = 0; v < validNum.length; v++) {
                if (deads.contains(validNum[v])) continue
            }
            if (current === target) return step
            for (var j = 0; j < 4; j++) {
                var up = upWay(current, j)
                if (!visited.contains(up)) {
                    track.enqueue(up)
                    visited.insert(up)
                }
                var down = downWay(current, j)
                if (!visited.contains(down)) {
                    track.enqueue(down)
                    visited.insert(down)
                }
            }
        }
        step++
    }
    return -1
}
var upWay = function (str, i) {
    var strArr = str.split('')
    if (strArr[i] === '0') {
        strArr[i] = '9'
    } else {
        var numStr = strArr[i] * 1 - 1
        strArr[i] = numStr
    }
    return strArr.join('')
}
var downWay = function (str, i) {
    var strArr = str.split('')
    if (strArr[i] === '9') {
        strArr[i] = '0'
    } else {
        var numStr = strArr[i] * 1 + 1
        strArr[i] = numStr
    }
    return strArr.join('')
}
console.log(openLock(['8888'], '7000'))