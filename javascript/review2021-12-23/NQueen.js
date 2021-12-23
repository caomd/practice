/*
 * @Author: caomd
 * @Date: 2021-12-23 09:09:02
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-23 10:27:13
 */
//nqueen track one row =0  selectlist row col
var ret = []
var NQueen = function (n) {
    var trackArr = []
    //initialize
    for (var i = 0; i < n; i++) {
        trackArr[i] = []
        for (var j = 0; j < n; j++) {
            trackArr[i][j] = ''
        }
    }
    console.log(trackArr)
    backTrack(trackArr, 0)
    printNode(ret)
    return ret
}
var backTrack = function (track, row) {
    //row 
    if (track.length === row) {
        var trackTemp = JSON.parse(JSON.stringify(track))
        ret.push(trackTemp)
        return
    }
    var j = track[row].length
    for (var col = 0; col < j; col++) {
        //judge isValid Place
        if (!isValid(track, row, col)) continue
        track[row][col] = 'Q'
        backTrack(track, row + 1)
        track[row][col] = '.'
    }
}
var isValid = function (track, row, col) {
    //case same col,left top,right top
    var rows = track.length, columns = track.length
    //same column
    for (var i = 0; i < row; i++) {
        if (track[i][col] === 'Q') return false
    }
    //left top row--,col--
    for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (track[i][j] === 'Q') return false
    }
    //right top row--,col++
    for (var i = row - 1, j = col + 1; i >= 0 && j < columns; i--, j++) {
        if (track[i][j] === 'Q') return false
    }
    return true
}
var printNode = function (arr) {
    if (arr.length > 0 || arr !== null) {
        var str = ''
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i]
            for (var j = 0; j < a.length; j++) {
                for (var k = 0; k < a.length; k++) {
                    str += a[j][k] + ' ,'
                }
                str += '\n'
            }
            str += '\n'
        }
        console.log(str)
    }
}
NQueen(4)