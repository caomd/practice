/*
 * @Author: caomd 
 * @Date: 2021-11-28 22:53:12 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-29 06:15:38
 */
var arr = [3, 5, 1, 6, 4, 7, 2]
//分治思想 
var mergeSort = function (arr) {
    if (arr.length === 1) {
        return arr
    }
    var mid = Math.floor(arr.length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length)
    //这里一定要写return 不然mergeSort排序正确的数组不会返回，而是undefinde
    return merge(mergeSort(left), mergeSort(right))
}
var merge = function (left, right) {
    var i = 0, j = 0, result = []
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++])
        }
        else {
            result.push(right[j++])
        }
    }
    //上边操作只是将大的值赋给了result
    //将小的值继续赋给result
    while (i < left.length) {
        result.push(left[i++])
    }
    while (j < right.length) {
        result.push(right[j++])
    }
    console.log(result)
    return result
}
var toString = function () {
    var s = ''
    for (var i = 0; i < arr.length; i++) {
        s += arr[i] + '  '
    }
    console.log(s)
}
mergeSort(arr)