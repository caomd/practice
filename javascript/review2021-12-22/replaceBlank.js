/*
 * @Author: caomd 
 * @Date: 2021-12-22 18:04:40 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-22 18:19:22
 */
var replaceBlank = function (str) {
    //base case
    if (str === '' || str === null) return false
    var strArr = str.split(''), countBlank = 0
    var i = -1
    while (i++ < strArr.length) {
        if (strArr[i] === ' ') countBlank++
    }
    if (countBlank) {
        var initialLength = strArr.length,
            newLength = initialLength + countBlank * 2,
            initialEndIndex = initialLength - 1,
            newEndIndex = newLength - 1
        while (initialEndIndex !== newEndIndex) {
            while (strArr[initialEndIndex] !== ' ') {
                strArr[newEndIndex] = strArr[initialEndIndex]
                initialEndIndex--
                newEndIndex--
            }
            strArr[newEndIndex--] = '0'
            strArr[newEndIndex--] = '2'
            strArr[newEndIndex--] = '%'
            initialEndIndex--
        }
        console.log(strArr.join(''))
        return strArr.join('')
    }
    throw new Error('not fount blank')
}
replaceBlank('We are the campain')