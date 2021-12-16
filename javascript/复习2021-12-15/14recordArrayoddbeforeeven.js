/*
 * @Author: caomd
 * @Date: 2021-12-16 17:03:22
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 17:19:52
 */
//odd before even any num & 1 get result odd & 1 is odd even & 1 is 0
//uses two points 
function recordNumOddBeforeEven(dataArr, fun) {
    var i = 0, j = dataArr.length - 1
    while (i <= j) {
        while (i < dataArr.length - 1 && fun(dataArr[i])) {
            i++
        }
        while (j >= 0 && !fun(dataArr[j])) {
            j--
        }
        if (i <= j) {
            //change i,j
            var t = arr[i]
            arr[i] = arr[j]
            arr[j] = t
            i++
            j--
        }
    }
    console.log(dataArr)
}
var isOddNum = function (num) {
    return num & 1
}
var arr = [1, 2, 4, 5, 3, 6, 3, 8, 5, 2, 9, 11, 5, 6, 9, 12]
recordNumOddBeforeEven(arr, isOddNum)