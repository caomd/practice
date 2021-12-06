/*
 * @Author: caomd 
 * @Date: 2021-12-06 14:45:24 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-06 15:30:11
 */
//rows and columns ascend series find from rightTop if findnum bigger than the rightTop number column--
var array = [[1, 2, 8, 9], [2, 4, 8, 12], [4, 7, 10, 13], [6, 8, 11, 15]]
function findMatrix(arr, rows, columns, num) {
    //rightTop number index row*columns+column 0*4+3=3 /1*4+3 =7/ 2*4+3=11...
    //declare variable
    //two-dimensional array 二维数组
    var row = 0, column = columns - 1
    //rightTop number bigger than num column--
    //边界条件 final conditions
    if (array !== null && Array.isArray(arr)) {
        //arrange two dimensinal array to linear array
        var linerArray = [], i = 0
        while (i < rows) {
            linerArray = [...linerArray, ...arr[i]]
            i++
        }
        console.log(linerArray)
        while (row < rows && column > -1) {
            console.log(linerArray[row * columns + column])
            if (linerArray[row * columns + column] > num) {
                column--
            } else if (linerArray[row * columns + column] < num) {
                row++
            } else if (linerArray[row * columns + column] === num) {
                var index = row * columns + column
                return '查找元素在下标' + index + '的位置'
            } else {
                return 'not found the number in the array'
            }
        }
    } else {
        throw new Error('数组不存在')
    }

}
console.log(findMatrix(array, 4, 4, 7))
//use two dimensional array find number
var find = function (arr, rows, columns, num) {
    if (arr !== null && Array.isArray(arr)) {
        var row = 0, column = columns - 1
        while (row < rows && column > -1) {
            //righttop number a[row][column] bigger column--
            console.log(arr[row][column])
            if (arr[row][column] > num) {
                column--
            } else if (arr[row][column] < num) {
                row++
            } else {
                return { row, column }
            }
        }
        return 'not found the number'
    } else {
        return 'array not exist'
    }
}
console.log(find(array, 4, 4, 7))