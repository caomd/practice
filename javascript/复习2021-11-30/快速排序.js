/*
 * @Author: caomd
 * @Date: 2021-11-30 08:27:58
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-30 09:10:50
 */
//快速排序 特点：利用中间值，左边数组小于主元pivoti++,右边大于主元j--,停止遍历的时候 交换左右的位置 i++ j-- 边界条件i<=j 不满足条件跳出while(i<=j) 返回左坐标 此时 左坐标左侧数组均小于主元值，右侧大于主元值 比较left和左坐标-1 大小，如果小，则表示左侧还有数组，则比较右侧right和左坐标的大小 递归执行与主元比较的函数
var arr = [3, 5, 1, 6, 4, 7, 2]
var quickSort = function () {
    return quick(arr, 0, arr.length - 1)
    //如果不写递归函数
    // if (arr.length > 1) {
    //     var left = 0, length = arr.length, right = length - 1
    //     var index = quick(arr, left, right)
    //     //判断左侧下标-1是否小于left 如果大于则证明左侧还有数组元素
    //遍历条件边界
    //     while (left < index - 1) {
    //         index = quick(arr, left, index - 1)
    //     }
    //     while (right > index) {
    //         index = quick(arr, index, right)
    //     }
    // }
    // return arr
}
//递归函数
var quick = function (arr, left, right) {
    if (arr.length > 1) {
        var index = partiton(arr, left, right)
        //判断左侧下标-1是否小于left 如果大于则证明左侧还有数组元素
        if (left < index - 1) {
            quick(arr, left, index - 1)
        }
        if (right > index) {
            quick(arr, index, right)
        }
    }
    return arr
}
//划分过程
var partiton = function (arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)],
        il = left, ir = right
    //比较左侧和主元值的大小 i++
    //边界条件il<=ir 左下标 大于 右下标 跳出while
    while (il <= ir) {
        while (arr[il] < pivot && il < arr.length) {
            il++
        }
        while (arr[ir] > pivot && ir < arr.length) {
            ir--
        }
        //跳出循环表示此时的arr[il]值大于pivot,右侧值小于pivot
        //交换左右坐标的元素 交换之后满足左小于pivot 右大于pivot 继续向下遍历
        if (il <= ir) {
            swap(arr, il, ir)
            il++
            ir--
        }
    }
    //ir<il 此时il左侧的值均小于pivot 返回左侧下标
    return il
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
console.log(quickSort())