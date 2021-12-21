/*
 * @Author: caomd
 * @Date: 2021-12-21 10:16:10
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 10:23:04
 */
//from binary find 1
var find1FromBinary = function () {
    var binaryNum = 0b1011011011111, count = 0
    //rule binary substract 1 and & before
    while (binaryNum) {
        binaryNum = (binaryNum - 1) & binaryNum
        count++
    }
    console.log(count)
}
find1FromBinary()