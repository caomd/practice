/*
 * @Author: caomd
 * @Date: 2021-12-07 09:09:39
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 09:34:26
 */
// bubbleSort idea out loop mean traverse time and inner loop mean adjust next one num compare j<length-1-i
var arr = [3, 5, 1, 6, 4, 7, 2]
var bubbleSort = function () {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            //already select one correct num  in right place j<arr.length -i
            //current element and next compare  j<arr.length-1 second last
            if (arr[j + 1] < arr[j]) {
                swap(arr, j, j + 1)
            }
        }
    }
    console.log('after bubbleSort arr' + arr)
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
bubbleSort(arr)