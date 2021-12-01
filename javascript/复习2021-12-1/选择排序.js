/*
 * @Author: caomd
 * @Date: 2021-12-01 18:45:32
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-01 19:05:05
 */

//selectionSort  外层循环是轮数，内存循环每次都找到最小的元素和第一个交换位置 下次找到第二个最小的元素和第二位交换位置
var arr = [3, 5, 1, 6, 4, 7, 2]
var selectionSort = function () {
    for (var i = 0; i < arr.length; i++) {
        var min = i
        //j=i 每次都拍好了一位，从前边开始
for (var j = i; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
        min = j
    }
}
//判断min是否变了 
if (i !== min) {
    swap(arr, i, min)
}
    }
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
selectionSort()
console.log(arr)