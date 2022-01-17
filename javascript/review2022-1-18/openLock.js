/*
 * @Author: caomd 
 * @Date: 2022-01-18 08:50:46 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-18 09:59:03
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
var openLock = function (deathArr, target) {
    var deathList = new Linked()
    for (var i = 0; i < deathArr.length; i++) {
        var deathStr = deathArr[i]
        var deaths = deathStr.split('')
        for (var j = 0; j < deaths.length; j++) {
            if (deathList.contains(deaths[j])) continue
            deathList.append(deaths[j])
        }
    }
    var visited = new Linked(), cur = '0000', step = 0, q = new Queue()
    visited.append('0000')
    q.enqueue('0000')
    while (!q.isEmpty()) {
        var size = q.size()
        for (var i = 0; i < size; i++) {
            var cur = q.dequeue()
            if (cur === target) return step
            for (var k = 0; k < cur.length; k++) {
                if (deathList.contains(cur[k])) continue
            }
            for (var j = 0; j < 4; j++) {
                var plus = plusOne(cur, j)
                if (!visited.contains(plus)) {
                    q.enqueue(plus)
                    visited.append(plus)
                }
                var minus = minusOne(cur, j)
                if (!visited.contains(minus)) {
                    q.enqueue(minus)
                    visited.append(minus)
                }
            }
        }
        step++
    }
    return 'not contains'
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
        strArr[index] = strArr[index] - 0 - 1
    }
    return strArr.join('')
}
console.log(openLock(['8989'], '7000'))