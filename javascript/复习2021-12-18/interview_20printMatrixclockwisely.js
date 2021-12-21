/*
 * @Author: caomd 
 * @Date: 2021-12-20 21:53:12 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 08:55:12
 */
//circle final condition colums > start * 2 and rows > start * 2
var PrintMatrixClockWisely = function (arr, col, row) {
    if (arr === null || col <= 0 || row <= 0) {
        return
    }
    var start = 0
    while (col > start * 2 && row > start * 2) {
        printMatrix(arr, col, row, start)
        start++
    }
}
var printMatrix = function (arr, col, row, start) {
    var endX = col - 1 - start
    var endY = col - 1 - start
    //form left to right
    for (var i = start; i <= endY; i++) {
        var num = arr[start][i]
        print(num)
    }
    //top to bottom
    if (start < endX) {
        for (var i = start + 1; i <= endX; i++) {
            print(arr[i][endY])
        }
    }
    //from right to left
    if (endX > start && start < endY) {
        for (var i = endY - 1; i >= start; i--) {
            var num = arr[endX][i]
            print(num)
        }
    }
    //bottom top
    if (endX - 1 > start && start < endY) {
        for (var i = endX - 1; i > start; i--) {
            print(arr[i][start])
        }
    }
}
var print = function (num) {
    console.log(num)
}
var array = [[1, 2, 8, 9], [2, 4, 8, 12], [4, 7, 10, 13], [6, 8, 11, 15]]
// var array = [[1, 2, 8, 9], [2, 4, 8, 12]]
PrintMatrixClockWisely(array, 4, 4)