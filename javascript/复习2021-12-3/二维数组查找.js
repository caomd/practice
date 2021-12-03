/*
 * @Author: caomd
 * @Date: 2021-12-03 10:13:48
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-03 10:28:51
 */
//二维数组查找 行列都是升序 从对角线开始查找 console.log(findNum(array, 4, 4, 7))
var array = [[1, 2, 8, 9], [2, 4, 8, 12], [4, 7, 10, 13], [6, 8, 11, 15]]
var findMatrix = function (arr, rows, columns, num) {
    var row = 0, column = columns - 1
    while (row < rows && column > -1) {
        if (arr[row][column] > num) {
            column--
        } else if (arr[row][column] < num) {
            row++
        } else if (arr[row][column] === num) {
            return '查找元素在行：' + row + '  列：' + column
        }
    }
    throw new Error('没有该查找项')
}
console.log(findMatrix(array, 4, 4, 17))