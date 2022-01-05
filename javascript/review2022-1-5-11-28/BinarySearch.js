/*
 * @Author: caomd 
 * @Date: 2022-01-05 12:19:03 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-05 12:48:37
 */
var arr = [3, 5, 1, 6, 4, 7, 2]
//first order arr and then binarySearch
var BinarySearch = function (num) {
    quickSort(arr)
    console.log(arr)
    //begin
    var left = 0, right = arr.length - 1
    while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if (arr[mid] > num) {
            right = mid - 1
        } else if (arr[mid] < num) {
            left = mid + 1
        } else {
            console.log(mid)
            return mid
        }
    }
    throw new Error('not found the num')
}
var quickSort = function (arr) {
    if (arr.length < 0 || !Array.isArray(arr)) return console.log('is not a array')
    quick(arr, 0, arr.length - 1)
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
    var pivot = arr[Math.floor((left + right) / 2)],
        i = left, j = right
    while (i <= j) {
        while (arr[i] < pivot && i < arr.length) {
            i++
        }
        while (arr[j] > pivot && j >= 0) {
            j--
        }
        //switch i j
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
BinarySearch(0)