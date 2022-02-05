/*
 * @Author: caomd 
 * @Date: 2022-01-25 10:18:33 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-25 10:28:47
 */
var arr = [72, 28, 51, 96, 62, 87, 33, 45, 24]
var quickSort = function () {
    var length = arr.length
    quick(arr, 0, length - 1)
    console.log('arr is sorted', arr)
}
var quick = function (arr, left, right) {
    var index = partition(arr, left, right)
    if (index - 1 > left) {
        quick(arr, left, index - 1)
    }
    if (index < right) {
        quick(arr, index, right)
    }
}
var partition = function (arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)], i = left, j = right
    while (i <= j) {
        while (arr[i] < pivot && i < arr.length) {
            i++
        }
        while (arr[j] > pivot && j >= 0) {
            j--
        }
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    return i
}
var swap = function (arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
quickSort()