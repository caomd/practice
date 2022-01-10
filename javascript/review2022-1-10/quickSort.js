/*
 * @Author: caomd 
 * @Date: 2022-01-10 17:35:49 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-10 17:41:13
 */

var quickSort = function () {
    if (arr === null || !Array.isArray(arr) || arr.length < 0) return false
    quick(arr, 0, arr.length - 1)
    console.log(arr)
}
var quick = function (arr, left, right) {
    var index = partition(arr, left, right)
    if (index - 1 > left) {
        quick(arr, left, index - 1)
    }
    if (right > index) {
        quick(arr, index, right)
    }
}
var partition = function (arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)],
        i = left, j = right
    while (i <= j) {
        while (arr[i] < pivot && i < arr.length) {
            i++
        }
        while (arr[j] > pivot && j >= 0) {
            j--
        }
        if (i <= j) {
            var t = arr[i]
            arr[i] = arr[j]
            arr[j] = t
            i++
            j--
        }
    }
    return i
}
var arr = [3, 5, 1, 6, 4, 7, 2]
quickSort(arr)