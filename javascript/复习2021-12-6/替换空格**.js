/*
 * @Author: caomd
 * @Date: 2021-12-06 15:31:27
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-06 16:22:06
 */
//时间复杂度为O(n) add array length need blank length
var repalceBlank = function (str) {
    //step 1 count blank count add arr length
    //tranver to array
    var beginTime = new Date().getTime()
    var arrStr = str.split('')
    var i = 0, blankCount = 0
    while (i < arrStr.length) {
        if (arrStr[i] === ' ') {
            blankCount++
        }
        i++
    }
    if (blankCount) {
        var initalLength, newLength
        initalLength = str.length - 1
        newLength = str.length + blankCount * 2 - 1
        //initalLength-- newLength-- until meet blank initalLength-1,newLength--=[%20] until newlenght = initalLength
        while (initalLength >= 0 && initalLength !== newLength) {
            if (arrStr[initalLength] !== ' ') {
                arrStr[newLength--] = arrStr[initalLength]
                initalLength--
            } else {
                //arrStr[initalLength] === ' '
                arrStr[newLength--] = '0'
                arrStr[newLength--] = '2'
                arrStr[newLength--] = '%'
                initalLength--
            }
        }
        console.log(arrStr.join(''))
        var endTime = new Date().getTime()
        console.log(endTime - beginTime)
    }
}
repalceBlank('we are happy forever')