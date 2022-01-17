/*
 * @Author: caomd 
 * @Date: 2022-01-17 18:49:23 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-17 19:35:26
 */

var print1ToMaxN = function (n) {
    if (n <= 0) {
        return
    }
    var numStr = '', i = 0
    //initialize num
    while (i < n) {
        numStr += '0'
        i++
    }
    var num = numStr.split('')
    while (!Increment(num)) {
        console.log(Number(num.join('')))
        // printNum(num.join(''))
    }
}
var Increment = function (num) {
    var isOverflow = false, nTakeOver = 0, nLength = num.length
    for (var i = nLength - 1; i >= 0; i--) {
        // console.log(num[i]-'0')
        var nSum = num[i] - 0 + nTakeOver
        if (i == nLength - 1) {
            nSum++
        }
        if (nSum >= 10) {
            //first 
            if (i === 0) {
                isOverflow = true
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
    return isOverflow
}
print1ToMaxN(2)