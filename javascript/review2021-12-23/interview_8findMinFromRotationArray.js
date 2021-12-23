/*
 * @Author: caomd 
 * @Date: 2021-12-23 21:51:28 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-23 22:21:43
 */
//find rotation Array min
var FindRotationMin = function () {
    return find(arr, 0, arr.length - 1)
}
var find = function (arr, left, right) {
    var mid = Math.floor((left + right) / 2)
    if (arr[mid] === arr[left] && arr[left] === arr[right]) {
        return orderTraverseSearch(arr)
    }
    if (right - left === 1) {
        mid = right
        console.log(arr[mid])
        return arr[mid]
    }
    if (arr[mid] > arr[left]) {
        left = mid
    }
    if (arr[mid] < arr[right]) {
        right = mid
    }
    return find(arr, left, right)
}
var orderTraverseSearch = function (arr) {
    var min = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

var arr = [2, 3, 4, 5, 6, 7, 1, 2]
// var arr = [1, 1, 1, 0, 1]
console.log(FindRotationMin(arr))