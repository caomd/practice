/*
 * @Author: caomd
 * @Date: 2021-11-30 06:37:22
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-30 06:49:50
 */
//插入排序的特点：后一项和它前面的所有项做比较 小就换位置 i从第一位开始 j=i-1 j-- j>=0
var arr = [3, 5, 1, 6, 4, 7, 2]
var insertionSort = function () {
    for (var i = 1; i < arr.length; i++) {
        for (var j = i; j >= 0; j--) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j)
            }
        }
    }
    return arr
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
console.log(insertionSort())