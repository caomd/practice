/*
 * @Author: caomd 
 * @Date: 2021-12-20 15:12:45 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 15:30:20
 */
//binarySearch
var arr = [2, 3, 5, 1, 3, 7, 4, 2, 6, 8, 5, 19, 22, 11]
var binarySearch = function (num) {
    //order arr
    quickSort()
    return binarySearchAss(arr, 0, arr.length - 1, num)
}
var binarySearchAss = function (arr, left, right, num) {
    var mid = Math.floor((left + right) / 2)
    if (arr[mid] > num && right >= 0) {
        return binarySearchAss(arr, left, mid - 1, num)
    } else if (arr[mid] < num && left < right) {
        return binarySearchAss(arr, mid + 1, right, num)
    } else if (arr[mid] === num) {
        return true
    } else {
        throw new Error('not found this num')
    }

}
var quickSort = function () {
    quick(arr, 0, arr.length - 1)
}
var quick = function (arr, left, right) {
    var index = partition(arr, left, right)
    if (index - 1 > left) {
        quick(arr, left, index - 1)
    }
    if (right > index) {
        quick(arr, index, right)
    }
}
var partition = function (arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)], i = left, j = right
    while (i <= j) {
        while (arr[i] < pivot && i < arr.length) {
            i++
        }
        while (arr[j] > pivot && j >= 0) {
            j--
        }
        //change ij
        if (i <= j) {
            var t = arr[i]
            arr[i] = arr[j]
            arr[j] = t
            i++
            j--
        }
    }
    return i
}
console.log(binarySearch(22))