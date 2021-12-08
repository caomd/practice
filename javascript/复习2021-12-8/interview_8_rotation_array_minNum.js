/*
 * @Author: caomd
 * @Date: 2021-12-08 12:37:08
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-08 14:08:47
 */
//order Sort array rotation get a arrary move to part to itself tail then find the minNum
//thinking two divide search 
//src arr [2, 3, 5,7, 8, 9, 11]
//rotation arr
var arr = [7, 8, 9, 11, 2, 3, 5]
var findMin = function () {
    if (Array.isArray(arr) && arr.length >= 0) {
        return find(arr, 0, arr.length - 1)
    }
    throw new Error('arr is not a array')
}
var find = function (arr, left, right) {
    var i = left, j = right
    // arr[i] must bigger than arr[j] because sortarry or arr[i] is the smaller one so this is the final conditions
    //so set mid = i when arr[i]<arr[j] arr[i] === smallest one
    var mid = i
    while (arr[i] >= arr[j]) {
        if (j - i === 1) {
            //j smaller than i
            mid = j
            break
        }
        mid = Math.floor((i + j) / 2)
        if (arr[mid] >= arr[i]) {//mid increase order
            i = mid
        }
        if (arr[mid] <= arr[j]) {//min increase order
            j = mid
        }
    }
    console.log(arr[mid])
    return arr[mid]
}
findMin()