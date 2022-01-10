/*
 * @Author: caomd 
 * @Date: 2022-01-10 17:25:46 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-10 17:34:48
 */

var arr = [3, 5, 1, 6, 4, 7, 2]
var mergeSort = function (arr) {
    if (arr.length === 1) return arr
    var mid = Math.floor(arr.length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length)
    return merge(mergeSort(left), mergeSort(right))
}
var merge = function (left, right) {
    var result = [], i = 0, j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }
    while (i < left.length) {
        result.push(left[i++])
    }
    while (j < right.length) {
        result.push(right[j++])
    }
    return result
}
console.log(mergeSort(arr))