/*
 * @Author: caomd 
 * @Date: 2022-01-07 16:47:48 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-07 17:01:56
 */

var printArrayOddBeforeEven = function (arr, f) {
    if (arr === null || !Array.isArray(arr)) return false
    return switchArrOddEven(arr, f)
}
var switchArrOddEven = function (arr, f) {
    var i = 0, j = arr.length - 1
    while (i <= j) {
        while (f(arr[i])) {
            i++
        }
        while (!f(arr[j])) {
            j--
        }
        if (i <= j) {
            var t = arr[i]
            arr[i] = arr[j]
            arr[j] = t
        }
    }
    return arr
}
var isOdd = function (val) {
    return val & 1
}
var arr = [1, 2, 4, 5, 3, 6, 3, 8, 5, 2, 9, 11, 5, 6, 9, 12]
console.log(printArrayOddBeforeEven(arr, isOdd))