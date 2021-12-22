/*
 * @Author: caomd 
 * @Date: 2021-12-21 22:09:27 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-22 11:46:33
 */
//
var Queue = function () {
    var items = []
    this.size = 0
    this.enqueue = function (key) {
        items.push(key)
        return this.size++
    }
    this.dequeue = function () {
        this.size--
        return items.shift()
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
        if (this.head !== null) {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        } else {
            this.head = newNode
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
}
var openLock = function (deadends, target) {
    var deads = new Linked(), visited = new Linked()
    q = new Queue(), step = 0
    q.enqueue('0000')
    visited.insert('0000')
    for (var i = 0; i < deadends.length; i++) {
        var deadendsArr = deadends[i].split('')
        for (var j = 0; j < deadendsArr.length; j++) {
            if (deads.contains(deadendsArr[j])) continue
            deads.insert(deadendsArr[j])
        }
    }
    while (!q.isEmpty()) {
        var size = q.size
        console.log('size' + size)
        for (var i = 0; i < size; i++) {
            var cur = q.dequeue()
            //check password whether valid and to end
            if (deads.contains(cur)) continue
            if (cur === target) return step
            //put not visited into queue
            for (var j = 0; j < 4; j++) {
                var up = plusOne(cur, j)
                if (!visited.contains(up)) {
                    q.enqueue(up)
                    visited.insert(up)
                }
                var down = minusOne(cur, j);
                if (!visited.contains(down)) {
                    q.enqueue(down)
                    visited.insert(down)
                }
            }
        }
        step++
    }
    //if exhaustion not found password return -1
    return -1
}
var minusOne = function (str, j) {
    var strArr = str.split('')
    if (strArr[j] === '0') strArr[j] = '9'
    else {
        strArr[j] -= 1
    }
    return strArr.join('')
}
var plusOne = function (str, j) {
    var strArr = str.split('')
    if (strArr[j] === '9') strArr[j] = '0'
    else {
        var ret = Number(strArr[j])
        ret += 1
        strArr[j] = ret
    }
    return strArr.join('')
}
//print all password situation 
var BFS = function (target) {
    var q = new Queue()
    q.enqueue('0000')
    while (!q.isEmpty()) {
        var size = q.size
        for (var i = 0; i < size; i++) {
            var cur = q.dequeue()
            //judge whether to final station
            console.log('cur', cur)
            //put adjoin into queue
            for (var i = 0; i < 4; i++) {
                var up = plusOne(cur, i)
                var down = minusOne(cur, i)
                q.enqueue(up)
                q.enqueue(down)
            }
        }
    }
    return
}
// BFS('1200')
console.log(openLock(['8888'], '8000'))
