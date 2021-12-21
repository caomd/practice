/*
 * @Author: caomd
 * @Date: 2021-12-21 18:05:53
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 18:45:22
 */

//eachPattern

var each = function (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}

var print = function (arr, index) {
    console.log(arr, index)
}
each([1, 2, 3, 4, 5], print)

var compareArr = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error('not equal')
    } else {
        each(arr1, function (item, i) {
            if (item !== arr2[i]) {
                throw new Error('not equal')
            }
        })
        return true
    }
}
// console.log(compareArr([1, 2, 3], [1, 4, 4]))
console.log(compareArr([1, 2, 3], [1, 2, 3]))
