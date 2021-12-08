/*
 * @Author: caomd
 * @Date: 2021-12-08 11:48:10
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-08 12:04:40
 */
//quickSort 
//thinking quick recursion methods and need a partition methods achieve pivot compart left and right elements when left smaller and right bigger than pivot left ++ right-- until left <= right not meet this condition break and then return left index back to quick compare left and index-1 if() and if() index < right continue to recursion quick(index,right)
var arr = [3, 5, 1, 6, 4, 7, 2]
var quickSort = function () {
    if (Array.isArray(arr) && arr.length > 1) {
        quick(arr, 0, arr.length - 1)
        console.log('quickSort is ', arr)
    } else {
        throw new Error('not a arry')
    }

}
var quick = function (arr, left, right) {
    var index = partition(arr, left, right)
    if (left < index - 1) {
        quick(arr, left, index - 1)
    }
    if (right > index) {
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
        //switch
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    return i
}
function swap(arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
quickSort()

