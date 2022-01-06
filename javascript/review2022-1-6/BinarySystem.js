/*
 * @Author: caomd 
 * @Date: 2022-01-06 13:20:25 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 13:26:26
 */
var BinarySystem = function () {
    var binarySystemNum = 0b111001101101
    var flag = 1, count = 0
    while (flag) {
        if (flag & binarySystemNum) {
            count++
        }
        flag = flag << 1
        console.log(flag)
    }
    console.log(flag)
    console.log(count)
    return count
}
BinarySystem()