/*
 * @Author: caomd
 * @Date: 2021-12-08 14:31:52
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-09 11:49:56
 */
//when arr[i] ===arr[j] and === arr[mid] can not confirm mid in before increase arr or behind part increase so can not use twi divide search and select orderSort arithmetic /algorithm
//src arr [1,0,1,1,1,1]
//rotation arr
// var arr = [1, 1, 1, 0, 1]
var arr = [5, 7, 8, 9, 11, 2, 3, 5]
var SortRotationArry = function () {
    if (arr === null || arr.length <= 0) {
        return
    }
    var i = 0, j = arr.length - 1, mid = i
    while (arr[i] >= arr[j]) {
        if (j - i === 1) {
            return mid = j
            break
        }
        mid = Math.floor((i + j) / 2)
        //arr[i] === arr[j] === arr[mid]
        if (arr[i] === arr[j] && arr[j] === arr[mid]) {
            return minFind(arr, i, j)
        }
        if (arr[i] < arr[mid]) {
            i = mid
        } else if (arr[j] >= arr[mid]) {
            j = mid
        }
    }
}
var minFind = function (arr, i, j) {
    var result = arr[i]
    for (var start = i + 1; start <= j; start++) {
        if (result > arr[start]) {
            result = arr[start]
        }
    }
    return result
}
console.log(SortRotationArry())