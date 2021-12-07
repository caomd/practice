/*
 * @Author: caomd
 * @Date: 2021-12-07 10:06:56
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 10:12:10
 */
//insertionSort idea behind element compare to its before all of element outer loop from 1 to length and inner j=i judge while j>=0 and arr[j]<arr[j-1] swap() j--
var arr = [3, 5, 1, 6, 4, 7, 2]
var insertionSort = function () {
    for (var i = 1; i < arr.length; i++) {
        var j = i
        while (j >= 0 && arr[j] < arr[j - 1]) {
            swap(arr, j, j - 1)
            j--
        }
    }
    console.log(arr, 'insertion Sort')
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
insertionSort(arr)
