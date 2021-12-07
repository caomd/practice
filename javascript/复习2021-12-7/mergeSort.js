/*
 * @Author: caomd
 * @Date: 2021-12-07 11:49:54
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 12:30:55
 */
//mergeSort idea  divide thought bigger question switch smaller question return new arry
var arr = [3, 5, 1, 6, 4, 7, 2]
var mergeSort = function (arr) {
    if (arr.length === 1) {
        return arr
    }
    var mid = Math.floor(arr.length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length)
    return merge(mergeSort(left), mergeSort(right))
}
var merge = function (left, right) {
    var i = 0, j = 0, result = []
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(right[j])
            j++
        } else {
            result.push(left[i])
            i++
        }
    }
    while (i < left.length) {
        result.push(left[i])
        i++
    }
    while (j < right.length) {
        result.push(right[j])
        j++
    }
    return result
}
console.log(mergeSort(arr))