/*
 * @Author: caomd
 * @Date: 2021-12-07 14:57:40
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 15:22:07
 */
//two divide search divide array for two parts compare to search element
//step 1 order array
var array = [3, 5, 1, 6, 4, 7, 2]
var binarySearch = function (arr, num) {
    //sort
    quickSort(arr)
    console.log(arr)
    return search(arr, 0, arr.length - 1, num)
}
var search = function (arr, left, right, num) {
    if (left < arr.length && right >= 0) {
        var mid = Math.floor((left + right) / 2)
        if (arr[mid] > num) {
            //mid bigger than num  num in left
            return search(arr, left, mid - 1, num)
        } else if (arr[mid] < num) {
            return search(arr, mid + 1, right, num)
        } else {
            return mid
        }
    }
    throw new Error('not found the num')
}
//quickSort
var quickSort = function (arr) {
    if (arr.length > 1) {
        quick(arr, 0, arr.length - 1)
    }
}
var quick = function (arr, left, right) {
    var index = partition(arr, left, right)
    if (left < index - 1) {
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
        //change i,j
        if (i <= j) {
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
console.log(binarySearch(array, 3))