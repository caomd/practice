/*
 * @Author: caomd 
 * @Date: 2022-01-07 16:09:12 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-07 16:22:12
 */

var SortAges = function (arr) {
    var maxAge = 99, timeAges = []
    for (var i = 0; i <= 99; i++) {
        timeAges[i] = 0
    }
    for (var j = 0; j < arr.length; j++) {
        var age = arr[j]
        if (age > 100 || age < 0) {
            throw new Error('out of range')
        }
        timeAges[age] += 1
    }
    var index = 0
    for (var k = 0; k <= maxAge; k++) {
        for (var m = 0; m < timeAges[k]; m++) {
            arr[index] = k
            index++
        }
    }
    console.log(arr)
}
var arr = [3, 5, 1, 6, 4, 7, 2, 5, 6, 22, 42, 66, 2, 45, 23, 21, 7, 54, 6, 42, 43, 44, 45, 33, 32, 23, 45]
SortAges(arr)