/*
 * @Author: caomd 
 * @Date: 2022-01-20 09:48:45 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-20 10:02:52
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
    var isOverFlow = false, nTakeOver = 0, length = num.length
    for (var i = length - 1; i >= 0; i--) {
        var nSum = num[i] - 0 + nTakeOver
        if (i === length - 1) {
            nSum++
        }
        if (nSum >= 10) {
            if (i === 0) {
                isOverFlow = true
            } else {
                nSum -= 10
                nTakeOver = 1
                num[i] = nSum
            }
        } else {
            num[i] = nSum
            break
        }
    }
    return isOverFlow
}
print1ToMaxN(2)