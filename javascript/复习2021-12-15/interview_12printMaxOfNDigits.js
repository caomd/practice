/*
 * @Author: caomd
 * @Date: 2021-12-17 11:29:00
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-17 12:07:15
 */
//print 
var printMaxOfDigits = function (n) {
    //initailize
    var digits = ''
    for (var i = 0; i < n; i++) {
        digits += '0'
    }
    var maxNum = 1 + digits - 0
    MaxOfDigits(digits, maxNum)
}
var MaxOfDigits = function (digits, maxNum) {
    var count = 0, carry = 0, length = digits.length
    while (Number(digits) < maxNum - 1) {
        while (count < 9) {
            count++
            digits = carry + '' + count
            console.log(Number(digits))
        }
        carry++
        count = -1
    }
}

printMaxOfDigits(5)