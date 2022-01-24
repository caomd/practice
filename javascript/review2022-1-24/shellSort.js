/*
 * @Author: caomd 
 * @Date: 2022-01-24 20:41:55 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-24 22:04:32
 */
var arr = [72, 28, 51, 96, 62, 87, 33, 45, 24]
var shellSort = function (arr) {
    var length = arr.length
    var d = Math.floor(length / 2)
    d = isOdd(d)
    while (d >= 1) {
        var i = 0, j = i + d
        while (i <= j && j < length) {
            while (arr[i] < arr[j] && j < length) {
                i++
                j++
            }
            if (i <= j && j < length) {
                var t = arr[i]
                arr[i] = arr[j]
                arr[j] = t
                i++
                j++
            }
        }
        d = Math.floor(d / 2)
        d = isOdd(d)
    }
    console.log(arr)
}
var isOdd = function (num) {
    console.log(num % 2)
    if (num === 0) return 0
    if (num % 2) {
        return num
    }
    return num + 1
}
shellSort(arr)