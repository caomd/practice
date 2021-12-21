/*
 * @Author: caomd
 * @Date: 2021-12-13 15:23:52
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 22:31:52
 */
//every circle left corner always startxstart and matirx 5x5 columns > 2x2 and matrix 6 > 2x2
//circle final condition colums > start * 2 and rows > start * 2
var PrintMatrixClockWisely = function (numbers, columns, rows) {
    if (numbers === null || columns <= 0 || rows <= 0) {
        return
    }
    var start = 0
    while (columns > start * 2 && rows > start * 2) {
        PrintMatrixInCircle(numbers, columns, rows, start)
        start++
    }
}
var PrintMatrixInCircle = function (numbers, columns, rows, start) {
    var endX = columns - 1 - start
    var endY = rows - 1 - start
    //from left to right print one row
    for (var i = start; i <= endY; i++) {
        var number = numbers[start][i]
        printNum(number)
    }
    //from top to bottom one column
    //judge whether has one column
    if (start < endX) {
        //first one not print
        for (var i = start + 1; i <= endX; i++) {
            var number = numbers[i][endY]
            printNum(number)
        }
    }
    //from right to left 
    if (start < endY && start < endX) {
        //last one not print
        for (var i = endY - 1; i >= start; i--) {
            var number = numbers[endX][i]
            printNum(number)
        }
    }
    //from bottom to top
    if (start < endX - 1 && start < endY) {
        //last one and first not print
        for (var i = endX - 1; i >= start + 1; i--) {
            var number = numbers[i][start]
            printNum(number)
        }
    }
}
var printNum = function (num) {
    console.log(num)
}
var array = [[1, 2, 8, 9], [2, 4, 8, 12], [4, 7, 10, 13], [6, 8, 11, 15]]
// var array = [[1, 2, 8, 9], [2, 4, 8, 12]]
PrintMatrixClockWisely(array, 4, 4)