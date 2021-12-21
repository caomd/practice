/*
 * @Author: caomd 
 * @Date: 2021-12-21 16:09:50 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 17:14:24
 */
var ret = []
var Nqueen = function (n) {
    var trace = []
    //initialize
    for (var i = 0; i < n; i++) {
        trace[i] = []
        for (var j = 0; j < n; j++) {
            trace[i][j] = ''
        }
    }
    backTrace(trace, 0)
    printNode(ret)
    return ret
}
var backTrace = function (trace, row) {
    if (trace.length === row) {
        var trace2 = JSON.parse(JSON.stringify(trace))
        ret.push(trace2)
        return
    }
    var col = trace[row].length
    for (var i = 0; i < col; i++) {
        //judge 
        if (!isValid(trace, i, row)) continue
        trace[row][i] = 'Q'
        backTrace(trace, row + 1)
        trace[row][i] = '.'
    }
}
var isValid = function (trace, col, row) {
    //same col
    for (var i = 0; i < row; i++) {
        if (trace[i][col] === 'Q') return false
    }
    //left top
    for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; j--, i--) {
        if (trace[i][j] === 'Q') return false
    }
    //right top
    for (var i = row - 1, j = col + 1; i >= 0 && j < trace.length; i--, j++) {
        if (trace[i][j] === 'Q') return false
    }
    return true
}
var printNode = function (ret) {
    var strArr = ''
    for (var i = 0; i < ret.length; i++) {
        var matrix = ret[i]
        for (var j = 0; j < matrix.length; j++) {
            strArr += matrix[j]
            strArr += '\n'
        }
        strArr += '\n'
    }
    console.log(strArr)
}
Nqueen(4)