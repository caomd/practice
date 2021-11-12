//二维数组中的查找
// 1 2 8 9
// 2 4 8 12
// 4 7 10 13 
// 6 8 11 15
// var array = [[1, 2, 8, 9], [2, 4, 8, 12], [4, 7, 10, 13], [6, 8, 11, 15]]
// matrix[row][column] 比较数值
// var data = [1, 2, 8, 9, 2, 4, 8, 12, 4, 7, 10, 13, 6, 8, 11, 15]
matrix[row * columns + column] > num

function matrix() {
    var array = [[1, 2, 8, 9], [2, 4, 8, 12], [4, 7, 10, 13], [6, 8, 11, 15]]
    var data = [1, 2, 8, 9, 2, 4, 8, 12, 4, 7, 10, 13, 6, 8, 11, 15]
    var arr = new Array()
    k = 0
    for (var i = 0; i < 4; i++) {
        arr[i] = new Array()
        for (var j = 0; j < 4; j++) {
            while (data[k]) {
                arr[i][j] = data[k]
                k++
                break
            }
        }
    }

    console.log(arr.length, arr)
    console.log(array.length, array)
}
matrix()
function findNum(matrix, rows, columns, num) {
    var row = 0
    var findFlag = false
    var column = columns - 1
    while (matrix !== null && row < rows && column >= 0) {
        // if (matrix[row * columns + column] === num) { //一维数组data
        if (matrix[row][column] === num) {
            findFlag = true
            break
        }
        // else if (matrix[row * columns + column] > num) {
        else if (matrix[row][column] > num) {
            column--
            // } else if (matrix[row * columns + column] < num) {
        } else if (matrix[row][column] < num) {
            row++
        }
    }
    if (findFlag) {
        return 'row----' + row + ' column----' + column
    } else if (matrix === null) {
        return '请输入正确的的数据'
    } else {
        return '没有查到相同数据'
    }
}
var array = [[1, 2, 8, 9], [2, 4, 8, 12], [4, 7, 10, 13], [6, 8, 11, 15]]
var data = [1, 2, 8, 9, 2, 4, 8, 12, 4, 7, 10, 13, 6, 8, 11, 15]
// console.log('结果是：' + findNum(data, 4, 4, 7))
console.log('结果是：' + findNum(array, 4, 4, 7))