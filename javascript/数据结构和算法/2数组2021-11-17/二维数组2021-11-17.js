//迭代二维数组元素
function printMatrix(myMatrix) {
    for (var i = 0; i < myMatrix.length; i++) {
        for (var j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j])
        }
    }
}
var myMatrix = [[72, 75, 79, 79, 81, 81], [81, 79, 75, 75, 73, 73]]
printMatrix(myMatrix)

//创建多维数组 3X3X3
var matrix3x3x3 = []
for (var i = 0; i < 3; i++) {
    matrix3x3x3[i] = []
    for (var j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (var z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}
console.log(matrix3x3x3)
//遍历 三维就嵌套3层
function matrixMulti(matrix) {
    for (var i = 0; i < matrix3x3x3.length; i++ ) {
        for (var j = 0; j < matrix3x3x3[i].length; j++) {
            for (var z = 0; z < matrix3x3x3[j].length; z++) {
                console.log(matrix3x3x3[i][j][z])
            }
        }
    }
}
matrixMulti(matrix3x3x3)
