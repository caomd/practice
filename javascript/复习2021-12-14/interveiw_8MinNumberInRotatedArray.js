/*
 * @Author: caomd
 * @Date: 2021-12-14 16:47:02
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-14 18:02:16
 */
// min num in rotation array
//think compare first num and mid num if first num > mid num then 
var arr = [7, 8, 9, 11, 1, 1, 2, 2, 3, 5, 6, 7]
// var arr = [1, 1, 1, 0, 1]
var findMinInRotationArray = function () {
    //base case
    if (!Array.isArray(arr) || arr.length <= 0) {
        return false
    }
    return find(arr, 0, arr.length - 1)
}
var find = function (arr, left, right) {
    var i = left, j = right, mid
    while (arr[i] >= arr[j]) {
        mid = Math.floor((i + j) / 2)
        if (j - i === 1) {
            mid = j
            return arr[mid]
        }
        if (arr[mid] === arr[i] && arr[mid] === arr[j]) {
            //not sure mid in where increase arry
            //order Search
            return minOrderSearch(arr, i, j)
        }
        if (arr[mid] >= arr[i]) {
            i = mid
        }
        if (arr[mid] <= arr[j]) {
            j = mid
        }
    }
}
var minOrderSearch = function (arr, left, right) {
    var result = arr[left]
    for (var i = left + 1; i <= right; i++) {
        if (arr[i] < result) {
            result = arr[i]
        }
    }
    return result
}
console.log(findMinInRotationArray())