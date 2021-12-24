/*
 * @Author: caomd 
 * @Date: 2021-12-24 21:41:28 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-24 22:18:51
 */

var printMatrixClockWisely = function (array, rows, columns) {
    if (array.length === 0 || array === null) return false
    if (rows === null || columns === null) return false
    var start = 0
    while (rows > start * 2 && columns > start * 2) {
        printMatrixClock(array, rows, columns, start)
        start++
    }
}
var printMatrixClock = function (arr, rows, columns, start) {
    var endX = rows - 1 - start
    var endY = columns - 1 - start
    //from left to right
    if (endY > start) {
        for (var i = start; i <= endY; i++) {
            printNum(arr[start][i])
        }
    }
    //from top to bottom
    if (endX > start) {
        for (var i = start + 1; i <= endX; i++) {
            printNum(arr[i][endY])
        }
    }
    //from right to left
    if (endX > start) {
        for (var i = endY - 1; i > 0; i--) {
            printNum(arr[endX][i])
        }
    }
    //from bottom to top
    if (endY > start && endX - 1 > start) {
        for (var i = endX - 1; i > start; i--) {
            printNum(arr[i][start])
        }
    }
}
var printNum = function (num) {
    console.log(num)
}
var array = [[1, 2, 8, 9], [2, 4, 8, 12], [4, 7, 10, 13], [6, 8, 11, 15]]
printMatrixClockWisely(array, 4, 4)