/*
 * @Author: caomd
 * @Date: 2021-12-01 22:57:08
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-01 23:45:20
 */
//归并排序 分治思想 分解成小问题， 合并为一个大的问题 左部分 右部分 通过merge函数合并
var arr = [3, 5, 1, 6, 4, 7, 2]
var mergeSort = function (arr) {
    //这样写merge接受的参数为undefined是因为当数组长度为1时，返回的是undefined所以数组长度为1时，要返回数组 只是一个元素 所以应该 修改如下
    // if (arr.length > 1) {
    //     var length = arr.length, mid = Math.floor(length / 2),
    //         left = arr.slice(0, mid),
    //         right = arr.slice(mid, right)
    //     return merge(mergeSort(left), mergeSort(right))
    // }
    //修改后
    if (arr.length === 1) {
        return arr
    }
    var length = arr.length, mid = Math.floor(length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, right)
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
    //比较左右两个值大小，互换位置
    var il = 0; ir = 0, result = []
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il])
            il++
        } else {
            result.push(right[ir])
            ir++
        }
    }
    //将剩余的加入到result中
    while (il < left.length) {
        result.push(left[il])
        il++
    }
    while (ir < right.length) {
        result.push(right[ir])
        ir++
    }
    return result
}

console.log(mergeSort(arr))