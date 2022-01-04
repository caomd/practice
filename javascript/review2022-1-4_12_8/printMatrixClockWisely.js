/*
 * @Author: caomd 
 * @Date: 2022-01-04 11:35:24 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-04 12:07:34
 */
//thought rows > start * 2,columns > start*2
var printMatrixClockWisely = function (arr, rows, columns) {
    var start = 0
    while (rows > start * 2 && columns > start * 2) {
        printMatrix(arr, rows, columns, start)
        start++
    }
}
var printMatrix = function (arr, rows, columns, start) {
    var endX = rows - start - 1,
        endY = columns - start - 1
    //from left to right
    for (var i = start; i <= endY; i++) {
        printNum(arr[start][i])
    }
    //judge has columns from top to bottom
    if (endX > start) {
        for (var i = start + 1; i <= endX; i++) {
            printNum(arr[i][endY])
        }
    }
    //from right to left
    if (endX > start) {
        for (var i = endY - 1; i >= start; i--) {
            printNum(arr[endX][i])
        }
    }
    //from bottom to top
    if (endY > start && endX > start) {
        for (var i = endX - 1; i > start; i--) {
            printNum(arr[i][start])
        }
    }
}
var printNum = function (val) {
    console.log(val)
}

var array = [[1, 2, 8, 9, 6], [2, 4, 8, 12, 4], [4, 7, 10, 13, 2], [6, 8, 11, 15, 7], [1, 8, 9, 3, 5]]
printMatrixClockWisely(array, 5, 5)