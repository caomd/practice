/*
 * @Author: caomd 
 * @Date: 2022-01-05 13:58:36 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-05 14:30:20
 */

var arr = [3, 5, 1, 6, 4, 7, 2]
//thought 
var mergeSort = function (arr) {
    if (arr.length < 0 || !Array.isArray(arr)) return console.log('not a arrary')
    if (arr.length === 1) return arr
    var mid = Math.floor(arr.length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length)
    return merge(mergeSort(left), mergeSort(right))
}
var merge = function (left, right) {
    var i = 0; j = 0, result = []
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
    console.log(result)
    return result
}
console.log(mergeSort(arr))