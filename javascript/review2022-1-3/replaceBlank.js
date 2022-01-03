/*
 * @Author: caomd
 * @Date: 2022-01-03 09:43:44
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-03 10:05:07
 */
//think from end to start
var replaceBlank = function (str) {
    var strArr = str.split('')
    //count blank 
    var i = 0, count = 0
    while (i < strArr.length) {
        if (strArr[i] === ' ') {
            count++
        }
        i++
    }
    if (count) {
        var length = strArr.length,
            newLength = length + count * 2,
            initLast = length - 1,
            newLast = newLength - 1
        while (initLast !== newLast) {
            if (strArr[initLast] !== ' ') {
                strArr[newLast] = strArr[initLast]
                newLast--
            } else {
                strArr[newLast--] = '0'
                strArr[newLast--] = '2'
                strArr[newLast--] = '%'
            }
            initLast--
        }
        return strArr.join('')
    }
}
console.log(replaceBlank('we are the campain'))