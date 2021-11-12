//二维数组中的查找
// 1 2 8 9
// 2 4 8 12
// 4 7 10 13 
// 6 8 11 15
// var tem[][] = { 1, 2, 8, 9, 2, 4, 8, 12, 4, 7, 10, 13, 6, 8, 11, 15}
// var array[][] = [1, 2, 8, 9][2, 4, 8, 12][4, 7, 10, 13][6, 8, 11, 15]
function matrix(){
    var data = [1, 2, 8, 9, 2, 4, 8, 12, 4, 7, 10, 13, 6, 8, 11, 15]
    var arr = new Array[4][4]
    k = 0
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            while (data[k]) {
                arr[i][j] = data[k]
                k++
                break
            }
        }
    }
    
    console.log(arr.length)
}