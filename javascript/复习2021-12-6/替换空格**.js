/*
 * @Author: caomd
 * @Date: 2021-12-06 15:31:27
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-06 16:10:02
 */
//时间复杂度为O(n) add array length need blank length
var repalceBlank = function (str) {
    //step 1 count blank count add arr length
    //tranver to array
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
        while (initalLength !== newLength) {
            while (arrStr[initalLength] !== ' ') {
                arrStr[newLength] = arrStr[initalLength]
                initalLength--
                newLength--
            }
            //arrStr[initalLength] === ' '
            arrStr[newLength--] = '0'
            arrStr[newLength--] = '2'
            arrStr[newLength--] = '%'
            initalLength--
        }
        return arrStr.join('')
    }
}
console.log(repalceBlank('we are happy always forever'))