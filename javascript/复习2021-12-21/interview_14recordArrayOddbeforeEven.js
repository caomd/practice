/*
 * @Author: caomd
 * @Date: 2021-12-21 11:10:52
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 11:27:40
 */
//odd before even
var recordArrayOddBeforeEven = function (arr) {
    changeOddBefore(arr, 0, arr.length - 1)
}
var changeOddBefore = function (arr, left, right) {
    var i = left, j = right
    while (i <= j) {
        while (checkOddEven(arr[i]) && i < arr.length) {
            i++
        }
        while (!checkOddEven(arr[j]) && j >= 0) {
            j--
        }
        //change
        if (i <= j) {
            var t = arr[i]
            arr[i] = arr[j]
            arr[j] = t
            i++
            j--
        }
    }
    console.log(arr)
}
//check odd or even
function checkOddEven(num) {
    console.log(num & 1)
    return num & 1
}

recordArrayOddBeforeEven([12, 4, 3, 1, 5, 6, 3, 8, 11, 6, 4, 21, 34])