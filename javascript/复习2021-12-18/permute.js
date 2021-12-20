/*
 * @Author: caomd 
 * @Date: 2021-12-18 22:35:03 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 18:52:46
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
            this.size++
            return this.head = newNode
        }
        var current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
        return this.size++
    }
    this.has = function (key) {
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
    this.removeLastOne = function () {
        if (this.head !== null) {
            var current = this.head, pre
            while (current.next) {
                pre = current
                current = current.next
            }
            if (pre) {
                pre.next = null
            } else {
                this.head = null
            }
            this.size--
        }
    }
    this.print = function () {
        if (this.head !== null) {
            var str = '', current = this.head
            while (current.next) {
                str += current.key + ' -> '
                current = current.next
            }
            str += current.key
            console.log(str)
        }
    }
}
var ret = []
var permute = function (n) {
    //definition path selected and selectList 
    var track = new Linked()
    backTrace(track, n)
    return ret
}
function backTrace(track, n) {
    if (track.size === n.length) {
        var track2 = new Linked()
        var current = track.head
        while (current.next) {
            track2.insert(current.key)
            current = current.next
        }
        track2.insert(current.key)
        ret.push(track2)
        console.log(ret)
        print(ret)
        return
    }
    for (var i = 0; i < n.length; i++) {
        if (track.has(n[i])) continue
        track.insert(n[i])
        backTrace(track, n)
        //remove last one
        track.removeLastOne()
    }
}
var print = function (ret) {
    if (ret !== null) {
        for (var i = 0; i < ret.length; i++) {
            var current = ret[i].head, str = ''
            while (current.next) {
                str += current.key + ' -> '
                current = current.next
            }
            str += current.key
        }
        console.log(str)
    }
}
permute([1, 2, 3])