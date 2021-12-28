/*
 * @Author: caomd 
 * @Date: 2021-12-28 14:47:06 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-28 15:18:39
 */
var ret = []
var NQueen = function (n) {
    var trace = []
    for (var i = 0; i < n; i++) {
        trace[i] = []
        for (var j = 0; j < n; j++) {
            trace[i][j] = ''
        }
    }
    console.log(trace)
    backTrace(trace, 0)
    return ret
}
var backTrace = function (trace, row) {
    if (trace.length === row) {
        ret.push(JSON.parse(JSON.stringify(trace)))
        return
    }
    var j = trace[row].length
    for (var col = 0; col < j; col++) {
        if (!isValid(trace, row, col)) continue
        trace[row][col] = 'Q'
        backTrace(trace, row + 1)
        trace[row][col] = '.'
    }
}
var isValid = function (trace, row, col) {
    var rows = trace.length, cols = trace.length
    //same col
    for (var i = 0; i < row; i++) {
        if (trace[i][col] === 'Q') return false
    }
    //left top
    for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (trace[i][j] === 'Q') return false
    }
    //right top
    for (var i = row - 1, j = col + 1; i >= 0 && j < cols; i--, j++) {
        if (trace[i][j] === 'Q') return false
    }
    return true
}
var printRet = function (ret) {
    var str = ''
    for (var i = 0; i < ret.length; i++) {
        var matrix = ret[i]
        for (var m = 0; m < matrix.length; m++) {
            for (var n = 0; n < matrix.length; n++) {
                str += matrix[m][n] + ' -> '
            }
            str += '\n'
        }
        str += '\n'
        str += '\n'
    }
    console.log(str)
}
printRet(NQueen(4))