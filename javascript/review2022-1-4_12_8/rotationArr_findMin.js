/*
 * @Author: caomd 
 * @Date: 2022-01-04 12:52:59 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-04 13:11:48
 */
var rotationArrFindMin = function (arr) {
    if (arr.length < 0 || arr === null) return false
    var length = arr.length, left = 0, right = length - 1, mid = Math.floor((left + right) / 2), min
    if (arr[left] === arr[right] && arr[right] === arr[mid]) {
        //not judge increase order
        return min = orderFind(arr)
    }
    return increaseOrder(arr, left, right)
}
var increaseOrder = function (arr, left, right) {
    var mid = Math.floor((left + right) / 2)
    if (right - left === 1) {
        mid = right
        return arr[mid]
    }
    if (arr[left] < arr[mid]) {
        left = mid
    }
    if (arr[right] > arr[mid]) {
        right = mid
    }
    return increaseOrder(arr, left, right)
}
var orderFind = function (arr) {
    var min = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}
// var arr = [2, 3, 4, 5, 6, 7, 1, 2]
var arr = [1, 1, 1, 0, 1]
console.log(rotationArrFindMin(arr))