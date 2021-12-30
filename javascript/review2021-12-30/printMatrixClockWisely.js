/*
 * @Author: caomd 
 * @Date: 2021-12-24 22:06:48 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-30 19:20:15
 */

var printMatrixClockWisely = function (arr, rows, cols) {
    if (arr.length === 0 || arr === null) return false
    var start = 0
    while (rows > start * 2 && cols > start * 2) {
        printMatrixClock(arr, rows, cols, start)
        start++
    }
}
var printMatrixClock = function (arr, rows, cols, start) {
    var endX = rows - 1 - start
    var endY = cols - 1 - start
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
    if (endX > start && endY > start) {
        for (var i = endY - 1; i >= start; i--) {
            printNum(arr[endX][i])
        }
    }
    //from bottom to top
    if (endX - 1 > start) {
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
