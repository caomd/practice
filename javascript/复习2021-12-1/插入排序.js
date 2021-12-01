/*
 * @Author: caomd
 * @Date: 2021-12-01 19:04:25
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-01 20:10:41
 */
//插入排序，后一项和前边所有项比较
var arr = [3, 5, 1, 6, 4, 7, 2, 0]
var insertionSort = function () {
    for (var i = 1; i < arr.length; i++) {
        var j = i
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(arr, j - 1, j)
            j--
        }
    }
    console.log(arr)
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
insertionSort()