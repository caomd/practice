/*
 * @Author: caomd
 * @Date: 2021-12-16 11:16:54
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 11:50:15
 */
//binarysearch step order array and then binarySearch
var arr = [2, 3, 5, 1, 3, 7, 4, 2, 6, 8, 5, 19, 22, 11]
var BinarySearch = function (num) {
    //order arr
    quickSort(arr)
    console.log(arr)
    return binarySearchAss(arr, 0, arr.length - 1, num)
}
var binarySearchAss = function (arr, left, right, num) {
    if (arr.length > 0 && left < right) {
        var mid = Math.floor((left + right) / 2)
        if (arr[mid] > num) {
            return binarySearchAss(arr, 0, mid - 1, num)
        } else if (arr[mid] < num) {
            return binarySearchAss(arr, mid + 1, arr.length - 1, num)
        } else {
            return mid
        }
    } else {
        throw new Error('not fount the num')
    }
}
//find pivot and move left and right compare this value left small pivot and right bigger than pivot uitl left > right and return left index
var quickSort = function (arr) {
    //base case
    if (arr.length > 0 && Array.isArray(arr)) {
        quick(arr, 0, arr.length - 1)
    }
}
var quick = function (arr, left, right) {
    var index = partition(arr, left, right)
    //continue 
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
        while (i < arr.length && arr[i] < pivot) {
            i++
        }
        while (j >= 0 && arr[j] > pivot) {
            j--
        }
        //switch arr[i] arr[j]
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
var ret = BinarySearch(202)
console.log(ret)