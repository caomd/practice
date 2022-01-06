/*
 * @Author: caomd 
 * @Date: 2022-01-06 16:02:07 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 16:36:24
 */
//thought stack selected list and equals n push result array,and from row = 0 util row=n end 
var res = []
var NQueen = function (n) {
    //step 1 initalize stack
    var stack = []
    for (var i = 0; i < n; i++) {
        stack[i] = []
        for (var j = 0; j < n; j++) {
            stack[i][j] = ' '
        }
    }
    // console.log(stack)
    backTrace(stack, 0)
    printMatrix(res)
    return res
}
var backTrace = function (stack, row) {
    var length = stack.length
    if (length === row) {
        res.push(JSON.parse(JSON.stringify(stack)))
    }
    var j = length
    for (var col = 0; col < j; col++) {
        //isValid and then stack[row][col] = 'Q'
        if (!isValid(stack, row, col)) continue
        stack[row][col] = 'Q'
        backTrace(stack, row + 1)
        stack[row][col] = '.'
    }
}
var isValid = function (stack, row, col) {
    var rows = stack.length, columns = stack.length
    //same column
    for (var i = 0; i < row; i++) {
        if (stack[i][col] === 'Q') return false
    }
    //left top
    for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (stack[i][j] === 'Q') return false
    }
    //right top
    for (var i = row - 1, j = col + 1; i >= 0 && j < columns; i--, j++) {
        if (stack[i][j] === 'Q') return false
    }
    return true
}
var printMatrix = function (matrixArr) {
    var length = matrixArr.length, str = ''
    for (var i = 0; i < length; i++) {
        var cur = matrixArr[i]
        for (var c = 0; c < cur.length; c++) {
            for (var j = 0; j < cur.length; j++) {
                str += cur[c][j] + ', '
            }
            str += '\n'
        }
        str += '\n'
    }
    console.log(str)
}
NQueen(4)