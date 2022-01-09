/*
 * @Author: caomd 
 * @Date: 2022-01-09 16:44:03 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-09 19:04:57
 */
var Queue = function () {
    var items = [], size = 0
    this.enqueue = function (key) {
        items.push(key)
        return size++
    }
    this.dequeue = function () {
        size--
        return items.shift()
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.size = function () {
        return size
    }
    this.contains = function (key) {
        for (var i = 0; i < items.length; i++) {
            if (items[i] === key) {
                return true
            }
        }
        return false
    }
}
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
var res = []
var openLock = function (deadArr, target) {
    //orderTraverse  bfs
    var trace = new Queue(), visited = '', deathArr = new Linked(), step = 0
    visited = new Linked()
    trace.enqueue('0000')
    visited.append('0000')
    for (var i = 0; i < deadArr.length; i++) {
        var deadStrArr = deadArr[i].split('')
        for (var i = 0; i < deadStrArr.length; i++) {
            var dead = deadStrArr[i]
            if (!deathArr.contains(dead)) {
                deathArr.append(dead)
            }
        }
    }
    while (!trace.isEmpty()) {
        var size = trace.size()
        for (var i = 0; i < size; i++) {
            var cur = trace.dequeue()
            var curArr = cur.split('')
            for (var m = 0; m < curArr.length; m++) {
                if (deathArr.contains(curArr[m])) continue
            }
            if (cur === target) return step
            for (var j = 0; j < cur.length; j++) {
                var plus = plusOne(cur, j)
                if (!visited.contains(plus)) {
                    trace.enqueue(plus)
                }
                var minus = minusOne(cur, j)
                if (!visited.contains(minus)) {
                    trace.enqueue(minus)
                }
            }
        }
        step++
    }
}
var plusOne = function (str, index) {
    var strArr = str.split('')
    if (strArr[index] === '9') {
        strArr[index] = '0'
    } else {
        strArr[index] = strArr[index] - 0 + 1
    }
    return strArr.join('')
}
var minusOne = function (str, index) {
    var strArr = str.split('')
    if (strArr[index] === '0') {
        strArr[index] = '9'
    } else {
        strArr[index] = strArr[index] - 1
    }
    return strArr.join('')
}

console.log(openLock(['8888'], '7000'))