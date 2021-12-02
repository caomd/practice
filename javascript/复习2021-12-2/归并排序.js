/*
 * @Author: caomd
 * @Date: 2021-12-02 23:32:46
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-02 23:48:34
 */
//归并排序 将大问题分解为小问题 然后合并 分治思想 分为左边右边 返回一个新的数组 要求额外的内存空间
var arr = [3, 5, 1, 6, 4, 7, 2]
var mergeSort = function (arr) {
    if (arr.length === 1) {
        return arr
    }
    var length = arr.length,
        mid = Math.floor(length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, length)
    return merge(mergeSort(left), mergeSort(right))
}
var merge = function (left, right) {
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
    while (ir < right.length) {
        result.push(right[ir])
        ir++
    }
    while (il < left.length) {
        result.push(left[il])
        il++
    }
    return result
}
console.log(mergeSort(arr))