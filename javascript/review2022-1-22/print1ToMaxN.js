/*
 * @Author: caomd 
 * @Date: 2022-01-22 13:20:14 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-22 13:37:59
 */

var print1ToMaxN = function (n) {
    var numStr = ''
    //initialize
    for (var i = 0; i < n; i++) {
        numStr += '0'
    }
    var numArr = numStr.split('')
    while (!Increament(numArr)) {
        console.log(Number(numArr.join('')))
    }
}
var Increament = function (num) {
    var length = num.length, isOverflow = false, isTakeOver = 0
    for (var i = length - 1; i >= 0; i--) {
        var nSum = num[i] - 0 + isTakeOver
        if (i === length - 1) {
            nSum++
        }
        if (nSum >= 10) {
            if (i === 0) {
                isOverflow = true
            }
            else {
                nSum -= 10
                isTakeOver = 1
                num[i] = nSum
            }
        }
        else {
            num[i] = nSum
            break
        }
    }
    return isOverflow
}
print1ToMaxN(2)