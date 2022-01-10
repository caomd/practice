/*
 * @Author: caomd 
 * @Date: 2022-01-10 16:50:45 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-10 17:23:56
 */
var arr = [3, 5, 1, 6, 4, 7, 2]
var BinarySearch = function (num) {
    //1.quickSort
    quickSort(arr)
    //thought  mid arr divide left and right and then recursion left and right
    if (arr === null || !Array.isArray(arr)) return false
    while (arr.length >= 1) {
        var mid = Math.floor((0 + arr.length) / 2)
        if (arr[mid] > num) {
            arr = arr.slice(0, mid - 1)
        } else if (arr[mid] < num) {
            arr = arr.slice(mid + 1, arr.length)
        } else {
            console.log('find the num ' + num)
            return mid
        }
    }
    throw new Error('not found the num')
}
var quickSort = function (arr) {
    quick(arr, 0, arr.length - 1)
}
var quick = function (arr, left, right) {
    var index = partition(arr, left, right)
    if (left < index - 1) {
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
BinarySearch(7)