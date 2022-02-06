/*
 * @Author: caomd 
 * @Date: 2022-02-06 22:56:11 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-02-06 23:14:09
 */

var print1ToN = function (n) {
    var numStr = '', i = 0
    while (i++ < n) {
        numStr += '0'
    }
    var numArr = numStr.split('')
    while (!Increment(numArr)) {
        console.log(Number(numArr.join('')))
    }
}
var Increment = function (num) {
    var length = num.length, isTakeOver = 0, isOverFlow = false, sum = 0
    for (var i = length - 1; i >= 0; i--) {
        sum = num[i] - 0 + isTakeOver
        if (i === length - 1) {
            sum++
        }
        if (sum >= 10) {
            if (i === 0) {
                isOverFlow = true
            } else {
                sum -= 10
                num[i] = sum
                isTakeOver = 1
            }
        } else {
            num[i] = sum
            break
        }
    }
    return isOverFlow
}
print1ToN(2)