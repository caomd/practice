//二维数组中的查找
// 1 2 8 9
// 2 4 8 12
// 4 7 10 13 
// 6 8 11 15
// var tem[][] = { 1, 2, 8, 9, 2, 4, 8, 12, 4, 7, 10, 13, 6, 8, 11, 15}
// var array = [[1, 2, 8, 9],[2, 4, 8, 12],[4, 7, 10, 13],[6, 8, 11, 15]]
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
    var column = columns - 1
    while (row < rows && column >= 0) {
        if (matrix[row][column] === num) {
            return row + '',+ olumn
        }
        if (matrix[row][column] > num) {
            column--
        } else {
            row++
        }
    }
}