/*
 * @Author: caomd 
 * @Date: 2022-01-19 09:31:28 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-19 09:55:19
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
            }
            return false
        }
    }
}
var openLock = function (deaths, target) {
    var visited = new Linked(), deathsArr = new Linked(), q = new Queue(), step = 0
    visited.append('0000')
    q.enqueue('0000')
    for (var i = 0; i < deaths.length; i++) {
        var death = deaths[i].split('')
        for (var j = 0; j < death.length; j++) {
            if (deathsArr.contains(death[j])) continue
            deathsArr.append(death[j])
        }
    }
    while (q.size()) {
        var size = q.size()
        for (var n = 0; n < size; n++) {
            var cur = q.dequeue()
            var curArr = cur.split('')
            for (var i = 0; i < curArr.length; i++) {
                if (deathsArr.contains(curArr[i])) continue
            }
            if (cur === target) return step
            for (var k = 0; k < 4; k++) {
                var plus = plusOne(cur, k)
                if (!visited.contains(plus)) {
                    q.enqueue(plus)
                    visited.append(plus)
                }
                var minus = minusOne(cur, k)
                if (!visited.contains(minus)) {
                    q.enqueue(minus)
                    visited.append(minus)
                }
            }
        }
        step++
    }
    return -1
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
        strArr[index] -= 1
    }
    return strArr.join('')
}
console.log(openLock(['8888'], '7000'))