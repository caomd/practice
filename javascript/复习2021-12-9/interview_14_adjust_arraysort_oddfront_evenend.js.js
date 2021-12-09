/*
 * @Author: caomd
 * @Date: 2021-12-09 18:03:41
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-09 18:25:58
 */
//调整数组顺序是奇数位于偶数前
//idear 和比较前后大小值差不多 前小后大
var arr = [3, 5, 1, 6, 4, 7, 2]
var changeOddAndEven = function () {
    if (Array.isArray(arr) && arr.length > 0) {
        reorderArray(arr, 0, arr.length - 1)
    }
    console.log(arr)
}
var reorderArray = function (arr, left, right) {
    var i = left, j = right
    while (i <= j) {
        //arr[i]>>1 === 0 为偶数 ===1 为奇数
        while ((arr[j] & 1) === 0 && j < arr.length) {
            //j is even & 1 ===0
            j--
        }
        while ((arr[i] & 1) === 1 && i < arr.length) {
            //odd & 1 === 1
            i++
        }
        //switch i j
        if (i <= j) {
            swap(arr, i, j)
        }
    }
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
changeOddAndEven()
// console.log(3 >> 1)//1
// console.log(2 >> 1)//1
// console.log(3 << 1)//6
// console.log(2 << 1)//4