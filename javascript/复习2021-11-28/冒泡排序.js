/*
 * @Author: caomd 
 * @Date: 2021-11-28 18:06:05 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-28 18:10:04
 */
var arr = [3, 5, 1, 6, 4, 7, 2]
var bubbleSort = function () {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    console.log(arr)
}
var swap = function (arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
bubbleSort()