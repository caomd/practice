/*
 * @Author: caomd 
 * @Date: 2021-11-29 14:25:36 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-29 15:27:14
 */
//分治思想 privot主元
//左边数组均小于主元，右边数组大于主元，
//小于的时候i++ 大于就停下
//右边大于j--小于就停下
//交换arr[i]和arr[j]的位置 i++ j--
//while i<=j 为边界条件
//否则return i左边下标，此时i下标元素是大于主元的 不参与排序
//比较left和返回左下标大小 小于index-1就再次划分数组
//否则如果右下标大于返回下标，则代表有右数组
//再继续划分右数组
var arr = [3, 5, 1, 6, 4, 7, 2]
var quickSort = function () {
    var length = arr.length
    if (length > 1) {
        return quick(arr, 0, length - 1)
    }
}
var quick = function (arr, left, right) {
    //划分过程，比较左边数组均小于arr中间主元值，右边均大于主元值
    var index = partition(arr, left, right)
    if (left < index - 1) {
        quick(arr, left, index - 1)
    }
    if (right > index) {
        quick(arr, index, right)
    }
    return arr
}
var partition = function (arr, left, right) {
    var privot = arr[Math.floor((left + right) / 2)]
    var i = left; j = right
    while (i <= j) {
        while (arr[i] < privot) {
            i++
        }
        while (arr[j] > privot) {
            j--
        }
        //交换arr[i]和arr[j]的位置,交换了位置，符合左边小于中间值，右边大于中间值
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    return i
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
console.log(quickSort())