/*
 * @Author: caomd 
 * @Date: 2022-01-18 21:39:20 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-18 21:55:26
 */

var print1ToMaxN = function (n) {
    var numStr = '', i = 0
    //initialize 
    while (i < n) {
        numStr += '0'
        i++
    }
    var num = numStr.split('')
    while (!Increament(num)) {
        console.log(Number(num.join('')))
    }
}
var Increament = function (num) {
    var length = num.length, isOverflow = false, nTakeOver = 0
    for (var i = length - 1; i >= 0; i--) {
        var numSum = num[i] - 0 + nTakeOver
        if (i === length - 1) {
            numSum += 1
        }
        if (numSum >= 10) {
            if (i === 0) {
                isOverflow = true
                break
            }
            numSum -= 10
            nTakeOver = 1
            num[i] = numSum
        } else {
            num[i] = numSum
            break
        }
    }
    return isOverflow
}
print1ToMaxN(2)