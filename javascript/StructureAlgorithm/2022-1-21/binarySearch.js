/*
 * @Author: caomd 
 * @Date: 2022-01-21 13:10:23 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-21 13:30:44
 */
var arr = [3, 5, 1, 6, 4, 7, 2]
var binarySearch = function (target) {
    quickSort(arr)
    console.log(arr)
    var length = arr.length,
        left = 0, right = length - 1
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] > target) {
            right = mid - 1
        } else if (arr[mid] < target) {
            left = mid + 1
        }
    }
    throw new Error('not found the target num')
}
var quickSort = function (arr) {
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
    var pivot = arr[Math.floor((left + right) / 2)], i = left, j = right
    while (i <= j) {
        while (arr[i] < pivot && i < arr.length) {
            i++
        }
        while (arr[j] > pivot && j >= 0) {
            j--
        }
        if (i <= j) {
            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
    }
    return i
}
console.log('find target index :', binarySearch(50))