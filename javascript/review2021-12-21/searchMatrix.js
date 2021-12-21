/*
 * @Author: caomd 
 * @Date: 2021-12-21 19:12:44 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 20:33:40
 */
var array = [[1, 2, 8, 9], [2, 4, 8, 12], [4, 7, 10, 13], [6, 8, 11, 15]]
//compare right top items to num and then get the i++ j--
var searchMatrix = function (arr, rows, cols, num) {
    var i = 0, j = cols - 1
    while (i <= rows - 1 && j >= 0) {
        if (arr[i][j] > num) {
            j--
        }
        else if (arr[i][j] < num) {
            i++
        }
        else {
            return true
        }
    }
    throw new Error('not found num')

}
console.log(searchMatrix(array, 4, 4, 7))