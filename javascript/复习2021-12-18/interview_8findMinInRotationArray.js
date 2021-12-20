/*
 * @Author: caomd
 * @Date: 2021-12-20 21:15:16
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 21:43:40
 */
//rotationArray find min
var findMinRotationArray = function (arr) {
    findMin(arr, 0, arr.length - 1)
}
var findMin = function (arr, left, right) {
    while (arr[left] >= arr[right]) {
        if (right - left === 1) {
            mid = right
            console.log(arr[mid])
            return arr[right]
            break
        }
        var mid = Math.floor((left + right) / 2)
        if (arr[mid] === arr[left] && arr[mid] === arr[right]) {
            return orderTraverse(arr)
        }
        if (arr[mid] > arr[left]) {
            left = mid
        }
        if (arr[mid] < arr[right]) {
            right = mid
        }
    }
}
var orderTraverse = function (arr) {
    var min = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min)
    return min
}
// var arr = [2, 3, 4, 5, 6, 7, 1, 2]
var arr = [1, 1, 1, 0, 1]
findMinRotationArray(arr)
