/*
 * @Author: caomd 
 * @Date: 2022-01-09 19:46:21 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-09 19:57:37
 */
var PrintMatrixClockWisely = function (arr, rows, columns) {
    var start = 0
    while (rows > start * 2 && columns > start * 2) {
        printMatrix(arr, rows, columns, start)
        start++
    }
}
var printMatrix = function (arr, rows, columns, start) {
    var endX = rows - start - 1
    var endY = columns - start - 1
    //from left to right
    for (var i = start; i <= endY; i++) {
        printNum(arr[start][i])
    }
    //from top to bottom
    for (var i = start + 1; i <= endX; i++) {
        printNum(arr[i][endY])
    }
    //from right to left
    for (var i = endY - 1; i >= start; i--) {
        printNum(arr[endX][i])
    }
    //from bottom to top
    for (var i = endX - 1; i > start; i--) {
        printNum(arr[i][start])
    }
    //from
}
var printNum = function (num) {
    console.log(num)
}

var array = [[1, 2, 8, 9, 6], [2, 4, 8, 12, 4], [4, 7, 10, 13, 2], [6, 8, 11, 15, 7], [1, 8, 9, 3, 5]]
PrintMatrixClockWisely(array, 5, 5)