/*
 * @Author: caomd
 * @Date: 2021-12-07 14:10:40
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 14:55:13
 */
//quickSort idear use pivot two pionts first and last one pivot is the middle val move left and right left all smaller than middle and right part all bigger than middle if not meet condition change left and right and continue move left and right util left index bigger than right index and then return left index compare to left and return index-1 value partiton two parts continue to recursion left and index-1 part or index and right part 
//methods quickSort,quick and partition
var arr = [3, 5, 1, 6, 4, 7, 2]
var quickSort = function () {
    if (arr.length > 1) {
        quick(arr, 0, arr.length - 1)
    }
    console.log(arr)
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
    var pivot = arr[Math.floor((left + right) / 2)],
        i = left, j = right
    while (i <= j) {
        while (arr[i] < pivot && i < arr.length) {
            i++
        }
        while (arr[j] > pivot && j >= 0) {
            j--
        }
        if (i <= j) {
            //change arr[i] and arr[j]
            swap(arr, i, j)
            i++
            j--
        }
    }
    return i
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
quickSort(arr)