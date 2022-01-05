/*
 * @Author: caomd 
 * @Date: 2022-01-05 14:43:22 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-05 14:55:58
 */
//rule 
var BinarySystem = function () {
    var binaryNum = 0b101101101,
        flag = 1, count = 0
    while (flag) {
        if (binaryNum & flag) { //every bit & 1
            count++
        }
        flag = flag << 1// operate 32bit 1,2,2^2,2^3...
    }
    console.log(count)
}
BinarySystem()