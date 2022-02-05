/*
 * @Author: caomd 
 * @Date: 2022-01-25 10:42:30 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-25 12:10:04
 */
var arr = [72, 28, 51, 96, 62, 87, 33, 45, 24]
var mergeSort = function (arr) {
    var length = arr.length
    if (length === 1) return arr
    var mid = Math.floor(length / 2)
    var left = arr.slice(0, mid)
    var right = arr.slice(mid, length)
    return merge(mergeSort(left), mergeSort(right))
}
var merge = function (left, right) {
    var result = [], i = 0, j = 0
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(right[j++])
        } else {
            result.push(left[i++])
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
// var merge = function (left, right) {
//     var result = [], il = 0; ir = 0
//     while (il < left.length && ir < right.length) {
//         if (left[il] < right[ir]) {
//             result.push(left[il++])
//         } else {
//             result.push(right[ir++])
//         }
//     }
//     while (il < left.length) {
//         result.push(left[il++])
//     }
//     while (ir < right.length) {
//         result.push(right[ir++])
//     }
//     return result
// }
console.log(mergeSort(arr))