/*
 * @Author: caomd
 * @Date: 2021-12-21 18:40:18
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 18:54:53
 */

//proxyPattern
var CachePattern = function () {
    var accumulate = {}, args = arguments
    return function () {
        // console.log(args)
        var key = Array.prototype.slice.call(args).join('')
        if (accumulate[key]) {
            console.log(accumulate[key], '1')
            return accumulate[key]
        }
        accumulate[key] = calculate.apply(this, args)
        console.log(accumulate[key], '2')
        return accumulate[key]
    }
}
var calculate = function (arr) {
    var result = 1
    for (var i = 0; i < arr.length; i++) {
        result *= arr[i]
    }
    return result
}
var ret = CachePattern([1, 2, 3])
ret()
ret()