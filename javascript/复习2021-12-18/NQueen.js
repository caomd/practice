/*
 * @Author: caomd 
 * @Date: 2021-12-20 13:51:01 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 15:06:15
 */
var Linked = function () {
    var Node = function (key) {
        this.key = null
        this.next = null
    }
    this.head = null
    this.size = 0
    this.insert = function (key) {
        var newNode = new Node(key)
        if (this.head === null) this.size++; return this.head = newNode
        var current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
        return this.size++
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
            }
        }
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
}
var res = []
var NQueen = function (n) {
    //rule same row column left top right top
    //initData
    var trackStr = []
    for (var i = 0; i < n; i++) {
        trackStr[i] = []
        for (var j = 0; j < n; j++) {
            trackStr[i][j] = ''
        }
    }
    var track = new Linked()
    printArr(trackStr)
    backTrack(trackStr, 0)
    console.log(res)
    return res
}
var backTrack = function (trackStr, row) {
    if (trackStr.length === row) {
        //trackStr every address same cover before value
        res.push(JSON.parse(JSON.stringify(trackStr)))
        return
    }
    var n = trackStr[row].length
    for (var col = 0; col < n; col++) {
        //judge valid
        var ret = isValid(trackStr, row, col)
        if (!ret) continue
        trackStr[row][col] = 'Q'
        backTrack(trackStr, row + 1)
        trackStr[row][col] = '.'
    }
}
var isValid = function (track, i, j) {
    //left top
    var n = track.length
    for (var row = 0; row < i; row++) {
        if (track[row][j] === 'Q') return false
    }
    //right top
    for (var row = i - 1, col = j + 1; row >= 0 && col <= n; row--, col++) {
        if (track[row][col] === 'Q') return false
    }
    //same column
    for (var row = i - 1, col = j - 1; row >= 0 && col >= 0; row--, col--) {
        if (track[row][col] === 'Q') {
            return false
        }
    }
    return true
}
var printArr = function (str) {
    var print = ''
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length; j++) {
            print += str[i][j] + ' , '
        }
        print += '\n'
    }
    console.log(print)
}
NQueen(4)