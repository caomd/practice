/*
 * @Author: caomd 
 * @Date: 2021-12-15 18:52:34 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-15 21:54:47
 */
var res = []
function solveNQueen(n) {
    var board = [[]]
    initializeBoard(board, n)
    console.log(board)
    backtrack(board, 0)
    return res
}
var initializeBoard = function (board, n) {
    for (var i = 0; i < n; i++) {
        board[i] = []
        for (var j = 0; j < n; j++) {
            board[i][j] = ''
        }
    }
}
var backtrack = function (board, row) {
    //tirgger end condition
    if (board.length === row) {
        var newData = JSON.parse(JSON.stringify(board))
        res.push(newData)
        return
    }
    var n = board[row].length
    for (var col = 0; col < n; col++) {
        //judge isValid
        if (!isValid(board, row, col)) continue
        //make choice
        board[row][col] = 'Q'
        //enter next decision tree
        backtrack(board, row + 1)
        //cancel choice
        board[row][col] = '.'
    }
}
function isValid(board, row, col) {
    var n = board.length
    for (var i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false
    }
    //check right top conflict
    for (var i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false
    }
    //check left top
    for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false
    }
    return true
}
function printMatrix(matrix) {
    var str = ''
    for (var k = 0; k < matrix.length; k++) {
        for (var i = 0; i < matrix[k].length; i++) {
            var row = matrix[k]
            str += '[' + row[i].join(' , ')
            str += ']\n'
        }
        str += '**************\n'
    }
    console.log(str)

}
var Nqueens = solveNQueen(4)
printMatrix(Nqueens)