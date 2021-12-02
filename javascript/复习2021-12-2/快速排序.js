/*
 * @Author: caomd
 * @Date: 2021-12-02 23:53:00
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-03 06:16:33
 */
//快速排序 使用主元 pivot 做中间值划分
var arr = [3, 5, 1, 6, 4, 7, 2]
var quickSort = function () {
    var length = arr.length
    if (arr.length > 1) {
        quick(arr, 0, length - 1)
    }
    console.log(arr)
}
var quick = function (arr, left, right) {
    var index = partition(arr, left, right)
    if (left < index - 1) {
        quick(arr, left, index - 1)
    }
    if (right > index) {
        quick(arr, index, right)
    }
}
//划分过程
var partition = function (arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)],
        i = left, j = right, length = arr.length
    while (i <= j) {
        while (arr[i] < pivot && i < length) {
            i++
        }
        while (arr[j] > pivot && j >= 0) {
            j--
        }
        //跳出while循环不再满足左小右大
        //交换i,j的位置
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    //跳出while循环此时i>j 左边均小于pivot
    return i
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
quickSort()