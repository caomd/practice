var array = [[1, 2, 8, 9], [2, 4, 8, 12], [4, 7, 10, 13], [6, 8, 11, 15]]
function findNum(matrix, rows, columns, num) {
    var column = columns - 1, row = 0;
    if (matrix !== null && rows > 0 && columns >= 0) {
        while (column > 0 && row < rows) {
            //或matrix[row*columns+column>num]
            if (matrix[row][column] > num) {
                column--
                //或matrix[row*columns+column>num]
            } else if (matrix[row][column] < num) {
                row++
            } else {
                return {
                    row: row,
                    column: column
                }
            }
        }
    } else {
        return false
    }
}

console.log(findNum(array, 4, 4, 77))