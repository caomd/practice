/*
 * @Author: caomd
 * @Date: 2021-12-02 07:32:43
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-02 07:38:23
 */
//选择排序思路 每次选出最小的 放到第一位 然后选出第二个最小的，放到第二位 每次都会排好一位所以把内循环的轮数减去外循环的轮数
var arr = [3, 5, 1, 6, 4, 7, 2]
var selectionSort = function () {
    for (var i = 0; i < arr.length; i++) {
        var min = i
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
            if (min !== i) {
                swap(arr, i, min)
            }
        }
    }
    console.log(arr)
}
function swap(arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
selectionSort()