/*
 * @Author: caomd 
 * @Date: 2021-12-23 19:12:16 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-24 10:17:09
 */
var Queue = function () {
    this.items = [], this.size = 0
    this.enqueue = function (key) {
        this.items.push(key)
        return this.size++
    }
    this.dequeue = function () {
        this.size--
        return this.items.shift()
    }
    this.isEmpty = function () {
        return this.size === 0
    }
}
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
                current.next = current
            }
            if (pre) {
                pre.next = current.next
            } else {
                this.head = null
                current = null
            }
            return this.size--
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
    this.isEmpty = function () {
        return this.size === 0
    }
}
var openLock = function (deadStr, target) {
    var visited = new Linked(), deads = new Linked(),
        deadArr = deadStr[0].split('')
    var q = new Queue(), step = 0
    for (var i = 0; i < deadArr.length; i++) {
        if (deads.contains(deadArr[i])) continue
        deads.insert(deadArr[i])
    }
    q.enqueue('0000')
    visited.insert('0000')
    while (!q.isEmpty()) {
        var size = q.size
        //将当前所有队列的所有结点向周围扩散
        for (var i = 0; i < size; i++) {
            var current = q.dequeue()
            if (deads.contains(current)) continue
            if (current === target) {
                return step
            }
            //put one node's adjoin node add to the queue
            for (var j = 0; j < 4; j++) {
                var up = upWay(current, j)
                if (!visited.contains(up)) {
                    q.enqueue(up)
                    visited.insert(up)
                }
                var down = downWay(current, j)
                if (!visited.contains(down)) {
                    q.enqueue(down)
                    visited.insert(down)
                }
            }
        }
        step++
    }
    return -1
}
var upWay = function (n, j) {
    var num = n.split('')
    if (num[j] === '9') num[j] = '0'
    else {
        num[j] = num[j] * 1 + 1
    }
    return num.join('')
}
var downWay = function (n, j) {
    var num = n.split('')
    if (num[j] === '0') num[j] = '9'
    else {
        num[j] = num[j] * 1 - 1
    }
    return num.join('')
}

console.log(openLock(['1111'], '8000'))