/*
 * @Author: caomengdie 
 * @Date: 2021-11-27 18:15:35 
 * @Last Modified by: caomengdie
 * @Last Modified time: 2021-11-27 19:54:30
 */
//分治思想 利用两个指针 第一指向第一位，右边一个指向最后一项，中间项作为主元
var quickSort = function (array) {
    return quick(array, 0, array.length - 1)
}
//递归函数
var quick = function (arr, left, right) {
    //分离为较小值数组和较大值数组 partition函数返回值将赋值给index
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right)
        //存在较小值的元素
        if (left < index - 1) {
            quick(arr, left, index - 1)
        }
        //
        if (index < right) {
            quick(arr, index, right)
        }
    }
    return arr
}
//划分过程
var partition = function (arr, left, right) {
    //主元
    var pivot = arr[Math.floor((right + left) / 2)],
        i = left, j = right
    while (i <= j) { //left 没有超过 right 没有交叉
        while (arr[i] < pivot) {
            i++
        }
        while (arr[j] > pivot) {
            j--
        }
        //比较i,j大小换位置
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    return i //返回了左坐标
}
var swap = function (arr, index1, index2) {
    //交换时使用中间值来存储某一交换项的值
    var aux = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = aux
}
console.log(quickSort([3, 5, 1, 6, 4, 7, 2]))