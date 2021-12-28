/*
 * @Author: caomd 
 * @Date: 2021-12-26 11:03:58 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-27 12:57:52
 */
//from one row start row = 0 put correct place 
var res = []
var Nqueen = function (n) {
    var track = []
    for (var row = 0; row < n; row++) {
        track[row] = []
        for (var col = 0; col < n; col++) {
            track[row][col] = ''
        }
    }
    console.log(track)
    backTrack(track, 0)
    printRestult(res)
    return res
}
var backTrack = function (track, row) {
    if (track.length === row) {
        res.push(JSON.parse(JSON.stringify(track)))
        return
    }
    var col = track[row].length
    for (var i = 0; i < col; i++) {
        //judge
        if (!isValidPlace(track, row, i)) continue
        track[row][i] = 'Q'
        backTrack(track, row + 1)
        track[row][i] = '.'
    }
}
var isValidPlace = function (track, row, col) {
    var rows = track.length, columns = track.length
    //same column
    for (var i = 0; i < row; i++) {
        if (track[i][col] === 'Q') return false
    }
    //left top
    for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (track[i][j] === 'Q') return false
    }
    //right top
    for (var i = row - 1, j = col + 1; i >= 0 && j < columns; i--, j++) {
        if (track[i][j] === 'Q') return false
    }
    return true
}
var printRestult = function (result) {
    var str = ''
    for (var i = 0; i < result.length; i++) {
        var a = result[i]
        for (var m = 0; m < a.length; m++) {
            for (var n = 0; n < a.length; n++) {
                str += a[m][n] + ' ,'
            }
            str += '\n'
        }
        str += '\n'
    }
    console.log(str)
}
Nqueen(4)