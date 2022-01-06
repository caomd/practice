/*
 * @Author: caomd 
 * @Date: 2022-01-06 14:18:08 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 14:26:54
 */
//num - 1 & num if last bit is 1 will switch 0 util equals 0
var BinarySystemCountOne = function () {
    var binarySystemNum = 0b111001101101, count = 0
    while (binarySystemNum) {
        binarySystemNum = (binarySystemNum - 1) & binarySystemNum
        count++
    }
    console.log(count)
}
BinarySystemCountOne()